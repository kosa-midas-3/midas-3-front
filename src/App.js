import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout
      justify={localStorage.getItem("username") ? "space-between" : "center"}
    >
    </Layout>
  );
}

export default App;
