import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { immer } from 'zustand/middleware/immer'
export type User = {
  name: string
}

export type UserStoreState = {
  user: User
}

export type UserStoreActions = {
  setUser: (user: User) => void
}

const initialState: UserStoreState = {
  user: {
    name: 'tywl',
  },
}

export const useUserStore = create<UserStoreState & UserStoreActions>()(
  persist(
    immer((set) => ({
      ...initialState,
      setUser: (user) => {
        set((s) => {
          s.user = user
        })
      },
    })),
    {
      name: 'user',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
