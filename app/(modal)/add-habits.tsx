import { View, Text } from '@/components/Themed'
import { Button, Pressable, StyleSheet, Switch } from 'react-native'
import { useLocalSearchParams, useRouter, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { TextInput } from '@/components/Input/TextInput'
import { IconAwesome } from '@/components/Icon'
import { habits } from '@/constants/Habits'
import { useActionSheet } from '@expo/react-native-action-sheet'
import { cycles } from '@/constants/Cycle'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import dayjs from 'dayjs'
import { useHabitStore } from '@/store/habit'

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

// 习惯类别
const categories = habits
  .map((habit) => {
    return {
      name: habit.name,
      type: habit.type,
    }
  })
  .concat([
    {
      name: '自定义',
      type: 'custom',
    },
  ])

export default function AddHabitsModalScreen() {
  // 设置导航栏
  const router = useRouter()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title='完成' onPress={handleSave} />,
    })
  }, [])

  const { addHabit } = useHabitStore((s) => s)

  const handleSave = () => {
    addHabit({
      name: preData.name,
      description: params.description ?? '',
      color: activeColor,
      cycle: cycle.value,
      remindTime: remindTime,
      remindMessage: remindMessage,
      category: category.type,
      type: params.id,
    })
    router.back()
  }

  // 数据参数
  const params = useLocalSearchParams<{
    name: string
    id: (typeof habits)[number]['data'][number]['id']
    description: string
    type: (typeof habits)[number]['type']
  }>()

  const [preData, setPreData] = useState(() => {
    return {
      name: params.name ?? '自定义',
      id: params.id ?? 'custom',
    }
  })

  const [activeColor, setActiveColor] = useState(colors[0])

  const [category, setCategory] = useState<typeof categories[number]>(
    categories.find((item) => item.type === params.type) ?? categories[0]
  )
  const [cycle, setCycle] = useState(cycles[0])
  const [remindTime, setRemindTime] = useState<Date | null>(null)
  const [remindMessage, setRemindMessage] = useState<string | null>(null)

  // action sheet
  const { showActionSheetWithOptions } = useActionSheet()
  const handleSelectCategory = () => {
    showActionSheetWithOptions(
      {
        title: '选择类别',
        options: categories.map((item) => item.name),
        cancelButtonIndex: categories.length - 1,
      },
      (index) => {
        if (!index) return
        setCategory(categories[index])
      }
    )
  }

  const handleSelectCycle = () => {
    showActionSheetWithOptions(
      {
        title: '选择周期',
        options: cycles.map((item) => item.name),
        cancelButtonIndex: cycles.length - 1,
      },
      (index) => {
        if (!index) return
        setCycle(cycles[index])
      }
    )
  }

  // time picker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: Date) => {
    hideDatePicker()
    setRemindTime(date)
  }

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

        {params.description && (
          <View style={infoAreaStyle.item}>
            <Text style={infoAreaStyle.title}>习惯描述</Text>
            <Text>{params.description}</Text>
          </View>
        )}

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
          <Pressable
            style={infoAreaStyle.selectArea}
            onPress={handleSelectCategory}
          >
            <Text>{category.name}</Text>
            <IconAwesome name='chevron-right' size={12} color='#000' />
          </Pressable>
        </View>
        <View style={infoAreaStyle.item}>
          <Text style={infoAreaStyle.title}>周期</Text>
          <Pressable
            style={infoAreaStyle.selectArea}
            onPress={handleSelectCycle}
          >
            <Text>{cycle.name}</Text>
            <IconAwesome name='chevron-right' size={12} color='#000' />
          </Pressable>
        </View>
      </View>

      <View style={infoAreaStyle.container}>
        <View style={infoAreaStyle.item}>
          <Text style={infoAreaStyle.title}>提醒时间</Text>
          <View style={infoAreaStyle.selectArea}>
            <Text>
              {remindTime ? dayjs(remindTime).format('HH:mm') : '未设置'}
            </Text>
            <Switch
              value={remindTime !== null}
              onValueChange={() => {
                if (remindTime) {
                  setRemindTime(null)
                } else {
                  showDatePicker()
                }
              }}
            />
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode='time'
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>

      <View style={infoAreaStyle.container}>
        <View style={infoAreaStyle.item}>
          <Text style={infoAreaStyle.title}>写一句激励自己的话</Text>
          <TextInput
            value={remindMessage || ''}
            multiline
            style={{
              height: 100,
            }}
            onChangeText={(text) => setRemindMessage(text)}
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
  selectArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
})
