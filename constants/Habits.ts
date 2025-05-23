/**
 * 生活习惯
 */
export enum Lifestyle {
  /**
   * 1. 早起
   */
  WAKE_UP = 'wake_up',
  /**
   * 2. 早睡
   */
  SLEEP = 'sleep',
  /**
   * 3. 整理房间
   */
  CLEAN_ROOM = 'clean_room',
  /**
   * 4. 浇花
   */
  WATER_FLOWER = 'water_flower',
  /**
   * 5. 打扫卫生
   */
  CLEAN_HOUSE = 'clean_house',
  /**
   * 6. 做饭
   */
  COOK = 'cook',
  /**
   * 7. 洗衣服
   */
  WASH_CLOTHES = 'wash_clothes',
  /**
   * 8. 洗碗
   */
  WASH_DISHES = 'wash_dishes',
  /**
   * 9. 洗菜
   */
  WASH_VEGETABLES = 'wash_vegetables',
  /**
   * 10. 做今日计划
   */
  MAKE_TODAY_PLAN = 'make_today_plan',
  /**
   * 11. 做今日总结
   */
  MAKE_TODAY_SUMMARY = 'make_today_summary',
  /**
   * 12. 做今日反思
   */
  MAKE_TODAY_REFLECTION = 'make_today_reflection',
  /**
   * 13. 规划周计划
   */
  MAKE_WEEK_PLAN = 'make_week_plan',
  /**
   * 14. 规划月计划
   */
  MAKE_MONTH_PLAN = 'make_month_plan',
}

export enum ExerciseHabits {
  /**
   * 1. 跑步
   */
  RUN = 'run',
  /**
   * 2. 游泳
   */
  SWIM = 'swim',
  /**
   * 3. 瑜伽
   */
  YOGA = 'yoga',
  /**
   * 4. 健身
   */
  GYM = 'gym',
  /**
   * 5. 打篮球
   */
  BASKETBALL = 'basketball',
  /**
   * 6. 打羽毛球
   */
  BADMINTON = 'badminton',
  /**
   * 7. 打乒乓球
   */
  PING_PONG = 'ping_pong',
  /**
   * 8. 打网球
   */
  TENNIS = 'tennis',
  /**
   * 9. 打高尔夫
   */
  GOLF = 'golf',
  /**
   * 10. 饭后散步
   */
  AFTER_DINNER_WALK = 'after_dinner_walk',
  /**
   * 11. 跳绳
   */
  JUMP_ROPE = 'jump_rope',
  /**
   * 12. 俯卧撑
   */
  PUSH_UP = 'push_up',
  /**
   * 13. 仰卧起坐
   */
  CRUNCH = 'crunch',
  /**
   * 14. 太极
   */
  TAI_JI = 'tai_ji',
  /**
   * 15. 骑行
   */
  CYCLING = 'cycling',
}

export enum StudyHabits {
  /**
   * 1. 学习
   */
  STUDY = 'study',
  /**
   * 2. 阅读
   */
  READ = 'read',
  /**
   * 3. 写作
   */
  WRITE = 'write',
  /**
   * 4. 编程
   */
  CODING = 'coding',
  /**
   * 5. 画画
   */
  PAINT = 'paint',
  /**
   * 6. 弹吉他
   */
  PLAY_GUITAR = 'play_guitar',
  /**
   * 7. 弹钢琴
   */
  PLAY_PIANO = 'play_piano',
  /**
   * 8. 弹古筝
   */
  PLAY_GUZHENG = 'play_guzheng',
  /**
   * 9. 弹琵琶
   */
  PLAY_PIBA = 'play_piba',
  /**
   * 10. 弹二胡
   */
  PLAY_ERHU = 'play_erhu',
  /**
   * 11. 学习新技能
   */
  LEARN_NEW_SKILL = 'learn_new_skill',
  /**
   * 12. 学习新知识
   */
  LEARN_NEW_KNOWLEDGE = 'learn_new_knowledge',
  /**
   * 13. 学习摄影
   */
  LEARN_PHOTOGRAPHY = 'learn_photography',
  /**
   * 14. 看纪录片
   */
  WATCH_DOCUMENTARY = 'watch_documentary',
}

export enum SocialHabits {
  /**
   * 1. 社交
   */
  SOCIAL = 'social',
  /**
   * 2. 参加聚会
   */
  ATTEND_PARTY = 'attend_party',
  /**
   * 3. 参加活动
   */
  ATTEND_ACTIVITY = 'attend_activity',
}

