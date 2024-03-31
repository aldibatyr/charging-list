import React from "react"
import { ViewStyle } from "react-native"

import * as WebBrowser from "expo-web-browser"
import { observer } from "mobx-react-lite"
import { Button, Screen, Text } from "src/components"
import { translate } from "src/i18n"
import { useStores } from "src/models"
import { spacing } from "src/theme"

export default observer(function LocationScreen(_props) {
  const { locationsStore } = useStores()

  const handleNavigateToProviderWebsite = async () => {
    if (locationsStore.activeLocation?.provider_app_link) {
      await WebBrowser.openBrowserAsync(locationsStore.activeLocation.provider_app_link)
    }
  }
  return (
    <Screen preset="scroll" contentContainerStyle={$screenContentContainer}>
      <Text preset="heading" text={locationsStore.activeLocation?.name} />
      <Text preset="subheading" text={locationsStore.activeLocation?.company} />
      <Text preset="default" text={locationsStore.activeLocation?.address} />
      <Text
        preset="default"
        text={`${locationsStore.activeLocation?.power_output?.join("-")} kWt`}
      />
      <Text preset="default" text={locationsStore.activeLocation?.porttype?.join(", ")} />
      <Text
        preset="default"
        text={translate("location.stalls", { count: locationsStore.activeLocation?.stalls_count })}
      />
      {locationsStore.activeLocation?.provider_app_link && (
        <Button tx="location.navigate" onPress={handleNavigateToProviderWebsite} />
      )}
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  padding: spacing.md,
}
