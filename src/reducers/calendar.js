const initialState = {
  dataEvents: null,
  dataToday: null,
  loaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'DATA_EVENTS_SUCCESSFUL':
    return {
      ...state,
      dataEvents: action.payload,
      loaded: true 
    }
  case 'DATA_EVENTS_FAILED':
    return {
      ...state
    }
  case 'NOW_EVENTS_SUCCESSFUL':
    return {
      ...state,
      dataToday: action.payload
    }
  case 'NOW_EVENTS_FAILED':
    return {
      ...state
    }
  default:
    return state
  }
}
