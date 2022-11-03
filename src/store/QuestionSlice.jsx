import { createSlice } from '@reduxjs/toolkit';
import SortType from '~/model/constants/SortType';

export const QuestionSlice = createSlice({
  name: 'question',
  initialState: {
    pageSetting: {
      pageNumberSize: 5,
      apiPageSize: 25,
    },
    main: {
      point: { viewPage: 0, lastApiPage: 1, apiPage: 1, list: [] },
      answer: { viewPage: 0, lastApiPage: 1, apiPage: 1, list: [] },
      created: { viewPage: 0, lastApiPage: 1, apiPage: 1, list: [] },
    },
    search: { sort: SortType.POINT, list: [] },
    myUploaded: { sort: null, list: [] },
    myAnswered: { sort: null, list: [] },
  },
  reducers: {
    setQuestion: (state, action) => {
      switch (action.payload.type) {
        case QUESTION_MAIN:
          switch (action.payload.sort) {
            case SortType.POINT:
              if (action.payload.list) {
                if (state.main.point.list.length == 0) {
                  state.main.point.list = [...action.payload.list];
                } else {
                  state.main.point.list = state.main.point.list.concat(action.payload.list);
                }
              }
              if (action.payload.apiPage) state.main.point.apiPage = action.payload.apiPage;
              if (action.payload.lastApiPage) state.main.point.lastApiPage = action.payload.lastApiPage;
              if (action.payload.viewPage) state.main.point.viewPage = action.payload.viewPage;
              break;
            case SortType.CREATED:
              if (state.main.created.list.length == 0) {
                state.main.created.list = [...action.payload.list];
              } else {
                state.main.created.list = state.main.created.list.concat(action.payload.list);
              }
              if (action.payload.apiPage) state.main.created.apiPage = action.payload.apiPage;
              if (action.payload.lastApiPage) state.main.created.lastApiPage = action.payload.lastApiPage;
              if (action.payload.viewPage) state.main.created.viewPage = action.payload.viewPage;
              break;
            case SortType.ANSWER:
              if (state.main.answer.list.length == 0) {
                state.main.answer.list = [...action.payload.list];
              } else {
                state.main.answer.list = state.main.answer.list.concat(action.payload.list);
              }
              if (action.payload.apiPage) state.main.answer.apiPage = action.payload.apiPage;
              if (action.payload.lastApiPage) state.main.answer.lastApiPage = action.payload.lastApiPage;
              if (action.payload.viewPage) state.main.answer.viewPage = action.payload.viewPage;
              break;
          }

          break;
        case QUESTION_SEARCH:
          if (action.payload.sort) state.search.sort = action.payload.sort;
          if (action.payload.apiPage) state.search.apiPage = action.payload.apiPage;
          if (action.payload.lastApiPage) state.search.lastApiPage = action.payload.lastApiPage;
          if (action.payload.viewPage) state.search.viewPage = action.payload.viewPage;
          break;
        case QUESTION_MY_UPLOADED:
          if (action.payload.sort) state.myUploaded.sort = action.payload.sort;
          if (action.payload.list) state.myUploaded.list = [...action.payload.list];
          if (action.payload.apiPage) state.myUploaded.apiPage = action.payload.apiPage;
          if (action.payload.lastApiPage) state.myUploaded.lastApiPage = action.payload.lastApiPage;
          if (action.payload.viewPage) state.myUploaded.viewPage = action.payload.viewPage;
          break;
        case QUESTION_MY_ANSWERED:
          if (action.payload.sort) state.myAnswered.sort = action.payload.sort;
          if (action.payload.list) state.myAnswered.list = [...action.payload.list];
          if (action.payload.apiPage) state.myAnswered.apiPage = action.payload.apiPage;
          if (action.payload.lastApiPage) state.myAnswered.lastApiPage = action.payload.lastApiPage;
          if (action.payload.viewPage) state.myAnswered.viewPage = action.payload.viewPage;
          break;
      }
    },
    addQuestion: (state, action) => {
      switch (action.payload.type) {
        case QUESTION_MAIN:
          switch (action.payload.sort) {
            case SortType.POINT:
              state.main.point.list.concat(action.payload.list);
              break;
            case SortType.CREATED:
              state.main.created.list.concat(action.payload.list);
              break;
            case SortType.ANSWER:
              state.main.answer.list.concat(action.payload.list);
              break;
          }
          break;
        case QUESTION_SEARCH:
          state.search.list.concat(action.payload.list);
          break;
        case QUESTION_MY_UPLOADED:
          state.myUploaded.list.concat(action.payload.list);
          break;
        case QUESTION_MY_ANSWERED:
          state.myAnswered.list.concat(action.payload.list);
          break;
      }
    },
  },
});

export const { setQuestion, addQuestion } = QuestionSlice.actions;
export default QuestionSlice.reducer;

// question list type
export const QUESTION_MAIN = 'QUESTION/MAIN';
export const QUESTION_SEARCH = 'QUESTION/SEARCH';
export const QUESTION_MY_UPLOADED = 'QUESTION/MY_UPLOADED';
export const QUESTION_MY_ANSWERED = 'QUESTION/MY_ANSWERED';
