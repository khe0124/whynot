import React, { useEffect } from 'react';
import * as S from './SignUpStyled';
import Logo from 'Asset/image/logo_login.png';
import Banner3d from 'Asset/image/banner/banner3d.png';
import Validation from 'Asset/image/login_invalid.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthService } from '~/network/service/AuthService';
import HttpStatus from '~/model/constants/HttpStatus';
import { ROUTE_SIGN_IN } from '~/router';
import { SIGN_UP_CONFIRM, openModal, modalEvent } from '~/store/ModalSlice';
import { useSelector, useDispatch } from 'react-redux';

export const SignUp = (windowSize) => {
  const dispatch = useDispatch();

  const ID_MIN_LENGTH = 4;
  const ID_MAX_LENGTH = 20;

  const EMAIL_MAX_LENGTH = 50;

  const NICKNAME_MIN_LENGTH = 4;
  const NICKNAME_MAX_LENGTH = 10;

  const PW_MIN_LENGTH = 5;
  const PW_MAX_LENGTH = 20;

  const navigate = useNavigate();

  const [id, setId] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');

  const [idError, setIdError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [nicknameError, setNicknameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = React.useState(false);
  const [isOpenModal, setOpenModal] = React.useState(false);

  const idErrorDescription = '아이디는 4~20자 이내로 입력해주세요.';
  const emailErrorDescription = '이메일을 형식에 맞게 입력해주세요.';
  const nicknameErrorDescription = '닉네임을 4~10자 이내로 입력해주세요.';
  const passwordErrorDescription = '비밀번호는 5~20자 이내로 입력해주세요.';
  const passwordConfirmErrorDescription = '비밀번호확인이 일치하지 않습니다.';

  const validate = () => {
    var isError = false;

    if (id.length < ID_MIN_LENGTH || id.length > ID_MAX_LENGTH) {
      setIdError(true);
      isError = true;
    }

    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!regex.test(email)) {
      setEmailError(true);
      isError = true;
    }

    if (nickname.length < NICKNAME_MIN_LENGTH || nickname.length > NICKNAME_MAX_LENGTH) {
      setNicknameError(true);
      isError = true;
    }

    if (password.length < PW_MIN_LENGTH || password.length > PW_MAX_LENGTH) {
      setPasswordError(true);
      isError = true;
    }

    if (password != passwordConfirm) {
      setPasswordConfirmError(true);
      isError = true;
    }

    return !isError;
  };

  const signUpConfirm = async () => {
    if (validate()) {
      modalEvent.ok = signUp;
      dispatch(
        openModal({
          type: SIGN_UP_CONFIRM,
          modalContent: { title: `정말 회원가입 하시겠어요?`, img: Banner3d },
        }),
      );
    }
  };

  const signUp = async () => {
    const res = await AuthService.signUp({ id, password, passwordConfirm, email, nickname });
    if (!res || !(res.status == HttpStatus.CREATED)) {
      alert(res.message);
      return;
    }

    navigate(ROUTE_SIGN_IN, { replace: true });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      setIdError(false);
      setEmailError(false);
      setNicknameError(false);
      setPasswordError(false);
      setPasswordConfirmError(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Container>
      <Link to={ROUTE_SIGN_IN}>
        <S.Logo src={Logo} />
      </Link>
      <S.FormWrapper>
        <S.FormBox>
          <S.Title>
            <S.Text>아이디</S.Text>
          </S.Title>
          <S.Input
            placeholder="4~20자 이내의 아이디"
            type="text"
            value={id}
            maxLength={ID_MAX_LENGTH}
            onChange={(e) => setId(e.target.value)}
          />
          {idError && <ValidationContainer descripion={idErrorDescription} />}
        </S.FormBox>

        <S.FormBox>
          <S.Title>
            <S.Text>이메일</S.Text>
          </S.Title>
          <S.Input
            placeholder="example@example.com"
            type="text"
            value={email}
            maxLength={EMAIL_MAX_LENGTH}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <ValidationContainer descripion={emailErrorDescription} />}
        </S.FormBox>

        <S.FormBox>
          <S.Title>
            <S.Text>닉네임</S.Text>
          </S.Title>
          <S.Input
            placeholder="4~10자 이내의 닉네임"
            type="text"
            value={nickname}
            maxLength={NICKNAME_MAX_LENGTH}
            onChange={(e) => setNickname(e.target.value)}
          />
          {nicknameError && <ValidationContainer descripion={nicknameErrorDescription} />}
        </S.FormBox>

        <S.FormBox>
          <S.Title>
            <S.Text>비밀번호</S.Text>
          </S.Title>
          <S.Input
            placeholder="******"
            type="password"
            value={password}
            maxLength={PW_MAX_LENGTH}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <ValidationContainer descripion={passwordErrorDescription} />}
        </S.FormBox>

        <S.FormBox>
          <S.Title>
            <S.Text>비밀번호확인</S.Text>
          </S.Title>
          <S.Input
            placeholder="******"
            type="password"
            value={passwordConfirm}
            maxLength={PW_MAX_LENGTH}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          {passwordConfirmError && <ValidationContainer descripion={passwordConfirmErrorDescription} />}
        </S.FormBox>

        <S.ActionBox>
          <S.PrevBtn to={ROUTE_SIGN_IN}>이전</S.PrevBtn>
          <S.SignUpBtn
            onClick={signUpConfirm}
            active={
              id.length >= ID_MIN_LENGTH &&
              id.length <= ID_MAX_LENGTH &&
              password.length >= PW_MIN_LENGTH &&
              password.length <= PW_MAX_LENGTH &&
              passwordConfirm.length >= PW_MIN_LENGTH &&
              passwordConfirm.length <= PW_MAX_LENGTH &&
              email.length > 0 &&
              nickname.length >= NICKNAME_MIN_LENGTH &&
              nickname.length <= NICKNAME_MAX_LENGTH
            }>
            회원가입
          </S.SignUpBtn>
        </S.ActionBox>
        <S.InfoTextBox>
          <S.InfoTextBtn>이용약관</S.InfoTextBtn>
          <S.InfoText>,&nbsp;</S.InfoText>
          <S.InfoTextBtn>개인정보처리방침</S.InfoTextBtn>
          <S.InfoText>&nbsp;내용을 확인하였고 동의합니다.</S.InfoText>
        </S.InfoTextBox>
      </S.FormWrapper>
    </S.Container>
  );
};

const ValidationContainer = (props) => {
  return (
    <S.InputValidationWrapper>
      <S.Validation src={Validation} />
      <S.WhiteTooltipTopContentWrapper>
        <S.WhiteTooltipTopContent>
          <S.WhiteTooltipText>{props.descripion}</S.WhiteTooltipText>
        </S.WhiteTooltipTopContent>
      </S.WhiteTooltipTopContentWrapper>
    </S.InputValidationWrapper>
  );
};
