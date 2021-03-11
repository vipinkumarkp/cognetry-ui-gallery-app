// @flow
import { albumPhotoListConst } from "./constants";

const INIT_STATE = {
  loading: false,
  albumPhotoListData: {},
};

const albumPhotoList = (state = INIT_STATE, action) => {
  switch (action.type) {
    

    case albumPhotoListConst.GET_ALBUM_PHOTO_LIST:
      return { ...state, loading: true };
    case albumPhotoListConst.GET_ALBUM_PHOTO_LIST_SUCCESS:
      return {
        ...state,
        albumPhotoListData: action.payload,
        loading: false,
        error: null,
      };
    case albumPhotoListConst.GET_ALBUM_PHOTO_LIST_FAILED:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};

export default albumPhotoList;
