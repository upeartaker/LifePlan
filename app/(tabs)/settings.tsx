import { Text, View } from '@/components/Themed';
import { Button, StyleSheet } from 'react-native';
import { useUserStore } from '@/store/user';
export default function SettingsScreen() {
  const { user, setUser } = useUserStore()
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Text>{user.name}</Text>
      <Button title='change name' onPress={() => {
        setUser({
          ...user,
          name: 'tywl2',
        })
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})