import Service from './service';

interface message {
  id?: number;
  [prop: string]: any;
}

interface chatRoomStatePropTypes {
  messages: message[];
  isRobot: number;
}

export const moduleName = 'chatRoom';

const defaultState: chatRoomStatePropTypes = {
  isRobot: 0, // -1默认， 0人工， 1机器人
  messages: [{name: 'saldf'}],
};

export default {
  namespace: moduleName,
  state: {
    ...defaultState,
  },
  effects: {
    *methodName({ payload }, { call, put, select }) {
      console.log('mehtoname');
    },
  },
  reducers: {
    pushMessage(state, action): message[] {
      console.log('pushMessage', state, action);
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    },
  },
};
