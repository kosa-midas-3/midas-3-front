import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";

function App() {
  return (
    <Layout
      justify={localStorage.getItem("username") ? "space-between" : "center"}
    >
      <Login />
    </Layout>
  );
}

export default App;
