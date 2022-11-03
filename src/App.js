import Layout from "./components/Layout/Layout";
import { getUserName } from "./util/getUsername";
import Login from "./components/Login/Login";
import { useEffect, useState } from "react";
import Home from "./page/Home";

function App() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    setLogin(getUserName());
  }, []);

  return (
    <Layout justify={login ? "space-between" : "center"}>
      {login ? <Home /> : <Login setLogin={setLogin} />}
    </Layout>
  );
}

export default App;
