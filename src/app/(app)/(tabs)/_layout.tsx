import React from "react"
import { TextStyle, ViewStyle } from "react-native"

import { Entypo } from "@expo/vector-icons"
import { Tabs } from "expo-router/tabs"
import { observer } from "mobx-react-lite"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "src/components"
import { translate } from "src/i18n"
import { colors, spacing, typography } from "src/theme"

export default observer(function Layout() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tabs.Screen
        name="map"
        options={{
          href: "/map",
          headerShown: false,
          tabBarLabel: translate("navigator.mapTab"),
          tabBarIcon: ({ focused }) => (
            <Entypo name="map" size={30} color={focused ? colors.tint : undefined} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          href: "/list",
          headerShown: true,
          tabBarLabel: translate("navigator.listTab"),
          tabBarIcon: ({ focused }) => (
            <Entypo name="list" size={30} color={focused ? colors.tint : undefined} />
          ),
        }}
      />
      {__DEV__ && (
        <Tabs.Screen
          name="debug"
          options={{
            href: "/debug",
            headerShown: false,
            tabBarLabel: translate("demoNavigator.debugTab"),
            tabBarIcon: ({ focused }) => (
              <Icon icon="debug" color={focused ? colors.tint : undefined} size={30} />
            ),
          }}
        />
      )}
    </Tabs>
  )
})

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}
