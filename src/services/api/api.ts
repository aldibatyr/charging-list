/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://docs.infinite.red/ignite-cli/boilerplate/app/services/Services.md)
 * documentation for more details.
 */

import type { EpisodeSnapshotIn } from "../../models/Episode"
import type { ApiConfig, ApiFeedResponse, ChargingPortType } from "./api.types"

import { ApiResponse, ApisauceInstance, create } from "apisauce"
import { LocationSnapshotIn } from "src/models"
import { generatePostgressError } from "src/services/api/postgressError"
import { supabase } from "src/services/supabase"

import Config from "../../config"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  /**
   * Gets a list of recent React Native Radio episodes.
   */
  async getEpisodes(): Promise<{ kind: "ok"; episodes: EpisodeSnapshotIn[] } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<ApiFeedResponse> = await this.apisauce.get(
      `api.json?rss_url=https%3A%2F%2Ffeeds.simplecast.com%2FhEI_f9Dx`,
    )

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data

      // This is where we transform the data into the shape we expect for our MST model.
      const episodes: EpisodeSnapshotIn[] =
        rawData?.items.map((raw) => ({
          ...raw,
        })) ?? []

      return { kind: "ok", episodes }
    } catch (e) {
      if (__DEV__ && e instanceof Error) {
        console.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }

  async getLocations(): Promise<
    { kind: "ok"; locations: LocationSnapshotIn[] } | GeneralApiProblem
  > {
    // make the api call

    // eslint-disable-next-line camelcase
    const { data: charging_points, error } = await supabase.from("charging_points").select("*")

    // the typical ways to die when calling an api
    if (error) {
      const problem = generatePostgressError(error)
      if (problem) return { kind: "bad-data" }
    }

    try {
      // eslint-disable-next-line camelcase
      const rawData = charging_points

      // This is where we transform the data into the shape we expect for our MST model.
      const locations: LocationSnapshotIn[] =
        rawData?.map((raw) => ({
          id: raw.id,
          name: raw.name ?? "",
          company: raw.company ?? "",
          address: raw.address ?? "",
          latitude: raw.latitude ?? 0,
          longitude: raw.longitude ?? 0,
          inserted_at: raw.inserted_at ?? "",
          updated_at: raw.updated_at ?? "",
          porttype: (raw.porttype as ChargingPortType[]) ?? [],
          stalls_count: raw.stalls_count ?? 0,
          power_output: raw.power_output ?? [0],
          provider_app_link: raw.provider_app_link ?? "",
        })) ?? []

      return { kind: "ok", locations }
    } catch (e) {
      if (__DEV__ && e instanceof Error) {
        console.error(`Bad data: ${e.message}\n${error?.hint}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
