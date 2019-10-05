import React, { Component } from "react";
import './css/main.css';
import './css/bootstrap.min.css'
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseListForm from './components/ExpenseListForm';
import InfoBox from './components/InfoBox';

class App extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(data => this.setState({ user: data[0] }))
    }

    render() {
        if (this.state.user) {
            return (
                <div className="App">
                    <header className="App-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 mx-auto pt-3">
                                    <h1 className="text-uppercase mb-4">budget app</h1>
                                   
                                        {/*BudgetForm*/}
                                        <BudgetForm />

                                        {/*ExpenseForm*/}
                                        <ExpenseForm
                                            user={this.state.user}
                                        />
                            
                                    {/*Display*/}
                                    <InfoBox
                                        user={this.state.user}
                                    />
                                </div>
                            </div>
                            {/*ExpenseList*/}
                            <ExpenseListForm
                                expenses={this.state.user.expenses}
                            />
                        </div>
                    </header>
                </div>
            )
        }
        else {
            return "loading..."
        }
    }
}

export default App;
