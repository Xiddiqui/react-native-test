import {
    FETCHING_POSTS_FAILIOUR,
    FETCHING_POSTS_REQUEST,
    FETCHING_POSTS_SUCCESS,
    HIDE_DELETE_MODAL,
    SHOW_DELETE_MODAL,
    HIDE_CREATE_POST_MODAL,
    SHOW_CREATE_POST_MODAL,
    EXTRA,
    EXTRA_FALSE,
} from "../types";


export const fetchingpostrequest = (payload) => {
    return {
        type: FETCHING_POSTS_REQUEST,
        payload: payload,
    };
};
export const fetchingpostsuccess = json => {
    return {
        type: FETCHING_POSTS_SUCCESS,
        payload: json,
    };
};
export const fetchingpostfailure = error => {
    return {
        type: FETCHING_POSTS_FAILIOUR,
        payload: error,
    };
};
export const fetchposts = () => {
    return async dispatch => {
        dispatch(fetchingpostrequest);
        try {
            let responce = await fetch('https://jsonplaceholder.typicode.com/posts');
            let json = await responce.json();
            dispatch(fetchingpostsuccess(json))
        } catch (error) {
            dispatch(fetchingpostfailure(error))
        }

    }
}
export const hidedeletemodal = (payload) => {
  return{
      type : HIDE_DELETE_MODAL,
      payload:false,
  }
}
export const showdeletemodal = (payload) => {
    console.log('show',payload)
    return{
        type : SHOW_DELETE_MODAL,
        payload:true,
    }
  }
  export const hidecreatepostmodal = (postModalpayload) => {
    return{
        type : HIDE_CREATE_POST_MODAL,
        postModalpayload:false,
    }
  }
  export const showcreatepostmodal = (postModalpayload) => {
      console.log('\n\n show create',postModalpayload)
      return{
          type : SHOW_CREATE_POST_MODAL,
          postModalpayload:true,
      }
    }
    export const extrastate = () => {
        console.log('\n\n extra truem ====')
        return{
            type : EXTRA,
            extrapayload:true,
        }
      } 
      export const extrastatefalse = () => {
        console.log('\n\n extra falseh=====')
        return{
            type : EXTRA_FALSE,
            extrapayload:false,
        }
      }