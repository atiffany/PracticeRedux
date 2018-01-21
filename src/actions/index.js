export const DEPOSIT = 'DEPOSIT';
export const  WITHDRAWAL = 'WITHDRAWAL';

export const makeDeposit = (amount) => {
    return {
        type: DEPOSIT,
        payload: amount,
    };
}
export const makeWithdrawal = (amount) => {
    return {
        type: WITHDRAWAL,
        payload: amount,
    };
}