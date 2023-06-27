import CardPaymentForm from './CardPaymentPay/CardPaymentPay'
import GooglePayForm from './GooglePay/GooglePay';
import Paypal from './paypal/paypal'
import React, {useState} from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51NNbQFJF965Ag0cYDmlHxCoPyUcGUWosLhhhTkCrqRfYIklHmqiYPPXSFYtTqklDxqgPQNC0mGaHoa7v9kKg2UJ800YdXCFX4p')



const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentOptionChange = (e) => {
        setPaymentMethod(e.target.value);
    };
    
    const renderPaymentForm = () => {
        if(paymentMethod==="applepay"){
            return (
                <>
                    <Paypal/>
                </>
            )
        }else if(paymentMethod==="googlepay"){
            return (
                <>
                    <GooglePayForm/>
                </>
            )
        }else if(paymentMethod==="cardPayment"){
            return (
                <Elements stripe={stripePromise}>
                    <CardPaymentForm/>
                </Elements>
            )
        }
    }

    return(
        <>
            <div>
                    <label>
                        <input 
                            type="radio"
                            value="applepay"
                            checked={paymentMethod==='applepay'}
                            onChange={handlePaymentOptionChange}
                        />
                            Paypal
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="radio"
                            value="googlepay"
                            checked={paymentMethod==='googlepay'}
                            onChange={handlePaymentOptionChange}
                        />
                            Google Pay
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="radio"
                            value="cardPayment"
                            checked={paymentMethod==='cardPayment'}
                            onChange={handlePaymentOptionChange}
                        />
                            Paiement par carte
                    </label>
                    <div id='boxPaiement'>
                        {renderPaymentForm()}
                    </div>
            </div>
        </>
    )
}

export default Payment