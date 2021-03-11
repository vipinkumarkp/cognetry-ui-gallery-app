import { all } from "redux-saga/effects";
import getAlbumListSaga from "./albumList/saga";
import getAlbumPhotoListSaga from "./albumPhotoList/saga";


export default function* rootSaga(getState: any): any {
  yield all([
    getAlbumListSaga(),
    getAlbumPhotoListSaga()
  ]);
}
