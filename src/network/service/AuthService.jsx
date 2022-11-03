import axios from 'axios';
import HttpStatus from '~/model/constants/HttpStatus';
import { setCurrentSession, isOk } from '~/network/BaseService';
import { apiInstance } from '~/network/api';

export const AuthService = {
  // 로그인
  signIn: async (params) => {
    if (!params) return;
    if (!params.id) return;
    if (!params.password) return;

    const res = await apiInstance.post('/login', {
      id: params.id,
      password: params.password,
    });

    if (isOk(res.status)) {
      setCurrentSession();
    }
    return res;
  },

  // 로그아웃
  signOut: async (params) => {
    const res = await apiInstance.post('/logout');
    return res;
  },

  // 회원가입
  signUp: async (params) => {
    if (!params) return;
    if (!params.id) return;
    if (!params.password) return;
    if (!params.passwordConfirm) return;
    if (!params.email) return;
    if (!params.nickname) return;

    const res = await apiInstance.post('/register', {
      id: params.id,
      password: params.password,
      passwordConfirm: params.passwordConfirm,
      email: params.email,
      nickname: params.nickname,
    });

    return res;
  },
};
