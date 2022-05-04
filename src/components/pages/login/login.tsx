import React, {useCallback, useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {RoutingPath} from "../../../routes/routing-path";
import password_eye from '../../../asset/svg/password_eye.svg';
import password_hide from '../../../asset/svg/password_hide.svg';
import './../../../App.scss';
import {useDispatch} from "react-redux";
import {UserActions} from "../../../redux/user/user.action";
import './../../common/input/input.scss';
import './login.scss';

type InfoType = {
  email: string,
  pass: string
}
export const Login = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const navigate = useNavigate();

  const [info, setInfo] = useState<InfoType>({
    email: '',
    pass: ''
  });

  const [isFailed, setIsFailed] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChangeState = useCallback((props: InfoType) => {
    setInfo(props);
  }, []);

  const handleClickEye = useCallback((state: boolean) => {
    setShowPassword(state);
  }, []);

  const handleClickLoginButton = useCallback(() => {
    setIsFailed(false);
    signInWithEmailAndPassword(auth, info.email, info.pass)
      .then((userCredential) => {
        // const user = userCredential.user;
        dispatch(UserActions.setIsLogin(true));
        navigate(RoutingPath.management);
      })
      .catch(() => {
        setIsFailed(true);
        dispatch(UserActions.setIsLogin(false));
      });
  }, [dispatch, auth, navigate, info.email, info.pass]);

  return (
    <>
      <header>
        <div className='header-inner'>
          <div className='header-inner_left'>ログイン画面</div>
        </div>
      </header>
      <div className='main_wrap'>
        <div className='contents_wrap login_box'>
          <div className='login_title'>logo</div>
          <div className={'error_text ' + (isFailed ? "isShow" : "")}>※メールアドレスまたはパスワードが正しくありません</div>
          <div className="input-wrap">
            <label className="input-label">
              <input
                autoFocus={true}
                autoComplete='off'
                value={info.email}
                type="text"
                placeholder="メールアドレス"
                onChange={(e) => {
                  handleChangeState({
                    ...info,
                    email: e.target.value
                  })
                }}/>
            </label>
          </div>

          <div className="input-wrap">
            <label className="input-label">
              <input
                autoComplete='off'
                value={info.pass}
                type={showPassword ? 'text' : 'password'}
                placeholder="パスワード"
                onChange={(e) => {
                  handleChangeState({
                    ...info,
                    pass: e.target.value
                  })
                }}/>
            <button
              className="password_show"
              onClick={() => {
                handleClickEye(!showPassword);
              }}
              data-testid="passwordEyeIcon"
            >
              {!showPassword ? (
                <img alt="パスワード表示アイコン" src={password_eye}/>
              ) : (
                <img
                  className="password_hide"
                  alt="パスワード隠すアイコン"
                  src={password_hide}
                />
              )}
            </button>
            </label>

          </div>

          <button
            className='login_button'
            onClick={handleClickLoginButton}
          >
            ログイン
          </button>
        </div>
      </div>
    </>
  )
}