import Home from "./pages/home/Home";
import AuthContextProvider from "./contexts/AuthContext";
export default function App() {
  return (
    <AuthContextProvider>
      <Home/>
    </AuthContextProvider>
  )
}