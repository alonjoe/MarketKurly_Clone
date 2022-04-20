import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import card from "./modules/card";
import user from "./modules/user";
import basket from "./modules/basket";
import detail from "./modules/detail";
import review from "./modules/review";
import detail_user from "./modules/review";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: user,
  card: card,
  basket: basket,
  detail: detail,
  review: review,
  detail_user: detail_user,
  router: connectRouter(history),
});

const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: ["basket"],
}

const _persistReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk.withExtraArgument({ history: history })];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// let store = (initialStore) => createStore(_persistReducer, enhancer);

let store = createStore(_persistReducer, enhancer);

const persistor = persistStore(store);

export {store, persistor}



