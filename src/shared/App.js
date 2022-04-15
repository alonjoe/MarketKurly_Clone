import './App.css';
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from '../redux/configStore';
import { BrowserRouter } from 'react-router-dom';

import Header from "../components/Header";
import Main from "../pages/Main";
import Best from '../components/Best';
import New from '../components/New';

function App() {
  return (
    <div className="App">
      안녕
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={Main} />
        <Route exact path="/new" component={New} />
        <Route exact path="/best" component={Best} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
