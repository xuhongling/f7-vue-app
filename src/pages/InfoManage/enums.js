import {Enum} from "utils/Enum";

/**
 * 枚举类
 */
export default {
  // 应急响应类型(1=预警产生,2=内部预警,3=外部预警,4=应急响应,9=关闭)
  StatusTypeEnum: new Enum().add('innerWarn', '内部预警', 2).add('outWarn', '外部预警', 3),
  // 应急事件类别
  WarnLevelType: new Enum().add('first', '一级预警', 1).add('second', '二级预警', 2).add('third', '三级预警', 3).add('four', '四级预警', 4)
}