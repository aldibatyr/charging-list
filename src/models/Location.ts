import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { ChargingPortType } from "src/services/api"

import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const LocationModel = types
  .model("Location")
  .props({
    id: types.identifierNumber,
    name: types.maybe(types.string),
    company: types.maybe(types.string),
    address: types.maybe(types.string),
    latitude: types.maybe(types.number),
    longitude: types.maybe(types.number),
    porttype: types.maybe(types.array(types.enumeration(Object.values(ChargingPortType)))),
    inserted_at: types.maybe(types.string),
    updated_at: types.maybe(types.string),
    stalls_count: types.maybe(types.number),
    power_output: types.maybe(types.array(types.number)),
    provider_app_link: types.maybe(types.string),
  })
  .actions(withSetPropAction)
  .views((self) => ({
    get coordinates() {
      return {
        latitude: self.latitude ?? 0,
        longitude: self.longitude ?? 0,
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Location extends Instance<typeof LocationModel> {}
export interface LocationSnapshotOut extends SnapshotOut<typeof LocationModel> {}
export interface LocationSnapshotIn extends SnapshotIn<typeof LocationModel> {}
export const createLocationDefaultModel = () =>
  types.optional(LocationModel, {
    id: 0,
    name: "",
    address: "",
    latitude: 0,
    longitude: 0,
    inserted_at: "",
    updated_at: "",
    porttype: [ChargingPortType.Unknown],
    company: "",
    stalls_count: 0,
    power_output: [0],
  })
