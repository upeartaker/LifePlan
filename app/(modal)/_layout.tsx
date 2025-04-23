import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { Slot, Stack, usePathname, useRouter } from 'expo-router'
import { useMemo } from 'react'
import { Text } from '@/components/Themed'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerLeft: {
    fontSize: 14,
    color: 'blue',
  },
})

export default function ModalLayout() {
  const pathname = usePathname()
  const title = useMemo(() => {
    switch (pathname) {
      case '/':
        return 'Home'
      case '/add-habits':
        return '添加习惯'
      default:
        return 'Modal'
    }
  }, [pathname])

  const router = useRouter()

  return (
    <Stack>
      <Stack.Screen
        name='habits-list'
        options={{
          title,
          headerLeft: () => (
            <Text style={styles.headerLeft} onPress={() => router.push('/(modal)/add-habits')}>
              自定义习惯
            </Text>
          ),
          headerRight: () => (
            <Text style={styles.rightText} onPress={() => router.back()}>
              完成
            </Text>
          ),
        }}
      />
    </Stack>
  )
}
