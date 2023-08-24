import MyRoutes from "./routers/routes";
import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <MyRoutes />
      </AuthContextProvider>
    </>
  );
}
