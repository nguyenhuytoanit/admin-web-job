import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { SnackbarProvider } from "notistack";

const anchorOrigin = {
  vertical: "top",
  horizontal: "right",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <SnackbarProvider anchorOrigin={anchorOrigin} maxSnack={3}>
      <BrowserRouter basename="/">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </SnackbarProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
