import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PinterestApp from "./PinterestApp";
import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slices/pokemonSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
console.log(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PinterestApp />
    </Provider>
  </React.StrictMode>
);
