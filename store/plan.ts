import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { immer } from 'zustand/middleware/immer'
export type Plan = {
  id: string
  name: string
  email: string
  token: string
}

export type PlanStoreState = {
  plan: Plan | null
}

export type PlanStoreActions = {
  setPlan: (plan: Plan) => void
}

const initialState: PlanStoreState = {
  plan: null,
}

export const usePlanStore = create<PlanStoreState & PlanStoreActions>()(
  persist(
    immer((set) => ({
      ...initialState,
      setPlan: (plan) => {
        set((s) => (s.plan = plan))
      },
    })),
    {
      name: 'plan',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
