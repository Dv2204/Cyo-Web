import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import history from "./services/History";
import configureStore from "./redux/store";
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from "react-redux";

// const store = configureStore(history)
const App = () => {
  return (
    // <Provider store={store}>
    <div className="App">
    {/* <ConnectedRouter history={history}> */}
        <Routes/>
      {/* </ConnectedRouter> */}
      </div>
   // </Provider>
  );
};

export default App;