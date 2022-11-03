import axios from 'axios';
import { setCurrentSession, isOk, checkSession } from '~/network/BaseService';
import { apiInstance } from '~/network/api';

export const QuestionService = {
  // 질문목록 가져오기
  getQuestionList: async (params) => {
    const uri = `/question?sort=${params.sort}&perPage=${params.perPage}&page=${params.page}`;
    const res = await apiInstance.get(uri);
    if (isOk(res.status) && checkSession()) {
      setCurrentSession();
    }

    return res;
  },

  // 단일 질문 가져오기
  getQuestion: async (params) => {
    const uri = `/question/${params.postId}`;
    const res = await apiInstance.get(uri);
    if (isOk(res.status) && checkSession()) {
      setCurrentSession();
    }

    return res;
  },

  // 질문 생성하기
  createQuestion: async (params) => {
    if (!params.formData) return;
    const res = await apiInstance.post('/question', params.formData, { 'Content-Type': 'multipart/form-data' });
    if (isOk(res.status) && checkSession()) {
      setCurrentSession();
    }
    return res;
  },

  // 질문에 답변하기
  answer: async (params) => {
    if (!params) return;
    if (!params.id) return;

    const uri = `/question/${params.postId}/reply`;
    const res = await apiInstance.post(uri, {
      id: params.id,
      password: params.password,
    });
    if (isOk(res.status) && checkSession()) {
      setCurrentSession();
    }
    return res;
  },

  // 답변 채택하기
  choiceAnswer: async (params) => {
    if (!params) return;
    if (!params.postId) return;
    if (!params.userId) return;

    const res = await apiInstance.post('/question/choose', {
      postId: params.postId,
      userId: params.userId,
    });
    if (isOk(res.status) && checkSession()) {
      setCurrentSession();
    }
    return res;
  },

  // 이미지파일 업로드
  uploadImage: async (params) => {
    if (!params.formData) return;
    const res = await apiInstance.post('/file', params.formData, { 'Content-Type': 'multipart/form-data' });
    if (isOk(res.status) && checkSession()) {
      setCurrentSession();
    }
    return res;
  },

  // 질문 수정하기
  updateQuestion: async (params) => {},

  // 질문 삭제하기
  deleteQuestion: async (params) => {},

  // 답변 수정하기
  updateAnswer: async (params) => {},

  // 답변 삭제하기
  deleteAnswer: async (params) => {},
};
