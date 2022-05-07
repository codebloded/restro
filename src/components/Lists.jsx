import React from "react";
import { Accordion } from "react-bootstrap";
import { useCart, useDispatchCart } from "../context/cart";

export default function Lists() {
  const dispatch = useDispatchCart();
  const add = (item) => {
    console.log("add");
    dispatch({ type: "ADD", item });
  };
  return (
    <div style={{ width: "40%", margin: "auto", marginTop: "100px" }}>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ backgroundColor: "yellow" }}>
            Accordion Item #1
          </Accordion.Header>

          <Accordion.Body>
            <li
              style={{
                border: "2px solid #000",
                padding: "5px",
                margin: "1px",
              }}
              onClick={add}
            >
              Item
            </li>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
