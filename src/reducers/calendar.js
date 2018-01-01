const initialState = {
  dataEvents: null,
  dataToday: null
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'DATA_EVENTS_SUCCESSFUL':
    return {
      ...state,
      dataEvents: action.payload
    }
  case 'TODAY_EVENTS_SUCCESSFUL':
    return {
      ...state,
      dataToday: action.payload
    }
  default:
    return state
  }
}
