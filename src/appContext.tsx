import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { data , Action, appStateContextProps, expense} from './types/types'
import {v1 as uuid} from 'uuid'

const Appdata : data = {
    Income : 20000,
    categories : [
        {id: uuid(), title: 'First Aid', click: false, 
        expenses: [] as expense[]},
        {id: uuid(), title: 'Transport', click: false, expenses: [] as expense[]},
        {id: uuid(), title: 'Automobile', click: false, expenses: [] as expense[]},
        {id: uuid(), title: 'Food', click: false, expenses: [] as expense[]},
        {id: uuid(), title: 'Rent', click: false, expenses: [] as expense[]},
        {id: uuid(), title: 'Gifts', click: false, expenses: [] as expense[]},
        {id: uuid(), title: 'Child Care', click: false, expenses: [] as expense[]},
        {id: uuid(), title: 'Clothing', click: false, expenses: [] as expense[]},
        {id: uuid(), title: 'Utilities', click: false, expenses: [] as expense[]}
    ]
}


const DataContext = createContext({} as appStateContextProps)

const appStateReducer = (state: data, action: Action) : data => {
  switch(action.type){
    case "category_click":{
      state.categories.map(item => {
        return item.title === action.payload.text ? item.click = true :
        item.click = false 
      } ) 
      console.log(state)
      return{...state}
    }
    case "save_expense" : {
      const categoryIndex = state.categories.findIndex(item => item.title === action.payload.text)
      state.categories[categoryIndex].expenses.push({date:action.payload.date, expense: action.payload.expense})
    }
  }
  return{...state}
}

export const DataContextProvider = ({children} : React.PropsWithChildren<{}>) => {
  useEffect(() => localStorage.setItem('appData', JSON.stringify(Appdata)))
  const IS = localStorage.getItem('appData') as string
  const Initial_state = JSON.parse(IS) ?? Appdata
  const[state, dispatch] = useReducer(appStateReducer, Initial_state)
    return (
      <DataContext.Provider value={{state, dispatch}}>
        {children}
      </DataContext.Provider>
    );
  };

  export const UseAppState = () => {
    return useContext(DataContext)
}
