import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

// Pages
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

// Components
import Navbar from "./components/Navbar";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <RestrictedRoute exact path="/" component={AdminLoginPage} />
              <RestrictedRoute exact path="/login" component={AdminLoginPage} />
              <PrivateRoute
                exact
                path="/dashboard"
                component={AdminDashboardPage}
              />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
