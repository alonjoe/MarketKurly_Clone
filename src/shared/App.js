import './App.css';
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from '../redux/configStore';
import { BrowserRouter } from 'react-router-dom';

import Header from "../components/Header";
import Login from '../pages/Login';
import Main from "../pages/Main";
import Best from '../components/Best';
import New from '../components/New';
import Flex from "../elements/Flex"

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        
        <Header />
        
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/new" component={New} />
        <Route exact path="/best" component={Best} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
