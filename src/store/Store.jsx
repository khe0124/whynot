import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import modalReducer from '~/store/ModalSlice';
import windowReducer from '~/store/WindowSlice';
import questionReducer from '~/store/QuestionSlice';
import thuck from 'redux-thunk';

export default configureStore({
  reducer: {
    modal: modalReducer,
    window: windowReducer,
    question: questionReducer,
  },
});
