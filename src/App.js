import "./App.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/header/Header";
import { getUserName } from "./util/getUsername";
import Time from "./components/time/Time";

function App() {
  return (
    <Layout justify={getUserName() ? "space-between" : "center"}>
      {getUserName() ? (
        <>
          <Header />
          <Time />
        </>
      ) : (
        <></>
      )}
    </Layout>
  );
}

export default App;
