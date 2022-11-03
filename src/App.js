import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout
      justify={localStorage.getItem("username") ? "space-between" : "center"}
    >
      asd
    </Layout>
  );
}

export default App;
