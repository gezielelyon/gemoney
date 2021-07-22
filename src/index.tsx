import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";

import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Programador Web",
          category: "Front-end",
          type: "deposit",
          amount: 1000,
          created_at: new Date(),
        },
        {
          id: 2,
          title: "Programador Fullstack",
          category: "Fullstack",
          type: "deposit",
          amount: 3000,
          created_at: new Date(),
        },
        {
          id: 3,
          title: "Programador Back-end",
          category: "Back-end",
          type: "withdraw",
          amount: 150,
          created_at: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
