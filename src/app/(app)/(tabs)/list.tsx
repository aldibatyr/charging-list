import React from "react"

import { observer } from "mobx-react-lite"
import { Screen } from "src/components"
import LocationListItem from "src/components/LocationListItem"
import { useStores } from "src/models"

export default observer(function ListScreen() {
  const { locationsStore } = useStores()

  return (
    <Screen preset="scroll">
      {locationsStore.locations.map((location) => (
        <LocationListItem key={location.id} location={location} />
      ))}
    </Screen>
  )
})
