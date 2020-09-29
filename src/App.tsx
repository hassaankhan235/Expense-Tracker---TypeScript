import React from 'react';
import { Route } from 'react-router-dom';

import './App.css'
import ExpenseComponent from './component/ExpenseComponent'
import SideBar from './component/SideBar'
import Categories from './component/Categories'
import { UseAppState } from './appContext'
import Transaction from './component/Transaction'
import firebase from './firebase'
import { getTokenSourceMapRange } from 'typescript';


function App() {
  const messaging = firebase.messaging();
  messaging.requestPermission().then(() => {
    return messaging.getToken()
  }).then((token: any)=>{
    console.log('TOKEN', token)
  })
  const {state ,  } = UseAppState()
    return (
      <div className="App">
        <SideBar />
        <div className='oppositeToSideBar'>
        <div className='ExpenseComp'>
        <ExpenseComponent title={'This Month'}/>
        <ExpenseComponent title={'Today'} />
        <ExpenseComponent title={'Balance'} />
        </div>
        <Route path='/' exact >
        <div className='categoryIcon' >
          {
             state.categories.map((item :any) => {
             return <Categories text = {item.title} key={item.id} />
             })
          }
        </div>
        </Route>
        <Route path='/transactions' exact>
          <div className='Trans-Container'>
        <Transaction />
        </div>
        </Route>
        <Route path='/setting' exact>
          <div  className='Trans-Container' style={{color:'brown'}} > 
            Set Income 
            <input type='text' className = 'setIncome' 
            value = {`${state.Income} - Sorry the value can't be changed in test version`} disabled /> </div>
        </Route>
        </div>
      </div>
       )
}
export default App;
