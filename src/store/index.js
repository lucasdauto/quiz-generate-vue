import { createStore } from "vuex";

export default createStore({
  state: {
    schoolSubjects: null,
    difficultyLevel: null,
    quantityOfQuestions: null,
    filePdf: null,
  },
  mutations: {
    SET_SCHOOL_SUBJECTS(state, payload) {
      state.schoolSubjects = payload;
    },
    SET_DIFFICULTY_LEVEL(state, payload) {
      state.difficultyLevel = payload;
    },
    SET_QUANTITY_OF_QUESTIONS(state, payload) {
      state.quantityOfQuestions = payload;
    },
    SET_FILE_PDF(state, payload) {
      state.filePdf = payload;
    },
  },
  actions: {
    setSchoolSubjects({ commit }, payload) {
      commit("SET_SCHOOL_SUBJECTS", payload);
    },
    setDifficultyLevel({ commit }, payload) {
      commit("SET_DIFFICULTY_LEVEL", payload);
    },
    setQuantityOfQuestions({ commit }, payload) {
      commit("SET_QUANTITY_OF_QUESTIONS", payload);
    },
    setFilePdf({ commit }, payload) {
      commit("SET_FILE_PDF", payload);
    },
  },
  getters: {},
});
