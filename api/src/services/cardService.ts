// #swagger.autoBody=true
import { type Request, type Response } from 'express'

import cardSearch, { type ApiCard } from '../api/scryfall/cardSearch'
import { type Card, findCard, insertCard, updateCard } from '../database/cards'
import { ErrorResponse } from '../api/types'
import { getUnknownError } from '../errors'

type RequestQuery<T> = Request<
  Record<string, never>,
  Record<string, never>,
  Record<string, never>,
  T
>

type DeleteQuery = {
  name: string
}

type SearchQuery = {
  q: string
}

function isSuccessfullResponse(response: ErrorResponse | ApiCard[]): response is ApiCard[] {
  return response instanceof Array
}

function getCard(name: string, inCollection: number, userId: string): Card {
  return {
    name,
    inCollection,
    userId,
  }
}

async function searchCards(req: RequestQuery<SearchQuery>, res: Response) {
  // load all cards from scryfall
  const response = await cardSearch(req.query.q)

  if (isSuccessfullResponse(response)) {
    try {
      // find cards in database and join them to scryfall response
      const apiResponse = await Promise.all(
        response.map(async (card) => {
          if (!req.user?.id) return card

          const foundCard = await findCard(card.cardFaces[0].name, req.user.id)
          return {
            ...card,
            inCollection: foundCard?.inCollection ?? 0,
          }
        }),
      )

      res.send(apiResponse ?? [])
    } catch (error) {
      return getUnknownError(res, error)
    }
  } else {
    res.send(response)
  }
}

async function upsertCard(req: Request, res: Response<Card>) {
  if (!req.user?.id) return // TODO nahovno, uz se to pridava v authenticateToken

  const dbCard = await findCard(req.body.name, req.user.id)

  const card: Card = {
    name: req.body.name,
    inCollection: (dbCard?.inCollection ?? 0) + 1,
    userId: req.user.id,
  }

  dbCard ? updateCard(card) : insertCard(card)

  res.send(card)
}

async function deleteCard(req: RequestQuery<DeleteQuery>, res: Response) {
  if (!req.user?.id) return // TODO nahovno, uz se to pridava v authenticateToken

  const dbCard = await findCard(req.query.name, req.user.id)
  if (!dbCard) return

  const card = getCard(
    req.query.name,
    dbCard.inCollection ? dbCard.inCollection - 1 : 0,
    req.user.id,
  )
  updateCard(card)
  res.send(card)
}

export { searchCards, upsertCard, deleteCard }
export type { RequestQuery, DeleteQuery, SearchQuery }