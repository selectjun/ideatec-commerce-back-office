import Pages from "./pages";
import "./App.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Pages />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
