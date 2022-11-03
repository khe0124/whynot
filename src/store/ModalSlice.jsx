import { createSlice } from '@reduxjs/toolkit';

export const ModalSlice = createSlice({
  name: 'modal',
  initialState: {
    type: null,
    open: false,
    uiProps: { oneButton: false, enabledButton: true, hasStar: false },
    modalContent: { title: null, content: null, img: null, starCount: 0 },
  },
  reducers: {
    openModal: (state, action) => {
      if (!action.payload.type) {
        console.error('action.payload.type is null.');
        return;
      }

      state.open = true;
      state.uiProps.oneButton = action.payload.type == COACHING_CHOICE;
      state.uiProps.enabledButton = action.payload.type != COACHING_CHOICE;
      state.uiProps.hasStar = action.payload.type == COACHING_CHOICE;
      if (action.payload.modalContent.title) state.modalContent.title = action.payload.modalContent.title;
      if (action.payload.modalContent.content) state.modalContent.content = action.payload.modalContent.content;
      if (action.payload.modalContent.img) state.modalContent.img = action.payload.modalContent.img;
    },
    closeModal: (state) => {
      state.open = false;
    },
    setModalStarCount: (state, action) => {
      if (!action.payload.starCount) {
        console.error('action.payload.starCount is null.');
        return;
      }
      state.content.starCount = action.payload.starCount;
      state.uiProps.enabledButton = true;
    },
    setModalContent: (state, action) => {
      if (action.payload.title) state.modalContent.title = action.payload.title;
      if (action.payload.content) state.modalContent.content = action.payload.content;
      if (action.payload.img) state.modalContent.img = action.payload.img;
      if (action.payload.starCount) state.modalContent.starCount = action.payload.starCount;
    },
  },
});

export const { openModal, closeModal, setModalStarCount, setModalContent } = ModalSlice.actions;
export default ModalSlice.reducer;

// modal event function
export let modalEvent = {
  ok: null,
  cancel: null,
};

// modal type
export const COACHING_WRITE_CONFIRM = 'MODAL/COACHING_WRITE_CONFIRM';
export const COACHING_CHOICE = 'MODAL/COACHING_CHOICE';
export const CREATE_QUESTION_CONFIRM = 'MODAL/CREATE_QUESTION_CONFIRM';
export const SIGN_UP_CONFIRM = 'MODAL/SIGN_UP_CONFIRM';
export const REQUIRED_LOGIN = 'MODAL/REQUIRED_LOGIN';
