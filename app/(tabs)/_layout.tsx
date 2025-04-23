import React from 'react'

import { Tabs } from 'expo-router'
import { Platform, Pressable } from 'react-native'
import { Text } from '@/components/Themed'
import Colors from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue'
import { IconAwesome, IconEntypo, IconMaterial } from '@/components/Icon'
import { MenuComponentRef, MenuView } from '@react-native-menu/menu'
import { useRef } from 'react'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const menuRef = useRef<MenuComponentRef>(null)
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <IconAwesome name='check-circle' color={color} />
          ),
          headerTitle: '制定计划',
          headerRight: () => (
            <MenuView
              actions={[
                {
                  id: 'new-habit',
                  title: '添加习惯',
                  subtitle: '从预设习惯中选择',
                  image: Platform.select({
                    ios: 'plus',
                    android: 'ic_menu_add',
                  }),
                },
                {
                  id: 'custom-habit',
                  title: '自定义习惯',
                  subtitle: '创建新的习惯',
                  image: Platform.select({
                    ios: 'pencil',
                    android: 'ic_menu_edit',
                  }),
                },
              ]}
              onPressAction={({ nativeEvent: { event } }) => {
                switch (event) {
                  case 'new-habit':
                    // 处理添加预设习惯
                    break
                  case 'custom-habit':
                    // 处理自定义习惯
                    break
                }
              }}
            >
              <Pressable style={{ paddingHorizontal: 15 }}>
                <Text style={{ fontSize: 16 }}>添加</Text>
              </Pressable>
            </MenuView>
          ),
        }}
      />
      <Tabs.Screen
        name='plan'
        options={{
          tabBarLabel: '',
          headerTitle: '习惯管理',
          tabBarIcon: ({ color }) => <IconEntypo name='grid' color={color} />,
        }}
      />

      <Tabs.Screen
        name='focus'
        options={{
          tabBarLabel: '',
          headerTitle: '专注模式',
          tabBarIcon: ({ color }) => (
            <IconAwesome name='clock-o' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          tabBarLabel: '',
          headerTitle: '我的',
          tabBarIcon: ({ color }) => <IconAwesome name='user' color={color} />,
        }}
      />
    </Tabs>
  )
}