export enum MentalHabits {
  /**
   * 1. 冥想
   */
  MEDITATION = 'meditation',
  /**
   * 2. 感恩
   */
  GRATITUDE = 'gratitude',
  /**
   * 3. 不抱怨
   */
  NO_COMPLAIN = 'no_complain',
  /**
   * 4. 不生气
   */
  NO_ANGRY = 'no_angry',
  /**
   * 5. 不焦虑
   */
  NO_ANXIETY = 'no_anxiety',
  /**
   * 6. 不抑郁
   */
  NO_DEPRESSION = 'no_depression',
  /**
   * 7. 记录快乐
   */
  RECORD_HAPPINESS = 'record_happiness',
  /**
   * 8. 积极思考
   */
  POSITIVE_THINKING = 'positive_thinking',
  /**
   * 9. 反省
   */
  REFLECTION = 'reflection',
  /**
   * 10. 自我激励
   */
  SELF_MOTIVATION = 'self_motivation',
  /**
   * 11. 自我肯定
   */
  SELF_CONFIRMATION = 'self_confirmation',
  /**
   * 12. 放松训练
   */
  RELAXATION_TRAINING = 'relaxation_training',
  /**
   * 13. 情绪管理
   */
  EMOTION_MANAGEMENT = 'emotion_management',
  /**
   * 14. 日行一善
   */
  DAILY_GOOD_DEED = 'daily_good_deed',
  /**
   * 15. 不评价他人
   */
  NO_EVALUATE_OTHERS = 'no_evaluate_others',
  /**
   * 16. 练习宽容
   */
  PRACTICE_TOLERANCE = 'practice_tolerance',
  /**
   * 17. 学会原谅
   */
  FORGIVE = 'forgive',
  /**
   * 18. 学会放手
   */
  LET_GO = 'let_go',
}

