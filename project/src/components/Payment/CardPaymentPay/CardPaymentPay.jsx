import React, { useState } from 'react';
import { 
    CardElement, 
    useStripe, 
    useElements, 
    CardCvcElement, 
    CardExpiryElement, 
    CardNumberElement,
    PaymentElement} from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérifier si Stripe est prêt
    if (!stripe || !elements) {
      return;
    }

    // Créer un token de carte avec les informations du formulaire
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(false);
    } else {
      // Effectuer une requête à votre serveur pour finaliser le paiement
      // Ici, vous pouvez appeler votre API backend pour effectuer le paiement réel avec le token de paiement

      // Exemple de requête avec fetch :
      fetch('/votre-endpoint-de-paiement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setPaymentError(null);
            setPaymentSuccess(true);
          } else {
            setPaymentError('Une erreur est survenue lors du paiement.');
            setPaymentSuccess(false);
          }
        })
        .catch((error) => {
          setPaymentError('Une erreur est survenue lors du paiement.');
          setPaymentSuccess(false);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
          </label>
          <br/>
        </div>
        {paymentError && <div>{paymentError}</div>}
        {paymentSuccess && <div>Paiement réussi !</div>}
        <button type="submit" disabled={!stripe}>
          Payer
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
