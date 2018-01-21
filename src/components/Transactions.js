import React from 'react';
import { makeDeposit, makeWithdrawal } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Transactions extends React.Component {
    constructor() {
        super();
        this.state = {
            amount: 1,
        };
        this.handleFormInput = this.handleFormInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormInput(e) {
        const cash = e.target.value;
        this.setState({ amount: cash });
    };

    handleFormSubmit(e) {
        e.preventDefault();
        // get the value of the target (e.target.value = 'deposit' or 'withdrawal')
        //use that target value in order to Dispatch to props
        console.log(e.target);
        console.log(e.target.value);
        this.props[e.target.value](this.state.amount); //will be makeDeposit(amount) or makeWithdrawal(amount)
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange = {this.handleFormInput} type = "number" placeholder = "money to deposit or withdrawal" value = {this.state.amount} />
                    <button onClick= {this.handleFormSubmit} type = "submit" name = "deposit" value = "makeDeposit"> Deposit </button>
                    <button onClick= {this.handleFormSubmit} type = "submit" name = "withdrawal" value = "makeWithdrawal"> Withdrawal</button>    
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    //use bindActionCreators in here
    //binds the action to the dispatch and sets it to this.props
    return bindActionCreators({ makeDeposit, makeWithdrawal }, dispatch);
};
const mapStateToProps = (state) => {
    console.log('hi');
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);