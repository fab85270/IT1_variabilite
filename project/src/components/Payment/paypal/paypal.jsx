import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js'
import {React, useContext} from 'react';
import {PriceContext} from '../../../Context/PriceContext';

const Paypal = () => {

    const{price} = useContext(PriceContext); //pour utiliser contexte Prix à payer

    return(
        <>
            <PayPalButtons
                createOrder={(data,action) =>{
                    return action.order.create({
                        purchase_units:[
                            {
                                amount:{
                                    currency_code:"USD",
                                    value: price
                                }
                            }
                        ]
                    })

                }}
                onApprove={(data,actions)=>{

                }}
            />
        </>    
    )

}


export default Paypal;
