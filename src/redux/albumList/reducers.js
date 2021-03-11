// @flow
import { albumListConst } from "./constants";

const INIT_STATE = {
  loading: false,
  albumListData: {},
};

const albumList = (state = INIT_STATE, action) => {
  switch (action.type) {
    

    case albumListConst.GET_ALBUM_LIST:
      return { ...state, loading: true };
    case albumListConst.GET_ALBUM_LIST_SUCCESS:
      return {
        ...state,
        albumListData: action.payload,
        loading: false,
        error: null,
      };
    case albumListConst.GET_ALBUM_LIST_FAILED:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};

export default albumList;
