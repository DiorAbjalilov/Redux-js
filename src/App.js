import React from 'react'
import store from './redux/store'
import CakeContent from './components/CakeContent'
import {Provider} from 'react-redux'
import HookCakeContainer from './components/HookCakeContainer'
import IceCreamContent from './components/IceCreamContent'
import NewCakeContent from './components/NewCakeContent'

const App = () => {
  return (
    <Provider store={store}>
        <CakeContent/>
        <HookCakeContainer/>
        <IceCreamContent/>
        <NewCakeContent/>
    </Provider>
  )
}

export default App