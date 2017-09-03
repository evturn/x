import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking
} from 'reactotron-react-native'
import React from 'react'
import Accessor from './app/index.js'

 Reactotron
  .configure({
    name: 'Accessor', 
  })
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(overlay())
  .use(asyncStorage())
  .use(networking())
  .connect()

class App extends React.Component {
  render() {
    return <Accessor />
  }
}

export default App
