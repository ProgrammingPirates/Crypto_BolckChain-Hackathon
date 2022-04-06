import React, {useContext} from 'react'
import { Globalcontext } from '../Hooks/GlobalState';

export const Balance = () => {
    const {transactions}= useContext(Globalcontext);
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);
    return (
        <>
            <h4 className="mx-4 my-4 text-4xl text-center ">Your Balance</h4>
            <h1 id="balance" className="py-20 text-2xl font-bold text-center text-green-400" >₹{total}</h1>
        </>
    )
}


