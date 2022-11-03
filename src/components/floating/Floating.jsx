import React from 'react';
import * as S from './FloatingStyled';
import FloatingBtn from 'Asset/image/floating.png';
import Banner3d from 'Asset/image/banner/banner3d.png';
import { Link } from 'react-router-dom';
import { ROUTE_QUESTION_UPLOAD, ROUTE_SIGN_IN } from '~/router';
import { Modal } from '~/components/modal/Modal';
import { checkSession } from '~/network/BaseService';
import { useNavigate } from 'react-router';

import { REQUIRED_LOGIN, openModal, modalEvent } from '~/store/ModalSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Floating = ({ isVisible }) => {
  const dispatch = useDispatch();
  const windowSize = useSelector((state) => state.window.windowSize);

  const [isRequiredAuthModal, setRequiredAuthModal] = React.useState(false);
  const navigate = useNavigate();

  return (
    <S.Container>
      {isVisible && (
        <S.Container
          onClick={() => {
            if (!checkSession()) {
              modalEvent.ok = navigate(ROUTE_SIGN_IN);
              dispatch(
                openModal({
                  type: REQUIRED_LOGIN,
                  modalContent: { title: `질문을 하려면 로그인이 필요합니다.\n로그인 하시겠어요?`, img: Banner3d },
                }),
              );
              return;
            }

            navigate(ROUTE_QUESTION_UPLOAD);
          }}>
          <S.FloatingBtn>
            <S.FloatingBtnText>질문하기</S.FloatingBtnText>
            <S.FloatingBtnImg src={FloatingBtn} />
          </S.FloatingBtn>
        </S.Container>
      )}
    </S.Container>
  );
};
