import {
  MentalHabits,
  Lifestyle,
  ExerciseHabits,
  StudyHabits,
  SocialHabits,
} from '@/constants/Habits'
export type Habit = {
  id: string
  name: string
  description: string
  color: string
  cycle: string
  remindTime: Date | null
  remindMessage: string | null
  category: 'lifestyle' | 'exercise' | 'study' | 'social' | 'mental' | 'custom'
  type: MentalHabits | Lifestyle | ExerciseHabits | StudyHabits | SocialHabits
}
