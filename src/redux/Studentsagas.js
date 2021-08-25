// name  :   students sagas //
// author : suman //
// date  : 24/08/2021 //

import * as types from "./ActionTypes";
import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import {
  loadStudentsSuccess,
  loadStudentsError,
  createStudentsSuccess,
  createStudentsError,
  deleteStudentsSuccess,
  deleteStudentsError,
  updateStudentsSuccess,
  updateStudentsError,
} from "./actions";
import {
  loadStudentsApi,
  createStudentsApi,
  deleteStudentsApi,
  updateStudentsApi,
} from "./api";

function* onLoadStudentsStartAsync() {
  try {
    const response = yield call(loadStudentsApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadStudentsSuccess(response.data));
    }
  } catch (error) {
    yield put(loadStudentsError(error.response.data));
  }
}

function* onCreateStudentsStartAsync({ payload }) {
  try {
    const response = yield call(createStudentsApi, payload);
    if (response.status === 201) {
      yield put(createStudentsSuccess(response.data));
    }
  } catch (error) {
    yield put(createStudentsError(error.response.data));
  }
}

function* onDeleteStudentsStartAsync(userId) {
  try {
    const response = yield call(deleteStudentsApi, userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteStudentsSuccess(userId));
    }
  } catch (error) {
    yield put(deleteStudentsError(error.response.data));
  }
}

function* onUpdateStudentsStartAsync({ payload: { id, formValue } }) {
  try {
    const response = yield call(updateStudentsApi, id, formValue);
    if (response.status === 200) {
      yield put(updateStudentsSuccess());
    }
  } catch (error) {
    yield put(updateStudentsError(error.response.data));
  }
}

function* onDeleteStudent() {
  while (true) {
    const { payload: userId } = yield take(types.DELETE_STUDENTS_START);
    yield call(onDeleteStudentsStartAsync, userId);
  }
}

function* onLoadStudents() {
  yield takeEvery(types.LOAD_STUDENTS_START, onLoadStudentsStartAsync);
}

function* onCreateStudents() {
  yield takeLatest(types.CREATE_STUDENTS_START, onCreateStudentsStartAsync);
}

function* onUpdateStudents() {
  yield takeLatest(types.UPDATE_STUDENTS_START, onUpdateStudentsStartAsync);
}

const studentssagas = [
  fork(onLoadStudents),
  fork(onCreateStudents),
  fork(onDeleteStudent),
  fork(onUpdateStudents),
];

export default function* rootSaga() {
  yield all([...studentssagas]);
}
