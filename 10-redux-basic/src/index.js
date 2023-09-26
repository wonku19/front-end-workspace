import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore as createSotre } from "redux";
import rootReducer from "./store";

// 스토어 생성
const store = createSotre(rootReducer);

// Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
