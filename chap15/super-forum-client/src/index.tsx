import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import configureStore from "./store/configureStore";
import ErrorBoundary from "./components/ErrorBoundary";

const client = new ApolloClient({
  uri: "http://localhost:81/graphql",
  credentials: "include",
  cache: new InMemoryCache({ resultCaching: false }),
});

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <React.StrictMode>
        <ApolloProvider client={client}>
          <ErrorBoundary>{[<App key="App" />]}</ErrorBoundary>
        </ApolloProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
