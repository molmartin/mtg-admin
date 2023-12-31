import queryKeys from './queryKeys'
import { useQuery } from '@tanstack/vue-query'
import { mtgGet } from '@/api/mtgApi'
import { useCardSearch } from '@/components/InputSearch'
import { ScryfallCard } from './sryfallSearchTypes'

type CardPrices = {
  usd: string
  usd_foil: string | null
  usd_etched: string | null
  eur: string
  eur_foil: string | null
  tix: string | null
}

type ApiCard = {
  id: string
  frontFace: ScryfallCard
  backFace: ScryfallCard | null
  inCollection: number
  prices: CardPrices
}

async function searchCards(cardTitle: string) {
  if (!cardTitle) return []

  return (await mtgGet<ApiCard[]>(`api/card/search?q=${cardTitle}`)) ?? []
}

function useSearchQuery() {
  const { query } = useCardSearch()

  return useQuery(queryKeys.search(query), () => searchCards(query.value), {
    retry: false,
  })
}

export default useSearchQuery
export type { ApiCard, CardPrices }