export const habits:Array<{
  type: 'lifestyle' | 'exercise' | 'study' | 'social' | 'mental' | 'custom',
  name: string,
  data: Array<{
    id: MentalHabits | Lifestyle | ExerciseHabits | StudyHabits | SocialHabits,
    name: string,
    icon: string,
    description: string,
  }>
}> = [
  {
    type: 'lifestyle',
    name: '生活习惯',
    data: [
      {
        id: Lifestyle.WAKE_UP,
        name: '早起',
        icon: 'wb-sunny',
        description: '一日之计在于晨，早起让生活更从容',
      },
      {
        id: Lifestyle.SLEEP,
        name: '早睡',
        icon: 'nightlight',
        description: '早睡早起，健康生活',
      },
      {
        id: Lifestyle.CLEAN_ROOM,
        name: '整理房间',
        icon: 'home',
        description: '整洁的环境带来愉悦的心情',
      },
      {
        id: Lifestyle.WATER_FLOWER,
        name: '浇花',
        icon: 'local-florist',
        description: '与植物相伴，感受生命的美好',
      },
      {
        id: Lifestyle.CLEAN_HOUSE,
        name: '打扫卫生',
        icon: 'cleaning-services',
        description: '保持家居整洁，营造舒适环境',
      },
      {
        id: Lifestyle.COOK,
        name: '做饭',
        icon: 'restaurant',
        description: '亲手烹饪，享受美食的乐趣',
      },
      {
        id: Lifestyle.WASH_CLOTHES,
        name: '洗衣服',
        icon: 'local-laundry-service',
        description: '保持衣物整洁，展现良好形象',
      },
      {
        id: Lifestyle.WASH_DISHES,
        name: '洗碗',
        icon: 'wash',
        description: '及时清理餐具，保持厨房卫生',
      },
      {
        id: Lifestyle.WASH_VEGETABLES,
        name: '洗菜',
        icon: 'grass',
        description: '认真清洗食材，确保饮食健康',
      },
      {
        id: Lifestyle.MAKE_TODAY_PLAN,
        name: '做今日计划',
        icon: 'today',
        description: '规划今日事项，提高工作效率',
      },
      {
        id: Lifestyle.MAKE_TODAY_SUMMARY,
        name: '做今日总结',
        icon: 'book',
        description: '回顾今日收获，积累成长经验',
      },
      {
        id: Lifestyle.MAKE_TODAY_REFLECTION,
        name: '做今日反思',
        icon: 'lightbulb',
        description: '反思今日不足，促进自我提升',
      },
      {
        id: Lifestyle.MAKE_WEEK_PLAN,
        name: '规划周计划',
        icon: 'date-range',
        description: '制定周计划，把握时间节奏',
      },
      {
        id: Lifestyle.MAKE_MONTH_PLAN,
        name: '规划月计划',
        icon: 'calendar-month',
        description: '规划月度目标，实现长期发展',
      },
    ],
  },
  {
    type: 'exercise',
    name: '运动习惯',
    data: [
      {
        id: ExerciseHabits.RUN,
        name: '跑步',
        icon: 'directions-run',
        description: '跑步锻炼，增强体质',
      },
      {
        id: ExerciseHabits.SWIM,
        name: '游泳',
        icon: 'pool',
        description: '水中运动，全身锻炼',
      },
      {
        id: ExerciseHabits.YOGA,
        name: '瑜伽',
        icon: 'self-improvement',
        description: '瑜伽练习，身心平衡',
      },
      {
        id: ExerciseHabits.GYM,
        name: '健身',
        icon: 'fitness-center',
        description: '力量训练，塑造体型',
      },
      {
        id: ExerciseHabits.BASKETBALL,
        name: '打篮球',
        icon: 'sports-basketball',
        description: '团队运动，增进友谊',
      },
      {
        id: ExerciseHabits.BADMINTON,
        name: '打羽毛球',
        icon: 'sports-tennis',
        description: '灵活运动，提高反应',
      },
      {
        id: ExerciseHabits.PING_PONG,
        name: '打乒乓球',
        icon: 'sports-tennis',
        description: '小球运动，锻炼协调',
      },
      {
        id: ExerciseHabits.TENNIS,
        name: '打网球',
        icon: 'sports-tennis',
        description: '户外运动，享受阳光',
      },
      {
        id: ExerciseHabits.GOLF,
        name: '打高尔夫',
        icon: 'sports-golf',
        description: '绅士运动，培养耐心',
      },
      {
        id: ExerciseHabits.AFTER_DINNER_WALK,
        name: '饭后散步',
        icon: 'directions-walk',
        description: '轻松运动，促进消化',
      },
      {
        id: ExerciseHabits.JUMP_ROPE,
        name: '跳绳',
        icon: 'sports-handball',
        description: '简单运动，高效燃脂',
      },
      {
        id: ExerciseHabits.PUSH_UP,
        name: '俯卧撑',
        icon: 'fitness-center',
        description: '基础训练，增强力量',
      },
      {
        id: ExerciseHabits.CRUNCH,
        name: '仰卧起坐',
        icon: 'fitness-center',
        description: '核心训练，塑造腹肌',
      },
      {
        id: ExerciseHabits.TAI_JI,
        name: '太极',
        icon: 'self-improvement',
        description: '传统运动，修身养性',
      },
      {
        id: ExerciseHabits.CYCLING,
        name: '骑行',
        icon: 'directions-bike',
        description: '有氧运动，环保出行',
      },
    ],
  },
  {
    type: 'study',
    name: '学习习惯',
    data: [
      {
        id: StudyHabits.STUDY,
        name: '学习',
        icon: 'school',
        description: '持续学习，不断进步',
      },
      {
        id: StudyHabits.READ,
        name: '阅读',
        icon: 'menu-book',
        description: '阅读书籍，开阔视野',
      },
      {
        id: StudyHabits.WRITE,
        name: '写作',
        icon: 'edit',
        description: '记录思考，表达想法',
      },
      {
        id: StudyHabits.CODING,
        name: '编程',
        icon: 'code',
        description: '编写代码，创造价值',
      },
      {
        id: StudyHabits.PAINT,
        name: '画画',
        icon: 'palette',
        description: '艺术创作，表达情感',
      },
      {
        id: StudyHabits.PLAY_GUITAR,
        name: '弹吉他',
        icon: 'music-note',
        description: '音乐演奏，陶冶情操',
      },
      {
        id: StudyHabits.PLAY_PIANO,
        name: '弹钢琴',
        icon: 'piano',
        description: '钢琴演奏，培养气质',
      },
      {
        id: StudyHabits.PLAY_GUZHENG,
        name: '弹古筝',
        icon: 'music-note',
        description: '传统乐器，传承文化',
      },
      {
        id: StudyHabits.PLAY_PIBA,
        name: '弹琵琶',
        icon: 'music-note',
        description: '古典乐器，感受韵律',
      },
      {
        id: StudyHabits.PLAY_ERHU,
        name: '弹二胡',
        icon: 'music-note',
        description: '民族乐器，体验传统',
      },
      {
        id: StudyHabits.LEARN_NEW_SKILL,
        name: '学习新技能',
        icon: 'school',
        description: '掌握新技能，提升竞争力',
      },
      {
        id: StudyHabits.LEARN_NEW_KNOWLEDGE,
        name: '学习新知识',
        icon: 'psychology',
        description: '拓展知识面，丰富内涵',
      },
      {
        id: StudyHabits.LEARN_PHOTOGRAPHY,
        name: '学习摄影',
        icon: 'camera-alt',
        description: '捕捉美好，记录生活',
      },
      {
        id: StudyHabits.WATCH_DOCUMENTARY,
        name: '看纪录片',
        icon: 'movie',
        description: '了解世界，增长见识',
      },
    ],
  },
  {
    type: 'social',
    name: '社交习惯',
    data: [
      {
        id: SocialHabits.SOCIAL,
        name: '社交',
        icon: 'people',
        description: '与人交往，建立联系',
      },
      {
        id: SocialHabits.ATTEND_PARTY,
        name: '参加聚会',
        icon: 'celebration',
        description: '聚会交流，增进感情',
      },
      {
        id: SocialHabits.ATTEND_ACTIVITY,
        name: '参加活动',
        icon: 'event',
        description: '参与活动，拓展人脉',
      },
    ],
  },
  {
    type: 'mental',
    name: '心理习惯',
    data: [
      {
        id: MentalHabits.MEDITATION,
        name: '冥想',
        icon: 'self-improvement',
        description: '静心冥想，寻找内心平静',
      },
      {
        id: MentalHabits.GRATITUDE,
        name: '感恩',
        icon: 'favorite',
        description: '心怀感恩，珍惜拥有',
      },
      {
        id: MentalHabits.NO_COMPLAIN,
        name: '不抱怨',
        icon: 'sentiment-satisfied',
        description: '积极面对，减少抱怨',
      },
      {
        id: MentalHabits.NO_ANGRY,
        name: '不生气',
        icon: 'sentiment-neutral',
        description: '控制情绪，保持平和',
      },
      {
        id: MentalHabits.NO_ANXIETY,
        name: '不焦虑',
        icon: 'sentiment-satisfied',
        description: '放松心情，缓解焦虑',
      },
      {
        id: MentalHabits.NO_DEPRESSION,
        name: '不抑郁',
        icon: 'sentiment-very-satisfied',
        description: '保持乐观，远离抑郁',
      },
      {
        id: MentalHabits.RECORD_HAPPINESS,
        name: '记录快乐',
        icon: 'sentiment-very-satisfied',
        description: '记录美好，留住快乐',
      },
      {
        id: MentalHabits.POSITIVE_THINKING,
        name: '积极思考',
        icon: 'lightbulb',
        description: '正向思维，乐观面对',
      },
      {
        id: MentalHabits.REFLECTION,
        name: '反省',
        icon: 'psychology',
        description: '自我反省，不断进步',
      },
      {
        id: MentalHabits.SELF_MOTIVATION,
        name: '自我激励',
        icon: 'emoji-events',
        description: '自我激励，保持动力',
      },
      {
        id: MentalHabits.SELF_CONFIRMATION,
        name: '自我肯定',
        icon: 'thumb-up',
        description: '肯定自己，增强自信',
      },
      {
        id: MentalHabits.RELAXATION_TRAINING,
        name: '放松训练',
        icon: 'spa',
        description: '放松身心，缓解压力',
      },
      {
        id: MentalHabits.EMOTION_MANAGEMENT,
        name: '情绪管理',
        icon: 'balance',
        description: '管理情绪，保持平衡',
      },
      {
        id: MentalHabits.DAILY_GOOD_DEED,
        name: '日行一善',
        icon: 'favorite',
        description: '日行一善，积善成德',
      },
      {
        id: MentalHabits.NO_EVALUATE_OTHERS,
        name: '不评价他人',
        icon: 'comment',
        description: '尊重他人，不妄加评论',
      },
      {
        id: MentalHabits.PRACTICE_TOLERANCE,
        name: '练习宽容',
        icon: 'handshake',
        description: '学会宽容，理解他人',
      },
      {
        id: MentalHabits.FORGIVE,
        name: '学会原谅',
        icon: 'handshake',
        description: '放下过去，学会原谅',
      },
      {
        id: MentalHabits.LET_GO,
        name: '学会放手',
        icon: 'flight-takeoff',
        description: '懂得放手，获得自由',
      },
    ],
  },
]
