import { Route, Routes } from "react-router"
import LandingScreen from "./pages/LandingScreen"
import LoginScreen from "./pages/LoginScreen"
import ProfileScreen from "./pages/ProfileScreen"
import SignupScreen from "./pages/SignupScreen"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </>
  )
}

export default App
