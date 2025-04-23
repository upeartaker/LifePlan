import { View, Text } from '@/components/Themed'
import { StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useMemo } from 'react'
export default function AddHabitsModalScreen() {
  const params = useLocalSearchParams<{
    name: string
    id: string
    description: string
  }>()
  const preData = useMemo(() => {
    return {
      name: params.name ?? '自定义',
      id: params.id ?? 'custom',
      description: params.description ?? '',
    }
  }, [params])
  return (
    <View style={styles.container}>
      <Text>{preData.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
