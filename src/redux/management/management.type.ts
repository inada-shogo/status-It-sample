/**
 * vacancy : #DEF8E8 空席あり
 * few : #FFF2DF 残りわずか
 * fullHouse : #FFE8E8 満席
 */
export type StatusType = {
  smoking?: string,
  noSmoking?: string
}

/**
 * startTime: 開店時刻
 * endTime: 閉店時刻
 * holiday: 定休日
 * isDisplay: ステータス表示有無
 * url: 反映サイトURL
 */
export type SettingType = {
  endTime?: string,
  holiday?: string,
  isDisplay?: string,
  startTime?: string,
  url?: string
}

export type ManageState = {
  status: StatusType;
  setting: SettingType;
};
