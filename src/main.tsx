import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { jinaMyApi } from "./Redux/Api/JinaMyApi.ts";
import { Provider } from "react-redux";
import { jinaStore } from "./Redux/Store/JinaStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={jinaMyApi}>
      <Provider store={jinaStore}>
        <App />
      </Provider>
    </ApiProvider>
  </StrictMode>,
);
