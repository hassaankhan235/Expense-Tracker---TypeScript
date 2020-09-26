import React, { createContext, useContext, useReducer } from 'react'
import { data , Action, appStateContextProps, expense} from './types/types'

const Appdata : data = {
    Income : 20000,
    categories : [
        {title: 'First Aid', click: false, 
        expenses: [] as expense[]},
        {title: 'Automobile', click: false, expenses: [] as expense[]},
        {title: 'Transport', click: false, expenses: [] as expense[]},
        {title: 'Food', click: false, expenses: [] as expense[]},
        {title: 'Rent', click: false, expenses: [] as expense[]},
        {title: 'Gifts', click: false, expenses: [] as expense[]},
        {title: 'Child Care', click: false, expenses: [] as expense[]},
        {title: 'Clothing', click: false, expenses: [] as expense[]},
        {title: 'Utilities', click: false, expenses: [] as expense[]}
    ]
}

const DataContext = createContext({} as appStateContextProps)

const appStateReducer = (state: data, action: Action) : data => {
  switch(action.type){
    case "category_click":{
      state.categories.map(item => {
        item.title === action.payload.text ? item.click = true :
        item.click = false 
      } ) 
      console.log(state)
      return{...state}
    }
  }
  return{...state}
}

export const DataContextProvider = ({children} : React.PropsWithChildren<{}>) => {
  const[state, dispatch] = useReducer(appStateReducer, Appdata)
    return (
      <DataContext.Provider value={{state, dispatch}}>
        {children}
      </DataContext.Provider>
    );
  };

  export const UseAppState = () => {
    return useContext(DataContext)
}
