const initialState = {
  dataEvents: null
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'DATA_EVENTS_SUCCESSFUL':
    return {
      ...state,
      dataEvents: action.payload
    }
  default:
    return state
  }
}
