import './App.css';
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from '../redux/configStore';

import Header from "../components/Header";
import Main from "../pages/Main";
import Best from '../components/Best';
import New from '../components/New';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/new" component={New} />
        <Route exact path="/best" component={Best} />
      </ConnectedRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
