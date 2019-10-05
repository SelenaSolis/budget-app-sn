import React, { Component } from 'react';


class BudgetForm extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(data => this.setState({ user: data[0] }))
    }
    handleSubmit = (e) => {
        fetch('/users', {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.user)
        })
    }


    render() {
        return (
            <div className="card" id="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <a href="#" className="budget-card-link" data-toggle="modal" data-target="#addBudgetModal">Add Budget</a>
                    <div className="modal fade" id="addBudgetModal" tabIndex="-1" role="dialog" aria-labelledby="editModalTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="teamName" className="budget-label">Please Enter Your Budget :  </label>
                                        <input type="Number" id="budget-input" onChange={(e) => {
                                            this.setState({ user: { ...this.state.user, budget: Number(e.target.value) } })
                                        }} />
                                    </div>
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
export default BudgetForm;