import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import PDFUploader from "./components/PDFUploader";

export default function App() {
  const { user } = useAuth();
  return user ? <PDFUploader /> : <Login />;
}
