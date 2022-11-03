import React, { useEffect } from 'react';
import * as S from './SignInStyled';
import * as GS from '~/components/templates/Styled';
import Logo from 'Asset/image/logo_login.png';
import Validation from 'Asset/image/login_invalid.png';
import Unchecked from 'Asset/image/login_unchecked.png';
import Checked from 'Asset/image/login_checked.png';
import { Link } from 'react-router-dom';
import { AuthService } from '~/network/service/AuthService';
import { useNavigate } from 'react-router';

import HttpStatus from '~/model/constants/HttpStatus';

export const SignIn = (windowSize) => {
  const navigate = useNavigate();

  const [isAutoLogin, setAutoLogin] = React.useState(false);
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [idError, setIdError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const idErrorDescription = '아이디는 4~20자 이내로 입력해주세요.';
  const pwErrorDescription = '비밀번호는 5~20자 이내로 입력해주세요.';

  const validate = () => {
    let isError = false;
    if (id.length < 4 || id.length > 20) {
      setIdError(true);
      isError = true;
    }

    if (password.length < 5 || password.length > 20) {
      setPasswordError(true);
      isError = true;
    }

    return !isError;
  };

  const signIn = async () => {
    if (validate()) {
      const res = await AuthService.signIn({ id, password });
      if (!res) {
        alert('결과를 받아오지 못했습니다.');
        return;
      }

      if (res.status == HttpStatus.NO_CONTENT) {
        navigate('/', { replace: true });
      } else {
        if (res.status == HttpStatus.NOT_FOUND) {
          alert(res.message);
        } else {
          alert('로그인에 실패하였습니다.');
        }
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      setIdError(false);
      setPasswordError(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function enterKey(e) {
    if (e.keyCode == 13) {
      signIn();
    }
  }

  return (
    <S.Container>
      <S.Logo src={Logo} />
      <S.FormWrapper>
        <S.FormBox style={{ marginBottom: '36px' }}>
          <S.Title>
            <S.Text>아이디</S.Text>
          </S.Title>
          <S.Input
            onKeyUp={enterKey}
            placeholder="아이디"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          {idError && <ValidationContainer descripion={idErrorDescription} />}
        </S.FormBox>

        <S.FormBox>
          <S.Title>
            <S.Text>비밀번호</S.Text>
          </S.Title>
          <S.Input
            onKeyUp={enterKey}
            placeholder="******"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <ValidationContainer descripion={pwErrorDescription} />}
        </S.FormBox>

        <S.OptionBox style={{ marginTop: '28px' }}>
          <GS.FL onClick={() => setAutoLogin(!isAutoLogin)}>
            <S.CheckBox src={isAutoLogin ? Checked : Unchecked} />
            <S.CheckBoxText>자동로그인</S.CheckBoxText>
          </GS.FL>

          <GS.FR>
            <S.FindPasswordText>비밀번호찾기</S.FindPasswordText>
          </GS.FR>
        </S.OptionBox>

        <S.ActionBox>
          <S.SignUpBtn to="/sign-up">회원가입</S.SignUpBtn>
          <S.SignInBtn
            onClick={signIn}
            active={id.length >= 4 && id.length <= 20 && password.length >= 5 && password.length <= 20}>
            로그인
          </S.SignInBtn>
        </S.ActionBox>
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
