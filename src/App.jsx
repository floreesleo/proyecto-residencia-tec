import { AuthContextProvider } from "./context/AuthContext";
import { NewsContextProvider } from "./context/NewsContext";
import { ArqContextProvider } from "./context/ArqContext";
import MyRoutes from "./routers/routes";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <NewsContextProvider>
          <ArqContextProvider>
            <MyRoutes />
          </ArqContextProvider>
        </NewsContextProvider>
      </AuthContextProvider>
    </>
  );
}
