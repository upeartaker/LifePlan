export enum TargetType {
  // 次数
  COUNT = 'count',
  // 时间
  TIME = 'time',
  // 距离
  DISTANCE = 'distance',

  // 自定义
  CUSTOM = 'custom',
}

export const targetTypes = [
  {
    name: '次数',
    value: TargetType.COUNT,
  },
  {
    name: '时间',
    value: TargetType.TIME,
  },
  {
    name: '距离',
    value: TargetType.DISTANCE,
  },
  {
    name: '自定义',
    value: TargetType.CUSTOM,
  },
]

export const defaultTargets = [
  {
    type: TargetType.COUNT,
    value: '1次',
  },
  {
    type: TargetType.COUNT,
    value: '3次',
  },
  {
    type: TargetType.COUNT,
    value: '5次',
  },
  {
    type: TargetType.COUNT,
    value: '10次',
  },
  {
    type: TargetType.TIME,
    value: '10分钟',
  },
  {
    type: TargetType.TIME,
    value: '30分钟',
  },
  {
    type: TargetType.TIME,
    value: '60分钟',
  },
  {
    type: TargetType.DISTANCE,
    value: '1公里',
  },
  {
    type: TargetType.DISTANCE,
    value: '3公里',
  },
  {
    type: TargetType.DISTANCE,
    value: '5公里',
  },
]