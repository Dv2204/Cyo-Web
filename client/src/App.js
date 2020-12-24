import React from "react";
import Routes from "./routes/Routes";
import { ApolloProvider } from "@apollo/client";

const App = () => {
  return (
    <ApolloProvider client={client}>
       <div className="App">
        <Routes/>
    </div>
    </ApolloProvider>
  );
};

export default App;