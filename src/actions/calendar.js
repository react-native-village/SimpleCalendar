export const getStudioEventsData = (data) => async dispatch => {
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

export const getTodayEvents = (today) => async dispatch => {
  console.log('today', today)
  try {
    dispatch({ type: 'TODAY_EVENTS_SUCCESSFUL', payload: today })
  } catch (error) {
    dispatch({ type: 'TODAY_EVENTS_FAILED' })
  }
}
