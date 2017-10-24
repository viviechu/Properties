import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Property from './components/Property';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';
import reducer from './reducers';
const middleware = [ thunk ];
let store = createStore(reducer,
applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/property" component={Property}/>
        </Switch>
      </App>
    </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
