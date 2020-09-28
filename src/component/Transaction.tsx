import React from "react";

import { TransactionContainer } from "./Transaction.style";
import { UseAppState } from "../appContext";
import { FormatDate } from "../Helper Function/functions";
import "./transaction.style.css";

function Transaction() {
  const { state } = UseAppState();
  return (
    <>
      {/* <h2> Transactions </h2> */}
      <table>
        <thead>
          <th>Date</th>
          <th>Category</th>
          <th>Amount</th>
          </thead>
          </table>
      <TransactionContainer>
      <table>
          {state.categories.map((category) => {
            return category.expenses.map((expense) => {
              let date = FormatDate(expense.date)
              
              const cat = category.title;
              const amount = expense.expense;
              return (
                <tbody>
                    <tr>  
                  <td> {`${date.date} ${date.month} ${date.year}`} 
                  {/* <span className='del'>x</span>  */}
                  </td>
                  <td> {`${cat}`} </td>
                  <td> {`${amount}`} </td>
                  </tr>
                </tbody>
              );
            });
          })}
      </table>
    </TransactionContainer>
    </>
  );
}

export default Transaction;
