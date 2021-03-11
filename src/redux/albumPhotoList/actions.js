import { albumPhotoListConst } from "./constants";

export const getAlbumPhotoList = () => ({
  type: albumPhotoListConst.GET_ALBUM_PHOTO_LIST,
  payload: {},
});

export const getAlbumPhotoListSuccess = (hotBoxListData) => ({
  type: albumPhotoListConst.GET_ALBUM_PHOTO_LIST_SUCCESS,
  payload: hotBoxListData,
});

export const getAlbumPhotoListFailed = (error) => ({
  type: albumPhotoListConst.GET_ALBUM_PHOTO_LIST_FAILED,
  payload: error,
});

