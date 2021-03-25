import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import App from "./App";

createServer({
  models: {
    data: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/data", () => {
      return this.schema.all("data");
    });

    this.post("/data", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("data", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
