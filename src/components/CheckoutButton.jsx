const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
  
    const response = await fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 5000 }), // Example: $50.00
    });
  
    const { clientSecret } = await response.json();
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });
  
    if (error) {
      console.error(error);
    } else {
      console.log("Payment successful!", paymentIntent);
    }
  };
  