import { albumListConst } from "./constants";

export const getAlbumList = () => ({
  type: albumListConst.GET_ALBUM_LIST,
  payload: {},
});

export const getAlbumListSuccess = (hotBoxListData) => ({
  type: albumListConst.GET_ALBUM_LIST_SUCCESS,
  payload: hotBoxListData,
});

export const getAlbumListFailed = (error) => ({
  type: albumListConst.GET_ALBUM_LIST_FAILED,
  payload: error,
});

