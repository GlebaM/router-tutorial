import React, { useState, useEffect, Fragment } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { getInvoices } from "../data";
import Link from "../components/UI/Link";
import Fade from "../animations/Fade";

import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 3px;
  outline: 2px solid palevioletred;
  transition: all 0.2s ease-out;

  &:focus-visible {
    outline-offset: 3px;
  }
`;

const SideUl = styled.ul`
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  padding: 0.7rem 0;
  padding-right: 2rem;
  border-right: 1px solid palevioletred;
`;

export default function Invoices() {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp((prop) => !prop);
    return () => {
      setInProp((prop) => !prop);
    };
  }, [setInProp]);

  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  const onChangeHandler = (event) => {
    let filter = event.target.value;

    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  const duration = 300;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    transformOrigin: "50% 0%",
    opacity: 0,
    transform: "scale(0)",
  };

  const transitionStyles = {
    entering: { opacity: 0, transform: "scale(0)" },
    entered: { opacity: 1, transform: "scale(1)" },
    exiting: { opacity: 1, transform: "scale(1)" },
    exited: { opacity: 0, transform: "scale(0)" },
  };

  const content = invoices
    .filter((invoice) => {
      let filter = searchParams.get("filter");
      if (!filter) return true;
      let name = invoice.name.toLowerCase();
      return name.includes(filter.toLowerCase());
    })
    .map((invoice) => {
      return (
        <CSSTransition
          in={inProp}
          timeout={duration}
          mountOnEnter
          unmountOnExit
          appear
        >
          {(state) => (
            <Link
              path={`/invoices/${invoice.number}`}
              key={invoice.number}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              {invoice.name}
            </Link>
          )}
        </CSSTransition>
      );
    });

  return (
    <Fragment>
      <Fade in={inProp}>
        <SideUl>
          <Input
            value={searchParams.get("filter") || ""}
            onChange={onChangeHandler}
            placeholder="Filter invoices"
          />
          {content}
        </SideUl>
      </Fade>
      <Fade in={inProp}>
        <Outlet />
      </Fade>
    </Fragment>
  );
}
