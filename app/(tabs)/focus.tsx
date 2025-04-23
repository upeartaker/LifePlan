import { Text, View } from '@/components/Themed';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default function FocusScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus</Text>
    </View>
  )
}