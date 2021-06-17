import { CREATE_MESSAGE  } from './types';

// CREATE MESSAGE
export const createMessage = (text,alertType,time) => (dispatch) =>{
  let timeout = 5000;

  if(typeof(text)=='object'){
    text = JSON.stringify(text);
  }
  if(time){
    timeout = time;
  }
  dispatch({
    type: CREATE_MESSAGE,
    payload: {
      text:text,
      alertType:alertType
    },
  });
  setTimeout(()=>{
    dispatch({
      type: CREATE_MESSAGE,
      payload: {
        text:"",
        alertType:""
      },
    });
  },timeout)
};