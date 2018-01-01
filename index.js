import React from 'react'
import {
  AppRegistry
} from 'react-native'
import { Provider } from 'react-redux'
import {
  createStore,
  applyMiddleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import App from './src/App.js'
import AppReducer from './src/reducers'

const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))

export default class ReactNativeCalendarExample extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}


AppRegistry.registerComponent('reactNativeCalendarExample', () => ReactNativeCalendarExample);
