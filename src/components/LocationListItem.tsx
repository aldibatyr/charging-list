import React from "react"

import { View } from "react-native-reanimated/lib/typescript/Animated"
import { Text } from "src/components/Text"
import { Location } from "src/models"

interface LocationListItemProps {
  location: Location
}

const LocationListItem = (props: LocationListItemProps) => {
  return (
    <View>
      <Text>{props.location.name}</Text>
      <Text>{props.location.address}</Text>
    </View>
  )
}

export default LocationListItem
