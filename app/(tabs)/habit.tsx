import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useHabitStore } from '@/store/habit';

export default function HabitManagementScreen() {

  const { habits } = useHabitStore((s) => s)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>我的习惯</Text>
      <FlatList
        data={habits}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

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

});
