import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

import Fade from "../animations/Fade";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 15px;
  cursor: pointer;
  padding: 0.5rem 3rem;
  color: palevioletred;
  font-size: 2rem;
  font-weight: 600;
  background-color: white;
  outline: 2px solid palevioletred;
  box-shadow: 0 2px 5px grey;
  transition: all 0.2s ease-out;

  &:hover,
  &:active {
    box-shadow: none;
    outline-offset: 1px;
  }
`;

export default function Invoice() {
  const [inProp, setInProp] = useState(false);

  let navigate = useNavigate();
  const params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  useEffect(() => {
    setInProp((prop) => !prop);
    return () => {
      setInProp((prop) => !prop);
    };
  }, [setInProp]);

  if (!invoice)
    return (
      <Fade in={inProp}>
        <p>Invalid path!!!</p>
      </Fade>
    );

  return (
    <Fade in={inProp}>
      <article
        style={{
          padding: "0 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginLeft: "1rem",
        }}
      >
        <h2 style={{ marginBlockEnd: "0", marginBlockStart: "0" }}>
          Total Due: {invoice.amount}
        </h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <p>
          <Button
            onClick={() => {
              setInProp(false);
              // setTimeout(() => {
              deleteInvoice(invoice.number);
              navigate("/invoices");
              //   setInProp(true);
              // }, 600);
            }}
          >
            Delete
          </Button>
        </p>
      </article>
    </Fade>
  );
}
