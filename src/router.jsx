import React, { useEffect } from 'react';
import { ResetCss } from '~/globalStyles/ResetCss';
import * as GS from '~/components/templates/Styled';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Home } from '~/pages/home/Home';
import { SignIn } from '~/pages/sign/SignIn';
import { SignUp } from '~/pages/sign/SignUp';
import { UploadQuestion } from '~/pages/question/upload/UploadQuestion';
import { ViewQuestion } from './pages/question/view/ViewQuestion';
import { MyPage } from './pages/myPage/MyPage';
import { Question } from './pages/question/Question';

import { Modal } from '~/components/modal/Modal';

import { useSelector, useDispatch } from 'react-redux';
import { setWindowSize } from '~/store/WindowSlice';

import _ from 'lodash';

const AppRouter = () => {
  const dispatch = useDispatch();
  const isModal = useSelector((state) => state.modal.open);
  const windowSize = useSelector((state) => state.window.windowSize);

  useEffect(() => {
    dispatch(
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      }),
    );

    const handleResize = _.debounce(() => {
      dispatch(
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        }),
      );
    }, 10);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <GS.Container>
      <ResetCss />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home windowSize={windowSize} />} />
          <Route path={ROUTE_SIGN_IN} element={<SignIn windowSize={windowSize} />} />
          <Route path={ROUTE_SIGN_UP} element={<SignUp windowSize={windowSize} />} />
          <Route path={ROUTE_QUESTION} element={<Question windowSize={windowSize} />}>
            <Route path={ROUTE_QUESTION_UPLOAD} element={<UploadQuestion windowSize={windowSize} />} />
            <Route path={ROUTE_QUESTION_VIEW} element={<ViewQuestion windowSize={windowSize} />}>
              <Route path=":postId" element={<ViewQuestion windowSize={windowSize} />} />
            </Route>
          </Route>
          <Route path={ROUTE_QUESTION_UPLOAD} element={<UploadQuestion windowSize={windowSize} />} />
          <Route path={ROUTE_QUESTION_VIEW} element={<ViewQuestion windowSize={windowSize} />} />
          <Route path={`${ROUTE_MY_PAGE}`} element={<MyPage windowSize={windowSize} />}>
            <Route path={`${ROUTE_MY_POINT}`} element={<MyPage windowSize={windowSize} />} />
            <Route path={`${ROUTE_MY_UPLOADED_QUESTION}`} element={<MyPage windowSize={windowSize} />} />
            <Route path={`${ROUTE_MY_ANSWERED_QUESTION}`} element={<MyPage windowSize={windowSize} />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* global component*/}
      {isModal && <Modal />}
    </GS.Container>
  );
};

export default AppRouter;

export const ROUTE_SIGN_IN = '/sign-in';
export const ROUTE_SIGN_UP = '/sign-up';

export const ROUTE_MY_PAGE = '/my-page';
export const ROUTE_MY_POINT = '/my-page/point';
export const ROUTE_MY_UPLOADED_QUESTION = '/my-page/question/uploaded';
export const ROUTE_MY_ANSWERED_QUESTION = '/my-page/question/answered';

export const ROUTE_QUESTION = '/question';
export const ROUTE_QUESTION_VIEW = '/question/view';
export const ROUTE_QUESTION_UPLOAD = '/question/upload';
