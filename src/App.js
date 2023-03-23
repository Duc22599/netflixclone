import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.scss";

import routes from "./Router";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
