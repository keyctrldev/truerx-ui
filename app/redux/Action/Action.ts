import axios from 'axios';
import { sendMessageApi } from '../../constants';

const SET_MESSAGES = 'SET_MESSAGES';

export const addMessages = () => {
  return async (dispatch: any) => {
    const response = await axios.get(sendMessageApi);
    const messages = response.data?.messages;
    dispatch({
      type: SET_MESSAGES,
      payload: messages,
    });
  };
};
