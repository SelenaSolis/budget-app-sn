import React, { Component } from 'react';
import ExpenseList from './ExpenseList';

class ExpenseListForm extends Component {
  constructor(props){
    super(props);
    this.handler = this.handler.bind(this);
  }

  state = {
    user: {}
  }
  

  componentDidMount() {
    fetch('/users')
    .then(res => res.json())
    .then(data => this.setState({ user: data[0] }))
  }

  handler(newObj){
    this.setState({user: newObj})
  }



  render(){
    if(this.props.user.expenses){
      return (
          <div className="col-md-7 my-3">
              <div className="expense-list" id="expense-list">
                  <div className="expense-list__info d-flex justify-content-between text-capitalize ">
                      <h5 className="list-item">expense title</h5>
                      <h5 className="list-item">expense value</h5>
                      <h5 className="list-item">date</h5>
                      <h5 className="list-item">edit</h5>
                  </div>
              </div>
                {this.props.user.expenses.map((exp, index) =>
                  <ExpenseList 
                      key = {index}
                      id = {index}
                      desc = {exp.expDesc}
                      amt = {exp.expAmt}
                      date = {exp.expDate}
                      user = {this.state.user}
                      deleteExp = {this.deleteExp}
                      handler = {this.handler}
                  />
              )}
          </div>
      )
    }
    else{
      return "loading"
    }
  }
}

export default ExpenseListForm;