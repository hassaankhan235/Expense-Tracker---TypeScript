import React from 'react'

import {ExpenseDispContainer} from './expensecomponent'
import {ExpenseComponentprops} from '../types/types' 


function ExpenseComponent(props: ExpenseComponentprops) {
  const {title} = props
  return (
    <ExpenseDispContainer>
      {title}
    </ExpenseDispContainer>
  )
}

export default ExpenseComponent
