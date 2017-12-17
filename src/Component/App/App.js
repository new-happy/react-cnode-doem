import React,{ Component } from 'react'
import './app.css'
import Home from '../Home/Home'
import ShowTop from '../ShowTop/ShowTop'
import UserInfo from '../UserInfo/UserInfo'
import Header from '../Header/Header'
import CreatTopic from '../CreatTopic/CreatTopic'
import Footer from '../Footer/Footer'
import {
   HashRouter as Router,
   Route,
   Switch
} from 'react-router-dom'

class App extends Component {
  render () {
   return (
     <Router>
       <div className="app">
         <Header />
         <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/topic/create' component={CreatTopic}/>
         <Route path='/topic/:id' component={ShowTop} />
         <Route path='/user/:loginname' component={UserInfo}/>
         </Switch>
         <Footer />
       </div>
     </Router>
   )
  }
}

export default App
