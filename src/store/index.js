import { createStore } from "vuex";

export default createStore({
  state: {
    schoolSubjects: "1",
    difficultyLevel: "2",
    quantityOfQuestions: "3",
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
  },
  getters: {},
});
