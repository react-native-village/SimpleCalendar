export const getStudioEventsData = (data) => dispatch => {
  try {
    const result = data.reduce((resObj, currEl) => {
      const { _id, title, subtitle, img, info, start, end, masterlink, days = [] } = currEl
      days.forEach(date => {
        if (!resObj[date]) resObj[date] = []
          resObj[date].push({ _id, title, subtitle, img, info, start, end, masterlink })
      })
      return resObj
    }, {})
    dispatch({ type: 'DATA_EVENTS_SUCCESSFUL', payload: result })
  } catch (error) {
    dispatch({ type: 'DATA_EVENTS_FAILED' })
  }
}

export const getNowEvents = (now) => dispatch => {
  try {
    dispatch({ type: 'NOW_EVENTS_SUCCESSFUL', payload: now })
  } catch (error) {
    dispatch({ type: 'NOW_EVENTS_FAILED' })
  }
}
