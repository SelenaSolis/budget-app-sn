import React from "react";

function ExpenseList(props) {
    return (
        <div className="expense">
            <div className="expense-item d-flex justify-content-between align-items-baseline">
                <h6 className="expense-title mb-0 text-uppercase list-item">{props.desc}</h6>
                <h5 className="expense-amount mb-0 list-item">{props.amt}</h5>
                <h5 className="expense-amount mb-0 list-item">{props.date}</h5>
                <div class="expense-icons list-item">
                  <a href="#" class="edit-icon mx-2" data-id={props.id}>
                      <i class="fas fa-edit"></i>
                  </a>
                  <a href="#" class="delete-icon" data-id={props.id}>
                      <i class="fas fa-trash"></i>
                  </a>
                </div>  
            </div>    
        </div>
    )
}

export default ExpenseList;