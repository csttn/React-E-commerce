import React from "react";

import StripeCheckout from "react-stripe-checkout";

import "./styles.scss";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;

  const publishablekey =
    "pk_test_51ITYRSB1WcSZtueutvoobBlbRicw7qVPLTtxufgN74PbAQrJ7nhNUTv0XlQGR7JyLBBR7MGXkJXTGKSBGtlFqxxx00BAgL460d";

  const onToken = (token) => {
    console.log(token);
    alert("Pagamento realizado com sucesso");
  };

  return (
    <StripeCheckout
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      currency="BRL"
      locale="auto"
      label="Pague agora"
      name="C. Santana Development Ltda. rs"
      shippingAddress
      description={`Total a pagar R$ ${price}`}
      amount={priceForStripe}
      panelLabel="Pague agora"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
}

export default StripeCheckoutButton;
