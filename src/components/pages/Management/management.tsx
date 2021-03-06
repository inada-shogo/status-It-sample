import React, {useCallback, useEffect} from "react";
import '../../common/header/header.scss';
import '../../../App.scss';
import './management.scss';
import db from "../../../firebase";
import {setDoc, doc, onSnapshot} from 'firebase/firestore';
import {ReactComponent as Vacancy} from '../../../asset/svg/vacancy.svg';
import {ReactComponent as AcVacancy} from '../../../asset/svg/ac-vacancy.svg';
import {ReactComponent as Few} from '../../../asset/svg/few.svg';
import {ReactComponent as FullHouse} from '../../../asset/svg/full-house.svg';
import {ReactComponent as AcFew} from '../../../asset/svg/ac-few.svg';
import {ReactComponent as AcFullHouse} from '../../../asset/svg/ac-full-house.svg';
import config from '../../../asset/svg/config.svg';
import logout from '../../../asset/svg/logout.svg';
import {useDispatch, useSelector} from "react-redux";
import {MaActions} from "../../../redux/management/management.action";
import {State} from "../../../redux/root.reducer";
import {StatusType} from "../../../redux/management/management.type";
import {buildStatus} from "../../../entities/status";
import {useNavigate} from "react-router-dom";
import {RoutingPath} from "../../../routes/routing-path";
import {timeStamp} from "../../../entities/timeStamp";

export const Management = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {isLogin, status, setting} = useSelector((state: State) => ({
    isLogin: state.user.isLogin,
    status: state.management.status,
    setting: state.management.setting,
  }));

  const handleChangeState = useCallback(async (props: StatusType) => {
    await setDoc(doc(db, 'sample', 'status'), {...props, updateTime: timeStamp()});
  }, []);

  useEffect(() => {
    if (!isLogin) {
      navigate(RoutingPath.login)
    }
  }, [navigate, isLogin]);

  useEffect(() => {
    dispatch(MaActions.api.get.status());
    dispatch(MaActions.api.get.setting());
  }, [dispatch]);

  // リアルタイム取得
  useEffect(() => {
    onSnapshot(doc(db, 'sample', 'status'), (doc) => {
      if (doc.exists()) {
        dispatch(MaActions.setStatus(buildStatus(doc.data())));
      }
    });
  }, [dispatch]);

  return (
    <>
      <header>
        <div className='header-inner'>
          <div className='header-inner_left'>管理</div>
          <div className='header-inner_right'><a href={setting.url} target="_blank" rel="noreferrer"><img src={logout}
                                                                                                          alt=""/></a>
          </div>
        </div>
      </header>
      <div className='main_wrap'>
        <div className='contents_wrap'>
          <div className='time-stamp'>{status.updateTime} 更新</div>
          <div className={'status_wrap ' + status.noSmoking}>
            <div className='status_wrap-top'>
              <div className='status_wrap-title'>🚭禁煙席</div>
            </div>
            <div className='status_wrap-body'>
              <label>
                <input
                  type="radio"
                  value={'vacancy'}
                  onChange={(e) => {
                    handleChangeState({
                      ...status,
                      noSmoking: e.target.value
                    })
                  }}
                  checked={status.noSmoking === "vacancy"}
                />
                <div>
                  {status.noSmoking === 'vacancy' ? <AcVacancy/> : <Vacancy/>}
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  value={'few'}
                  onChange={(e) => {
                    handleChangeState({
                      ...status,
                      noSmoking: e.target.value
                    })
                  }}
                  checked={status.noSmoking === "few"}
                />
                <div>
                  {status.noSmoking === 'few' ? <AcFew/> : <Few/>}
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  value={'fullHouse'}
                  onChange={(e) => {
                    handleChangeState({
                      ...status,
                      noSmoking: e.target.value
                    })
                  }}
                  checked={status.noSmoking === "fullHouse"}
                />
                <div>
                  {status.noSmoking === 'fullHouse' ? <AcFullHouse/> : <FullHouse/>}
                </div>
              </label>
            </div>
          </div>
          <div className={'status_wrap ' + status.smoking}>
            <div className='status_wrap-top'>
              <div className='status_wrap-title'>🚬喫煙席</div>
            </div>
            <div className='status_wrap-body'>
              <label>
                <input
                  type="radio"
                  value={'vacancy'}
                  onChange={(e) => {
                    handleChangeState({
                      ...status,
                      smoking: e.target.value
                    })
                  }}
                  checked={status.smoking === "vacancy"}
                />
                <div>
                  {status.smoking === 'vacancy' ? <AcVacancy/> : <Vacancy/>}
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  value={'few'}
                  onChange={(e) => {
                    handleChangeState({
                      ...status,
                      smoking: e.target.value
                    })
                  }}
                  checked={status.smoking === "few"}
                />
                <div>
                  {status.smoking === 'few' ? <AcFew/> : <Few/>}
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  value={'fullHouse'}
                  onChange={(e) => {
                    handleChangeState({
                      ...status,
                      smoking: e.target.value
                    })
                  }}
                  checked={status.smoking === "fullHouse"}
                />
                <div>
                  {status.smoking === 'fullHouse' ? <AcFullHouse/> : <FullHouse/>}
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className='config-wrap'>
          <button className='custom-button' onClick={() => {
            navigate(RoutingPath.setting)
          }}>
            <img src={config} alt='設定'/>
          </button>
        </div>
      </div>
    </>
  )
}