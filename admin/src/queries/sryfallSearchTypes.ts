type ScryfallCard = {
  object: string
  id: string
  oracle_id: string
  multiverse_ids: number[]
  mtgo_id?: number
  mtgo_foil_id?: number
  tcgplayer_id: number
  cardmarket_id: number
  card_faces?: CardFace[]
  name: string
  lang: string
  released_at: string
  uri: string
  scryfall_uri: string
  layout: string
  highres_image: boolean
  image_status: string
  image_uris?: ImageUris
  mana_cost: string
  cmc: number
  type_line: string
  oracle_text?: string
  colors: string[]
  color_identity: string[]
  keywords: string[]
  all_parts?: AllPart[]
  legalities: Legalities
  games: string[]
  reserved: boolean
  foil: boolean
  nonfoil: boolean
  finishes: string[]
  oversized: boolean
  promo: boolean
  reprint: boolean
  variation: boolean
  set_id: string
  set: string
  set_name: string
  set_type: string
  set_uri: string
  set_search_uri: string
  scryfall_set_uri: string
  rulings_uri: string
  prints_search_uri: string
  collector_number: string
  digital: boolean
  rarity: string
  card_back_id: string
  artist: string
  artist_ids: string[]
  illustration_id: string
  border_color: string
  frame: string
  security_stamp?: string
  full_art: boolean
  textless: boolean
  booster: boolean
  story_spotlight: boolean
  edhrec_rank?: number
  penny_rank?: number
  prices: CardPrices
  related_uris: RelatedUris
  purchase_uris: PurchaseUris
  tcgplayer_etched_id?: number
  watermark?: string
  flavor_text?: string
  preview?: Preview
  arena_id?: number
  power?: string
  toughness?: string
  frame_effects?: string[]
  imageUrl: string | null // added by me
  oracleText: string | null // added by me
}

type CardFace = {
  object: string
  name: string
  mana_cost: string
  type_line: string
  oracle_text?: string
  colors: string[]
  power: string
  toughness: string
  flavor_text: string
  artist: string
  artist_id: string
  illustration_id: string
  image_uris: ImageUris
}

type ImageUris = {
  small: string
  normal: string
  large: string
  png: string
  art_crop: string
  border_crop: string
}

type AllPart = {
  object: string
  id: string
  component: string
  name: string
  type_line: string
  uri: string
}

type Legalities = {
  standard: string
  future: string
  historic: string
  gladiator: string
  pioneer: string
  explorer: string
  modern: string
  legacy: string
  pauper: string
  vintage: string
  penny: string
  commander: string
  oathbreaker: string
  brawl: string
  historicbrawl: string
  alchemy: string
  paupercommander: string
  duel: string
  oldschool: string
  premodern: string
  predh: string
}

type CardPrices = {
  usd: string
  usd_foil: string | null
  usd_etched: string | null
  eur: string
  eur_foil: string | null
  tix: string | null
}

type RelatedUris = {
  gatherer: string
  tcgplayer_infinite_articles: string
  tcgplayer_infinite_decks: string
  edhrec: string
}

type PurchaseUris = {
  tcgplayer: string
  cardmarket: string
  cardhoarder: string
}

type Preview = {
  source: string
  source_uri: string
  previewed_at: string
}

export type { ScryfallCard }
