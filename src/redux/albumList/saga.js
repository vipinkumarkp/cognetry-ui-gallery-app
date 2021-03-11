// @flow
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { apiCall } from "../../helpers/api";
import { endpoints } from "../../helpers/endpoints";

import { albumListConst } from "./constants";

import {
  getAlbumListSuccess,
  getAlbumListFailed,
} from "./actions";


function* getAlbumList() {
  let options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    url: endpoints.getAlbumListApi,
  };
  try {
    const response = yield call(apiCall, options);
    if (response.status === 200 && response.data) {
      yield put(getAlbumListSuccess(response.data));
    } else {
      yield put(getAlbumListFailed(response.data.message));
    }
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        break;
      default:
        message = error.response.data.message;
    }
    yield put(getAlbumListFailed(message));
  }
}


export function* watchgetAlbumList() {
  yield takeEvery(albumListConst.GET_ALBUM_LIST, getAlbumList);
}


function* getAlbumListSaga() {
  yield all([
    fork(watchgetAlbumList),
  ]);
}

export default getAlbumListSaga;
