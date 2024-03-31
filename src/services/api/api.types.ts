/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */
export interface EpisodeItem {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: {
    link: string
    type: string
    length: number
    duration: number
    rating: { scheme: string; value: string }
  }
  categories: string[]
}

export interface ApiFeedResponse {
  status: string
  feed: {
    url: string
    title: string
    link: string
    author: string
    description: string
    image: string
  }
  items: EpisodeItem[]
}

export enum ChargingPortType {
  Unknown = "Unknown",
  CCS1 = "CCS1",
  CCS2 = "CCS2",
  CHADEMO = "CHADEMO",
  TESLA = "TESLA",
  GBTAC = "GBTAC",
  GBTDC = "GBTDC",
  TYPE1 = "TYPE1",
  TYPE2 = "TYPE2",
}

export interface LocationItem {
  id: number
  name: string
  company: string
  address: string
  latitude: number
  longitude: number
  inserted_at: string
  updated_at: string
  porttype: ChargingPortType
}

export interface ApiLocationResponse {
  status: string
  locations: LocationItem[]
}

/**
 * The options used to configure apisauce.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}
