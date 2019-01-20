import React, { Component } from "react";
//Redux
import { Provider } from "react-redux";
import store from "./store";
//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Products, EditProduct, NewProduct } from "./components/";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <div className="container">
                <Switch>
                  <Route  exact path="/" component={Products}/>
                  <Route  exact path="/product/edit/:id" component={EditProduct}/>
                  <Route  exact path="/products/new" component={NewProduct}/>
                </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
