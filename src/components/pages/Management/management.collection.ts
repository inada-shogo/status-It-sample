import * as Type from '../../../redux/management/management.type';

export class ManagementCollection {
  static readonly INIT_STATUS: Type.StatusType = {
    smoking: '',
    noSmoking: '',
    updateTime: ''
  }

  static readonly INIT_SETTING: Type.SettingType = {
    endTime: '',
    startTime: '',
    holiday: '',
    isDisplay: true,
    url: '',
    updateTime: ''
  }
}