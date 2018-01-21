import React from 'react';
import { connect } from 'react-redux';


class Balance extends React.Component {
    render() {
        return(
            <div>
                <div>Your balance is</div>
                <div>{ this.props.balance || '9876.54'}</div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        balance: state //Tai put a flag here
    };
}
export default connect(mapStateToProps)(Balance);