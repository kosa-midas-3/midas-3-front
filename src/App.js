import Layout from "./components/Layout/Layout";
import { getUserName } from "./util/getUsername";
import Login from "./components/Login/Login";
import { useEffect, useState } from "react";
import Home from "./page/Home";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const [login, setLogin] = useState(null);
  const [queryClient] = useState(new QueryClient());
  useEffect(() => {
    setLogin(getUserName());
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout justify={login ? "space-between" : "center"}>
        {login ? <Home /> : <Login setLogin={setLogin} />}
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
