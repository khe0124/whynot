import React, { useRef, useEffect } from 'react';
import * as S from './ModalStyled';
import * as GS from '~/components/templates/Styled';
import StarChecked from 'Asset/image/star_checked.png';
import StarUnChecked from 'Asset/image/star_unchecked.png';

import DeviceWidth from '~/model/constants/DeviceWidth';

import { useSelector, useDispatch } from 'react-redux';
import { setModalStarCount, closeModal, modalEvent } from '~/store/ModalSlice';

export const Modal = () => {
  const dispatch = useDispatch();

  const modalRef = useRef();

  const windowSize = useSelector((state) => state.window.windowSize);
  const open = useSelector((state) => state.modal.open);
  const modalContent = useSelector((state) => state.modal.modalContent);
  const starCount = useSelector((state) => state.modal.modalContent.starCount);
  const hasStar = useSelector((state) => state.modal.uiProps.hasStar);

  const useOutside = (ref) => {
    function handleClickOutside(event) {
      if (open && ref.current && !ref.current.contains(event.target)) {
        dispatch(closeModal());
        dispatch(setModalStarCount(0));
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    });
  };

  useOutside(modalRef);

  return (
    <S.Container>
      <S.ModalWrapper ref={modalRef} wide={windowSize.width < DeviceWidth.TABLET} open={open}>
        <S.ModalTitle hasStar={hasStar}>{modalContent.title}</S.ModalTitle>
        {modalContent.img && <S.ModalImg style={{ marginTop: `${hasStar && '-26px'}` }} src={modalContent.img} />}
        {hasStar && (
          <S.ModalStarWrapper>
            {[1, 2, 3, 4, 5].map((i) => {
              return (
                <S.ModalStar
                  src={starCount == i ? StarUnChecked : StarChecked}
                  onClick={() => dispatch(setModalStarCount(i))}></S.ModalStar>
              );
            })}
          </S.ModalStarWrapper>
        )}
        <S.ModalBtnWrapper>
          <S.ModalBtn
            onClick={() => {
              if (hasStar) dispatch(setModalStarCount(0));
              if (modalEvent.cancel) modalEvent.cancel();
              dispatch(closeModal());
            }}>
            <S.ModalText>취소</S.ModalText>
          </S.ModalBtn>
          <S.ModalBtn
            ok
            onClick={() => {
              if (hasStar && starCount == 0) {
                alert('별점체크를 완료해주세요!');
                return;
              }
              if (hasStar) dispatch(setModalStarCount(0));
              if (modalEvent.ok) modalEvent.ok();
              dispatch(closeModal());
            }}>
            <S.ModalText>확인</S.ModalText>
          </S.ModalBtn>
        </S.ModalBtnWrapper>
      </S.ModalWrapper>
      {open && <GS.BackgroundShadow />}
    </S.Container>
  );
};
