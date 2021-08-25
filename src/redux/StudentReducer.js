import * as types from "./ActionTypes";

const initialState = {
  students: [],
  loadings: false,
  error: null,
};

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_STUDENTS_START:
    case types.CREATE_STUDENTS_START:
    case types.UPDATE_STUDENTS_START:
    case types.DELETE_STUDENTS_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload,
      };
    case types.CREATE_STUDENTS_SUCCESS:
    case types.UPDATE_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.DELETE_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: state.students.filter((item) => item.id !== action.payload),
      };
    case types.LOAD_STUDENTS_ERROR:
    case types.CREATE_STUDENTS_ERROR:
    case types.DELETE_STUDENTS_ERROR:
    case types.UPDATE_STUDENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
