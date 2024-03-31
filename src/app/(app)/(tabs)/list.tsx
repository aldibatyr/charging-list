import React from "react"
import { View, ViewStyle } from "react-native"

import { router } from "expo-router"
import { observer } from "mobx-react-lite"
import { ListItem, ListView, Screen, Text } from "src/components"
import { Location, useStores } from "src/models"
import { colors, spacing } from "src/theme"

export default observer(function ListScreen() {
  const { locationsStore } = useStores()

  return (
    <Screen preset="scroll" style={$screenContentContainer}>
      {locationsStore.locations.length > 0 ? (
        <ListView
          style={$list}
          data={locationsStore.locations}
          renderItem={({ item }) => (
            <ListItem
              height={30}
              // text={(item as Location).name}
              rightIcon="caretRight"
              style={$listItemContainer}
              rightIconColor={colors.tint}
              onPress={() => {
                locationsStore.setActiveLocationId((item as Location).id)
                router.navigate(`/locations/${(item as Location).id}`)
              }}
            >
              <View>
                <Text preset="subheading" text={(item as Location).name} />
                <Text>{(item as Location).address}</Text>
              </View>
            </ListItem>
          )}
          estimatedItemSize={50}
        />
      ) : (
        <View style={$emptyListContainer}>
          <Text preset="subheading" tx="locations.empty" />
        </View>
      )}
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  flex: 1,
}

const $list: ViewStyle = {
  paddingHorizontal: spacing.md,
}

const $emptyListContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const $listItemContainer: ViewStyle = {
  shadowColor: colors.palette.neutral800,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  backgroundColor: colors.palette.neutral100,
  margin: spacing.md,
  borderRadius: spacing.md,
  padding: spacing.md,
}
