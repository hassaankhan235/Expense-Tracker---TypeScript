import React, { useState } from 'react'
import { UseAppState } from '../appContext'
import { FaClinicMedical,
         FaCar,
         FaTruck,
         FaHamburger,
         FaHome,
         FaGift,
         FaChild,
         FaTshirt,
         FaNewspaper } from "react-icons/fa";

import { CategoryStyle } from './CategoryStyle'
import { categoryProps } from '../types/types'
import InputModal  from './InputModal'
import './category.css'



function Categories(props: categoryProps) { 
const [modalopen, setModalopen] = useState(false)
const [expense, setExpense] = useState('')
const {text} = props
const {state, dispatch} = UseAppState()

  const handleModal = (show : boolean)=> {
    // console.log('clicked', show)
      setModalopen(show)
      // dispatch({type:'category_click',payload: {text: txt} })
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setExpense(e.currentTarget.value)
    console.log(expense)
  }
  return (
    <div>
        <CategoryStyle onClick = {(e) =>
        {
          console.log('category clicked')
           handleModal(true)
        }
        }>
          {
            text === 'First Aid' ? <FaClinicMedical/> :
            text === 'Automobile' ? <FaCar /> :
            text === 'Transport' ? <FaTruck /> :
            text === 'Food' ? <FaHamburger /> :
            text === 'Rent' ? <FaHome /> :
            text === 'Gifts' ? <FaGift /> :
            text === 'Child Care' ? <FaChild /> :
            text === 'Clothing' ? <FaTshirt /> :
            <FaNewspaper/>
          }

        <span className='categoryName'>  { text } </span>
        </CategoryStyle>
        {
          <InputModal showMod = {modalopen} 
          handleMod ={handleModal}
          category = {text}
          handleChange = {handleChange} />
        }
        
        </div>
  )
}

export default Categories