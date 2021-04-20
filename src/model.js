export const moduleName = 'global'

const defaultState = {
}

export default {
  namespace: moduleName,
  state: {
    ...defaultState
  },
  effects: {
    // *methodName({payload}, {call, put, select}) {}
  },
  reducers: {
    // methodsName(state, action) {
    //   return {}
    // }
  }
}
