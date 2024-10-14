const initialState = {
  data: [],
  socket: null,
  chatMessages: [],
};

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return { ...state, chatMessages: action.payload };

    default:
      return state;
  }
};
