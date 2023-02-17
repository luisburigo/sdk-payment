import useAuthStore from "@/modules/auth/store";
import {Login} from "@/modules/auth/pages/login";

function App() {
  const {token} = useAuthStore();

  if (!token) {
    return <Login />
  }

  return (
    <div>asd</div>
  )
}

export default App
