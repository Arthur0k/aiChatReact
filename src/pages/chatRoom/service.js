import request from 'utils/request';
const { post } = request;

export default {
  getChatToken: (params, headers) => {
    return post(`/v1/verify/chat-token`, params, headers);
  },
};
