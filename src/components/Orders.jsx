import React from "react";
import { Container } from "react-bootstrap";
import { useCart } from "../context/cart";

const Info = () => {
  return (
    <div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ textAlign: "left" }}>BANCON CHEESBURGER</h4>
        <h4>KYD $16</h4>
      </div>
      <p style={{ textAlign: "left" }}>
        CAB, Patty, SWiss, baconm, tamonta , cheess , pepper, lomst, mayo
      </p>
    </div>
  );
};

export default function Orders() {
  const items = useCart();
  return (
    <div>
      <Container
        fluid
        style={{
          border: "2px solid #000",
          width: "40%",
          margin: "auto",
          marginTop: "60px",
          marginBottom: "10px",
        }}
      >
        {items.map((item, index) => (
          <Info />
        ))}
      </Container>
      <h4
        style={{
          textAlign: "right",
          margin: "auto",
          width: "40%",
          paddingRight: "10px",
        }}
      >
        Your Orders {items.length}
      </h4>
    </div>
  );
}
