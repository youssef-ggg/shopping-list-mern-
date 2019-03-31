import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AppNavbar from './components/appNavbar';
import ShoppingList from './components/shoppingList';
import store from './store';
import ItemModal from './components/ItemModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <Container>
            <ItemModal/>
            <ShoppingList/>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
