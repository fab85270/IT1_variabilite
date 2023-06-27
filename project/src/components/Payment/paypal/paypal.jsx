import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js'

const Paypal = () => {
    return(
        <>
            <PayPalButtons
                createOrder={(data,action) =>{
                    return action.order.create({
                        purchase_units:[
                            {
                                amount:{
                                    currency_code:"USD",
                                    value:"10.00"
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
