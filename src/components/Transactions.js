import React from 'react';

class Transactions extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type = "text" placeholder = "money to deposit or withdrawal" />
                    <button type = "submit" name = "deposit"> Deposit </button>
                    <button type = "submit" name = "withdrawal"> Withdrawal</button>    
                </form>    
            </div>
        );
    }
}

export default Transactions;