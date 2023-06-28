import GooglePayButton from '@google-pay/button-react';
import {React, useContext} from 'react';
import {PriceContext} from '../../../Context/PriceContext';


const GooglePayForm = () => {

    const{price} = useContext(PriceContext); //pour utiliser contexte Prix à payer
    
    return(
        <>        
        <GooglePayButton
            environment="TEST"
            paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                {
                    type: 'CARD',
                    parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                    },
                },
                ],
                merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: '100',
                currencyCode: 'USD',
                countryCode: 'US',
                },
            }}
            onLoadPaymentData={paymentRequest => {
                console.log('load payment data', paymentRequest);
            }}
        />
    </>
    )
}


export default GooglePayForm;
