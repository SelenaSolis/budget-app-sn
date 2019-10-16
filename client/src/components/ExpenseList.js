import React, { Component } from 'react';

class ExpenseList extends Component {

  deleteExp(id){
    let userObj = this.props.user
    let expenses = this.props.user.expenses
    expenses.splice(id,1);
    userObj.expenses = expenses;
    console.log(userObj)
    fetch('/users', {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj)
    })
    this.props.handler(userObj)
  }

  render(){
    return (
            <div className="expense-item d-flex justify-content-between align-items-baseline">
                <h6 className="expense-title mb-0 text-uppercase list-item">{this.props.desc}</h6>
                <h5 className="expense-amount mb-0 list-item">{this.props.amt.toFixed(2)}</h5>
                <h5 className="expense-amount mb-0 list-item">{this.props.date}</h5>
                <div className="expense-icons list-item">
                  <a href="#" className="edit-icon mx-2" id={this.props.id}>
                      <i className="fas fa-edit"></i>
                  </a>
                  <a href="#" className="delete-icon" onClick={()=>{
                    this.deleteExp(this.props.id)
                  }}>
                      <i className="fas fa-trash"></i>
                  </a>
                </div>  
            </div>
    )
  }
}

export default ExpenseList;