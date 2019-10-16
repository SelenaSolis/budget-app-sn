import React, { Component } from "react";

class ExpenseForm extends Component {
    state = {
        newExpenseDesc:"",
        newExpenseAmt:0,
        dollarAmt:0,
        exchangeRate:1
    }

    componentDidMount() {
      fetch('/users')
      .then(res => res.json())
      .then(data => this.setState({ user: data[0] }))
    }

    handleSubmit = (e) => {
        let expAmtStr = this.state.newExpenseAmt
        let expAmtNum = Number(expAmtStr)
        expAmtNum = expAmtNum.toFixed(2);
        expAmtNum = Number(expAmtNum)
        let d = new Date;
        let newExpObj = {
            expDesc: this.state.newExpenseDesc,
            expAmt: expAmtNum,
            expDate: d.toLocaleDateString("en-US")
        }
        let user = this.state.user
        user.expenses.push(newExpObj)
        fetch('/users', {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        this.setState({ newExpenseDesc: "" })
        this.setState({ newExpenseAmt: 0 })
        this.setState({dollarAmt: 0})
        this.setState({exchangeRate: 1})
    }

    onChangeAmtOrCurr= (e) =>{
        
    }

    render() {
        return (


            <div className="card" id="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <a href="#" className="expense-card-link" data-toggle="modal" data-target="#addExpenseModal">Add Expense</a>
                    <div className="modal fade" id="addExpenseModal" tabIndex="-1" role="dialog" aria-labelledby="editModalTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label className="budget-label">please enter your expense :  </label>
                                        <input type="text" id="expense-input" className="input-box" onChange={(e) => {
                                            this.setState({ newExpenseDesc: e.target.value })
                                        }} />
                                    </div>
                                    <div className="form-group">
                                        <label className="budget-label">please enter your expense amount :  </label>
                                        <input type="number" id="amount-input" className="input-box" onChange={(e) => {
                                            this.setState({dollarAmt: Number(e.target.value)})
                                            let exchAmt = Number(e.target.value) / this.state.exchangeRate
                                            exchAmt = exchAmt.toFixed(2)
                                            this.setState({newExpenseAmt: exchAmt})
                                        }} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="teamName" className="budget-label" >change currency:  </label>
                                        <select className="input-box" id = "currency-dd" defaultValue="USD" onChange = {(e)=>{
                                            let evt = document.getElementById("currency-dd")
                                            let abbr = evt.options[evt.selectedIndex].value
                                            fetch('https://api.exchangeratesapi.io/latest?base=USD')
                                            .then(res => res.json())
                                            .then(data => {
                                                let exchRate = data.rates[`${abbr}`]
                                                this.setState({exchangeRate: exchRate})
                                                let dollarAmt = this.state.dollarAmt
                                                let exchAmt = dollarAmt / exchRate
                                                exchAmt = exchAmt.toFixed(2);
                                                this.setState({newExpenseAmt: exchAmt})
                                            })
                                            
                                        }}>
                                            <option></option>
                                            <option value="USD">US dollar</option>
                                            <option value="AUD">Australian dollar</option>
                                            <option value="BRL">Brazilian real</option>
                                            <option value="CAD">Canadian dollar</option>
                                            <option value="CNY">Chinese yuan</option>
                                            <option value="ISK">Icelandic Krona</option>
                                            <option value="INR">Indian rupee</option>
                                            <option value="MXN">Mexican peso</option>
                                            <option value="GBP">Pound sterling</option>
                                            <option value="CHF">Swiss franc</option>                        
                                            <option value="TRY">Turkish Lira</option>
                                        </select>
                                    </div>
                                    Dollars:  {this.state.newExpenseAmt}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmit}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpenseForm;