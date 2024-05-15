import React, { useState } from 'react';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  return (
    <div className="checkout">
      {step === 1 && (
        <div className="shipping-info">
          <h2>Shipping Information</h2>
          {/* Form for shipping info */}
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div className="payment-info">
          <h2>Payment Details</h2>
          {/* Form for payment details */}
          <button onClick={handlePreviousStep}>Back</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div className="order-confirmation">
          <h2>Order Confirmation</h2>
          {/* Display order summary */}
          <button onClick={handlePreviousStep}>Back</button>
          <button>Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
