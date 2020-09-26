import React from 'react';


import './App.css'
import ExpenseComponent from './component/ExpenseComponent'
import SideBar from './component/SideBar'
import Categories from './component/Categories'
import { UseAppState } from './appContext'

function App() {
  const {state ,  } = UseAppState()
    return (
      <div className="App">
        <SideBar />
        <div className='oppositeToSideBar'>
        <div className='ExpenseComp'>
        <ExpenseComponent title={'This Week'}/>
        <ExpenseComponent title={'Today'} />
        </div>
        <div className='categoryIcon' >
          {
             state.categories.map((item :any) => {
             return <Categories text = {item.title} />
             })
          }
        </div>
        </div>
      </div>
       )
}
export default App;
