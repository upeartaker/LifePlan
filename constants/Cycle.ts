export enum Cycle {
  // 每天
  DAILY = 'daily',
  // 每周
  WEEKLY = 'weekly',
  // 每月
  MONTHLY = 'monthly',
  // 每年
  YEARLY = 'yearly',
  // 自定义
  CUSTOM = 'custom',
}

export const cycles = [
  {
    name: '每天',
    value: Cycle.DAILY,
  },
  {
    name: '每周',
    value: Cycle.WEEKLY,
  },
  {
    name: '每月',
    value: Cycle.MONTHLY,
  },
  {
    name: '每年',
    value: Cycle.YEARLY,
  },
  {
    name: '自定义',
    value: Cycle.CUSTOM,
  },
]