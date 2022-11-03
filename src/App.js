import "./App.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/header/Header";
import { getUserName } from "./util/getUsername";
import Time from "./components/time/Time";
import Login from "./components/Login/Login";
import List from "./components/List/List";
import { useEffect, useState } from "react";

function App() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    setLogin(getUserName());
  }, []);

  return (
    <Layout justify={login ? "space-between" : "center"}>
      {login ? (
        <>
          <Header />
          <Time />
          <List />
        </>
      ) : (
        <Login setLogin={setLogin} />
      )}
    </Layout>
  );
}

export default App;
