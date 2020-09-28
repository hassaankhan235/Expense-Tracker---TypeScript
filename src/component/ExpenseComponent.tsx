import React from 'react'

import {ExpenseDispContainer} from './expensecomponent'
import {ExpenseComponentprops} from '../types/types' 
import './expensecomponent.css'
import { expense } from '../types/types'
import { UseAppState } from '../appContext'
import { FormatDate } from '../Helper Function/functions'

function ExpenseComponent(props: ExpenseComponentprops) {
  const {title} = props
  const {state, } = UseAppState()
  console.log(title)
 

     
  const TotalDisplay = () => {
    const Total = state.categories.reduce((acc,cat) => {
      if(title === 'Balance'){
        const monthTotal = window.localStorage.getItem('Month')
        return (state.Income - Number(monthTotal))}
      return acc + cat.expenses.reduce(getSum,0)
      },0)
      if(title === 'This Month'){
        window.localStorage.setItem('Month',JSON.stringify(Total))
        } 
      return Total
  }

  const getSum = (acc : number,exp: expense) : number => {
    // See Title if Today calculate Today's expense
    if(title === 'Today' && FormatDate(exp.date).date === FormatDate(Date()).date){
      
      return (acc + Number(exp.expense)) 
    }
    // See Title if This Month calculate This Month expense
    else if(title === 'This Month' &&  
    FormatDate(exp.date).month === FormatDate(Date()).month &&
    FormatDate(exp.date).year === FormatDate(Date()).year){
    return (acc + Number(exp.expense))
   }
  return 0
  }
  

  return (
    <ExpenseDispContainer>
      <div className='total-expenses'>
        <div> {title} </div>
        <div className='final-expenses'>
      {
          TotalDisplay()
      }
      </div>
      </div>
    </ExpenseDispContainer>
  )
}

export default ExpenseComponent
