// @flow
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { apiCall } from "../../helpers/api";
import { endpoints } from "../../helpers/endpoints";

import { albumPhotoListConst } from "./constants";

import {
  getAlbumPhotoListSuccess,
  getAlbumPhotoListFailed,
} from "./actions";


function* getAlbumPhotoList() {
  let options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    url: endpoints.getAlbumPhotoListApi,
  };
  try {
    const response = yield call(apiCall, options);
    if (response.status === 200 && response.data) {
      yield put(getAlbumPhotoListSuccess(response.data));
    } else {
      yield put(getAlbumPhotoListFailed(response.data.message));
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
    yield put(getAlbumPhotoListFailed(message));
  }
}


export function* watchgetAlbumPhotoList() {
  yield takeEvery(albumPhotoListConst.GET_ALBUM_PHOTO_LIST, getAlbumPhotoList);
}


function* getAlbumPhotoListSaga() {
  yield all([
    fork(watchgetAlbumPhotoList),
  ]);
}

export default getAlbumPhotoListSaga;
