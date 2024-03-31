import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { LocationsStoreModel } from "src/models/LocationsStore"

import { AuthenticationStoreModel } from "./AuthenticationStore"
import { EpisodeStoreModel } from "./EpisodeStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  authenticationStore: types.optional(AuthenticationStoreModel, {}),
  episodeStore: types.optional(EpisodeStoreModel, {}),
  locationsStore: types.optional(LocationsStoreModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
