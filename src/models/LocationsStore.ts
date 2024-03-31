import { types } from "mobx-state-tree"
import { withSetPropAction } from "src/models/helpers/withSetPropAction"
import { LocationModel } from "src/models/Location"
import { api } from "src/services/api"

export const LocationsStoreModel = types
  .model("LocationsStore")
  .props({
    locations: types.array(LocationModel),
    activeLocationId: types.maybe(types.number),
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    async fetchLocations() {
      const response = await api.getLocations()
      if (response.kind === "ok") {
        store.setProp("locations", response.locations)
      } else {
        console.error(`Error fetching locations: ${JSON.stringify(response)}`)
      }
    },
    setActiveLocationId(id: number) {
      store.activeLocationId = id
    },
  }))
  .views((store) => ({
    get locationIds() {
      return store.locations.map((location) => location.id)
    },
    get activeLocation() {
      return store.locations.find((location) => location.id === store.activeLocationId)
    },
  }))
