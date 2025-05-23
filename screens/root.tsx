import { useColorScheme } from '@/hooks/useColorScheme'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { Stack } from 'expo-router'
export function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ActionSheetProvider>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen
            name='(modal)'
            options={{
              headerShown: false,
              presentation: 'modal',
            }}
          />
        </Stack>
      </ActionSheetProvider>
    </ThemeProvider>
  )
}
