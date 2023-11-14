import { AuthContextProvider } from "./context/AuthContext";
import { NewsContextProvider } from "./context/NewsContext";
import MyRoutes from "./routers/routes";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <NewsContextProvider>
          <MyRoutes />
        </NewsContextProvider>
      </AuthContextProvider>
    </>
  );
}
