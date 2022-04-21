import './App.css';
import React from 'react';
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from '../redux/configStore';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Main from "../pages/Main";
import Best from '../components/Best';
import New from '../components/New';
import Detail from "../pages/Detail";
import Flex from "../elements/Flex";
import Write from "../pages/Write";
import Basket from '../pages/Basket';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userAction } from '../redux/modules/user';
// import PopupPostCode from '../components/PopupPostCode';

function App(sessionStorage) {
  const dispatch = useDispatch()
  const is_userName = useSelector((state) => state.user_name)

  React.useEffect (() => {
    dispatch(userAction.userInfo());
    if (is_userName === null) {
      console.log('---디테일 없음');
      console.log(is_userName.user_name);
      dispatch(userAction.userInfo());
      window.location.reload();
    } else {
      console.log('---디테일 있음')
      console.log(is_userName.user_name)
    };
  });
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Header userName={is_userName.user_name} />
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/new" component={New} />
        <Route exact path="/best" component={Best} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/write" component={Write} />
        <Route exact path="/Basket" component={Basket} />
        <Footer />
      </ConnectedRouter>
    </div>
  );
}

export default App;
