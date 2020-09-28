import React from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root')

function InputModal(props: any) {
  const {showMod, category, handleMod, handleChange, save} = props
  var d = new Date();
  var month = d.getMonth()
  var date = d.getDate()
  var year = d.getFullYear()
  return (
    <div>
      <Modal isOpen={showMod} className="modal"
       overlayClassName="overlayModal"
       >
        <h1 className='modal-close-btn' onClick={() =>handleMod(false)} > X </h1>
        <div className='modal-container'>
            <div className='modal-head'> 
            <div className='filled'> Expense</div>
            <div className='empty'> Income</div> 
            <div className = 'modal-date'> {
                `${date}/${month}/${year}`
                } </div> </div>
        <form>
        <div className='amount'>
            Amount <input 
            type='number' required 
            className='inpt'
            onChange= {handleChange} /> 
        </div>

        <div className='amount'>
            Category <input type='text' 
            className='inpt cat_input'
            value= {`${category}`}
            disabled/> 
        </div>
        

        <div className='btns'>
            <input type='submit' 
            value='Submit' 
            className='sub'
            onClick = {() => save(false) } />
            <input type='submit' value='Cancel' className='sub'/>
        </div>
        </form>
        </div>
      </Modal>
    </div>
  );
}

export default InputModal;
