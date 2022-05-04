import React, {useCallback, useEffect, useState} from "react";
import {RoutingPath} from "../../../routes/routing-path";
import returnIcon from "../../../asset/svg/return.svg";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './setting.scss';
import {State} from "../../../redux/root.reducer";
import {MaActions} from "../../../redux/management/management.action";
import {SettingType} from "../../../redux/management/management.type";
import {doc, setDoc} from "firebase/firestore";
import db from "../../../firebase";

export const Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const {isLogin, storeSetting} = useSelector((state: State) => ({
    isLogin: state.user.isLogin,
    storeSetting: state.management.setting,
  }));

  const [setting, setSetting] = useState<SettingType>(storeSetting);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChangeState = useCallback((props: SettingType) => {
    setSetting(props);
  }, []);

  const handleShowMessage = useCallback(() => {
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  }, []);

  const handleClickButton = useCallback(async () => {
    await setDoc(doc(db, 'sample', 'setting'), setting);
    dispatch(MaActions.setSetting(setting));
    handleShowMessage();
  }, [dispatch, handleShowMessage, setting]);

  useEffect(() => {
    if (!isLogin) {
      navigate(RoutingPath.login)
    }
  }, []);

  useEffect(() => {
    dispatch(MaActions.api.get.setting());
  }, [dispatch]);

  return (
    <>
      <header>
        <div className='header-inner'>
          <div className='header-inner_left'>設定</div>
        </div>
      </header>
      <div className="main_wrap">
        <div className="setting-box">
          <div className="setting-wrap">
            <div className="setting-left">ステータス表示</div>
            <div className="setting-right">
              <input
                type="checkbox"
                className="toggle"
                onChange={(e) => {
                  handleChangeState({
                    ...setting,
                    isDisplay: !setting.isDisplay
                  })
                }}
                checked={setting.isDisplay}
              /></div>
          </div>
          <div className="setting-wrap">
            <div className="setting-left">開店時間(open)</div>
            <div className="setting-right">
              <input
                value={setting.startTime}
                type="text"
                className='setting_input'
                onChange={(e) => {
                  handleChangeState({
                    ...setting,
                    startTime: e.target.value
                  })
                }}
              /></div>
          </div>
          <div className="setting-wrap">
            <div className="setting-left">閉店時間(close)</div>
            <div className="setting-right">
              <input
                value={setting.endTime}
                type="text"
                className='setting_input'
                onChange={(e) => {
                  handleChangeState({
                    ...setting,
                    endTime: e.target.value
                  })
                }}
              /></div>
          </div>
          <div className="setting-wrap">
            <div className="setting-left">店休日</div>
            <div className="setting-right">
              <input
                value={setting.holiday}
                type="text"
                className='setting_input'
                onChange={(e) => {
                  handleChangeState({
                    ...setting,
                    holiday: e.target.value
                  })
                }}
              /></div>
          </div>
          <div className="setting-wrap">
            <div className="setting-left">サイトURL</div>
            <div className="setting-right">
              <input
                value={setting.url}
                type="text"
                className='setting_input'
                onChange={(e) => {
                  handleChangeState({
                    ...setting,
                    url: e.target.value
                  })
                }}
              />
            </div>
          </div>
          <div className='button-wrap'>
            <button className='reset-button' onClick={() => {setSetting(storeSetting)}}>リセット</button>
            <button className='register-button' onClick={handleClickButton}>更新</button>
          </div>
          <div className={'success_wrap ' + (isSuccess ? "success_animation" : "")}>
            <p className='success_text'>更新完了</p>
          </div>
        </div>
      </div>

      <div className='return-wrap'>
        <button className='custom-button' onClick={() => {
          navigate(RoutingPath.management)
        }}>
          <img src={returnIcon} alt='戻る'/>
        </button>
      </div>
    </>
  )
}