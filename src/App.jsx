import './App.css'
import Header from './component/NavBar'
import Page from './component/Page'
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {

      return (
        
        <Provider  store={store}>
          <Header/>
          <Page/>
        </Provider>
      
      )
    }

export default App
