import React from "react"

import { useFonts } from "expo-font"
import { Redirect, SplashScreen, Stack } from "expo-router"
import { observer } from "mobx-react-lite"
import { useStores } from "src/models"
import { customFontsToLoad } from "src/theme"

export default observer(function Layout() {
  const {
    authenticationStore: { anonMode },
  } = useStores()

  const [fontsLoaded, fontError] = useFonts(customFontsToLoad)

  React.useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  if (!anonMode) {
    return <Redirect href="/log-in" />
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="locations/[id]"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  )
})
