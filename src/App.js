import "./App.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/header/Header";
import { getUserName } from "./util/getUsername";
import Time from "./components/time/Time";
import Login from "./components/Login/Login";

function App() {
  return (
    <Layout justify={getUserName() ? "space-between" : "center"}>
      {getUserName() ? (
        <>
          <Header />
          <Time />
        </>
      ) : (
        <Login />
      )}
    </Layout>
  );
}

export default App;
