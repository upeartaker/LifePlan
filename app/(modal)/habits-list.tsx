import { Pressable, SectionList, StyleSheet } from 'react-native'
import { IconMaterial } from '@/components/Icon'
import { Text, View } from '@/components/Themed'
import { habits } from '@/constants/Habits'
import { useRouter } from 'expo-router'
export default function HabitsListModalScreen() {
  const router = useRouter()
  return (
    <SectionList
      style={styles.container}
      sections={habits}
      renderItem={({ item , section }) => (
        <Pressable
          onPress={() => {
            router.push({
              pathname: '/(modal)/add-habits',
              params: {
                name: item.name,
                id: item.id,
                description: item.description,
                type: section.type
              },
            })
          }}
        >
          <View style={styles.item}>
            <View style={styles.itemName}>
              <IconMaterial name={item.icon as any} size={24} color='blue' />
              <Text style={styles.itemNameText}>{item.name}</Text>
            </View>
          </View>
        </Pressable>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.title}>{section.name}</Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {},
  sectionHeader: {
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 10,
  },
  itemName: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemNameText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
  },
})
