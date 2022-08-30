const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

// actions
// action-types
const ADD_ARTICLE = "ADD_ARTICLE";
const addArticle = () => {
  return {
    type: ADD_ARTICLE,
  };
};

// reducer
const initialState = {
  articles: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: state.articles + 1,
      };
    default:
      return state;
  }
};

// store
const store = createStore(reducer, applyMiddleware(logger));

/*
console.log(store.getState())
$ node store.js
{ articles: 0 }
*/

/*
console.log(store)
$ node store.js
{
  dispatch: [Function: dispatch],
  subscribe: [Function: subscribe],
  getState: [Function: getState],
  replaceReducer: [Function: replaceReducer],
  '@@observable': [Function: observable]
}
*/

// subscribe - view - dispatch

// store.subscribe(() => {
//   console.log("subscribe ==>>", store.getState());
// });

store.dispatch(addArticle());
store.dispatch(addArticle());
store.dispatch(addArticle());
store.dispatch(addArticle());
store.dispatch(addArticle());

/*
middleware로 logger실행
$ node store.js
 action ADD_ARTICLE @ 17:45:50.802
   prev state { articles: 0 }
   action     { type: 'ADD_ARTICLE' }
   next state { articles: 1 }
 action ADD_ARTICLE @ 17:45:50.818
   prev state { articles: 1 }
   action     { type: 'ADD_ARTICLE' }
   next state { articles: 2 }
 action ADD_ARTICLE @ 17:45:50.820
   prev state { articles: 2 }
   action     { type: 'ADD_ARTICLE' }
   next state { articles: 3 }
 action ADD_ARTICLE @ 17:45:50.823
   prev state { articles: 3 }
   action     { type: 'ADD_ARTICLE' }
   next state { articles: 4 }
 action ADD_ARTICLE @ 17:45:50.827
   prev state { articles: 4 }
   action     { type: 'ADD_ARTICLE' }
   next state { articles: 5 }
*/

/*
$ node store.js
subscribe ==>> { articles: 1 }
subscribe ==>> { articles: 2 }
subscribe ==>> { articles: 3 }
subscribe ==>> { articles: 4 }
subscribe ==>> { articles: 5 }
*/

/*
const redux = require("redux");
console.log(redux);

node store.js
커다란 객체 안에 함수덩이들이 들어있는 것을 알 수 있다.

{
  __DO_NOT_USE__ActionTypes: {
    INIT: '@@redux/INITo.4.j.t.7.i',
    REPLACE: '@@redux/REPLACE0.b.4.e.a.9',
    PROBE_UNKNOWN_ACTION: [Function: PROBE_UNKNOWN_ACTION]
  },
  applyMiddleware: [Function: applyMiddleware],
  bindActionCreators: [Function: bindActionCreators],
  combineReducers: [Function: combineReducers],
  compose: [Function: compose],
  createStore: [Function: createStore],
  legacy_createStore: [Function: createStore]
}
*/
