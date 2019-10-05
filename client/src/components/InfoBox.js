import React from "react";

function InfoBox(props) {
    let expenseAmts = 0
    if (props.user.expenses) {
        expenseAmts = props.user.expenses.reduce((acc, curr) => {
            return acc += curr.expAmt
        }, 0)
    }

    function calculateBal() {
        let bal = props.user.budget - expenseAmts
        return bal
    }

    return (
        <div className="row my-3">
            <div className="col text-center mb-2">
                <h6 className="text-uppercase info-title">budget</h6>
                <span className="budget-icon"><i className="fas fa-money-bill-alt"></i></span>
                <h4 className="text-uppercase mt-2 budget" id="budget"><span>$ </span><span
                    id="budget-amount">{props.user.budget}</span></h4>
            </div>
            <div className="col text-center">
                <h6 className="text-uppercase info-title">expenses</h6>
                <span className="expense-icon"><i className="far"></i></span>
                <h4 className="text-uppercase mt-2 expense" id="expense"><span>$ </span><span
                    id="expense-amount">{expenseAmts}</span></h4>
            </div>
            <div className="col text-center">
                <h6 className="text-uppercase info-title">balance</h6>
                <span className="balance-icon"><i className="fas fa-dollar-sign"></i></span>
                <h4 className="text-uppercase mt-2 balance" id="balance"> <span>$ </span><span
                    id="balance-amount">{calculateBal()}</span></h4>
            </div>
        </div>
    )
}
export default InfoBox;