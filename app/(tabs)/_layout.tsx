import React from 'react'

import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'

import Colors from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue'
import { IconAwesome, IconEntypo } from '@/components/Icon'



export default function TabLayout() {
  const colorScheme = useColorScheme()

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
            <Link href='/(modal)/habits-list' asChild>
              <Pressable>
                {({ pressed }) => (
                  <IconAwesome
                    name='info-circle'
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
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
          tabBarIcon: ({ color }) => <IconAwesome name='clock-o' color={color} />,
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
