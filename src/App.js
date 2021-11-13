// import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
// import Fade from "./animations/Fade";

function App() {
  // const [inProp, setInProp] = useState(false);
  // useEffect(() => {
  //   setInProp((prop) => !prop);
  // }, [setInProp]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              // <Fade in={inProp}>
              <main style={{ marginLeft: "1.5rem" }}>
                <p>Select an invoice</p>
              </main>
              // </Fade>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem 0" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
