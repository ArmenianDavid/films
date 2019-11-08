import React from 'react'
import Nav from './components/Nav'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MyTop from './components/MyTop'
import MostGrossing from './components/MostGrossing'
import TopAction from './components/TopAction'
import Main from './components/Main'


const App = () =>{
   return (
     <BrowserRouter>
       <Nav />
         <Switch>
           <Route path='/' component={Main} exact/>
           <Route path='/myTop' component={MyTop} exact/>
           <Route path='/mostGrossing' component={MostGrossing} exact />
           <Route path='/TopAction' component={TopAction} exact/>
         </Switch>
     </BrowserRouter>
   )
}
 
export default App