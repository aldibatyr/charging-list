import React, { useEffect, useState } from "react"
import { ActivityIndicator, View, ViewStyle } from "react-native"

import * as Location from "expo-location"
import { router } from "expo-router"
import { observer } from "mobx-react-lite"
import MapView, { Marker } from "react-native-maps"
import { Screen } from "src/components"
import { useStores } from "src/models"

export default observer(function MapScreen(_props) {
  const { locationsStore } = useStores()
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const [_, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied")
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      await locationsStore.fetchLocations()
      setIsLoading(false)
    })()
  }, [locationsStore])

  const handleShowLocation = (locationId: number) => {
    if (location) {
      locationsStore.setActiveLocationId(locationId)
      router.navigate(`/locations/${locationId}`)
    }
  }

  return (
    <Screen preset="fixed" contentContainerStyle={$screenContentContainer}>
      {isLoading ? (
        <View style={$loadingIndicatorContainer}>
          <ActivityIndicator style={$loadingIndicator} size="large" color="#0000ff" />
        </View>
      ) : (
        <MapView
          style={$mapView}
          initialRegion={{
            latitude: 43.23276 ?? location?.coords?.latitude,
            longitude: 76.93066 ?? location?.coords?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {locationsStore.locations.map((location) => (
            <Marker
              onCalloutPress={() => handleShowLocation(location.id)}
              key={location.id}
              coordinate={{
                latitude: location.coordinates.latitude,
                longitude: location.coordinates.longitude,
              }}
              title={location.name}
              description={location.address}
            />
          ))}
        </MapView>
      )}
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  flex: 1,
}

const $mapView: ViewStyle = {
  width: "100%",
  height: "100%",
}

const $loadingIndicatorContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const $loadingIndicator: ViewStyle = {
  width: 50,
  height: 50,
}
