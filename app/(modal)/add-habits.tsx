import { View, Text } from '@/components/Themed'
import { Button, StyleSheet, Switch,  } from 'react-native'
import { useLocalSearchParams, useRouter, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { TextInput } from '@/components/Input/TextInput'

// 颜色选择 8个 柔和的亮色
const colors = [
  '#FFC0CB',
  '#808080',
  '#8B0000',
  '#FFFF00',
  '#FFA500',
  '#00FF00',
  '#0000FF',
]

export default function AddHabitsModalScreen() {
  const router = useRouter()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title='完成' onPress={() => router.back()} />,
    })
  }, [])

  const params = useLocalSearchParams<{
    name: string
    id: string
    description: string
  }>()

  const [preData, setPreData] = useState(() => {
    return {
      name: params.name ?? '自定义',
      id: params.id ?? 'custom',
      description: params.description ?? '',
    }
  })

  const [activeColor, setActiveColor] = useState(colors[0])

  return (
    <View style={rootStyle.container}>
      <View style={infoAreaStyle.container}>
        <View style={infoAreaStyle.item}>
          <Text style={infoAreaStyle.title}>习惯名称</Text>
          <TextInput
            value={preData.name}
            onChangeText={(text) => setPreData({ ...preData, name: text })}
          />
        </View>

        <View style={infoAreaStyle.item}>
          <Text style={infoAreaStyle.title}>设置颜色</Text>
          <View style={infoAreaStyle.colorPicker}>
            {colors.map((color) => (
              <Text
                key={color}
                style={[
                  infoAreaStyle.colorItem,
                  {
                    backgroundColor: color,
                    borderWidth: activeColor === color ? 2 : 0,
                  },
                ]}
                onPress={() => setActiveColor(color)}
              />
            ))}
          </View>
        </View>
      </View>

      <View style={infoAreaStyle.container}> 
        <View style={infoAreaStyle.item}>
          <Text style={infoAreaStyle.title}>类别</Text>

        </View>
        <View style={infoAreaStyle.item}>
          <Text style={infoAreaStyle.title}>周期</Text>
          
        </View>
        <View style={infoAreaStyle.item}>
          <Text style={infoAreaStyle.title}>目标</Text>
          
        </View>
      </View>

      <View style={infoAreaStyle.container}>
        <View style={infoAreaStyle.item}>
          <Text style={infoAreaStyle.title}>提醒时间</Text>
          <Switch />
        </View>
      </View>

      <View style={infoAreaStyle.container}>  
        <View style={infoAreaStyle.item}>
          <Text style={infoAreaStyle.title}>写一句激励自己的话</Text>
          <TextInput
            value={preData.description}
            multiline
            style={{
              height: 100,
            }}
            onChangeText={(text) => setPreData({ ...preData, description: text })}
          />
        </View>
      </View>
    </View>
  )
}

const rootStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
    backgroundColor: '#f3f3f3',
  },
})

const infoAreaStyle = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  item: {
    marginBottom: 16,
  },
  colorPicker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  colorItem: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#000',
  },
})
