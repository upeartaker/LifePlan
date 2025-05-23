import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { immer } from 'zustand/middleware/immer'
import { Habit } from '@/types/habit'
import uuid from 'react-native-uuid'
export type HabitStoreState = {
  habits: Habit[]
}

export type HabitStoreActions = {
  addHabit: (habit: Omit<Habit, 'id'>) => void
  removeHabit: (id: string) => void
}

const initialState: HabitStoreState = {
  habits: [],
}

export const useHabitStore = create<HabitStoreState & HabitStoreActions>()(
  persist(
    immer((set) => ({
      ...initialState,
      addHabit: (habit) => {
        set((s) => {
          s.habits.push({
            ...habit,
            id: uuid.v4(),
          })
        })
      },
      removeHabit: (id) => {
        set((s) => {
          s.habits = s.habits.filter((habit) => habit.id !== id)
        })
      },
    })),
    {
      name: 'plan',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
