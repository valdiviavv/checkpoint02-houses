import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

/*
Test Results:
Test Suites: 1 failed, 8 passed, 9 total
Tests:       2 failed, 53 passed, 55 total

  <Houses />
    ✓ Debería rederizar un "h1" con el texto "Game of Thrones" (31 ms)
    ✓ Debería renderizar en un tag "img" la imagen provista en la carpeta "img-cp2" (3 ms)
    ✓ La imagen debería tener un atributo "alt" con el texto "main-img" (3 ms)
    ✓ Debería rederizar un "h3" con el texto "Houses" (2 ms)
    connect Redux
      ✓ Debería traer de redux nuestras houses usando mapStateToProps (3 ms)
      ✓ Debería traer por props la action creator getAllHouses de Redux usando mapDispatchToProps (3 ms)
    React LifeCycles
      ✕ Debería mapear la cantidad de houses que hayan en el store y renderizar una <HouseCard /> por cada una (11 ms)
      ✕ Debería pasar como props a cada componente <HouseCard /> las propiedades id, region, name y words de cada house (6 ms)
 */
