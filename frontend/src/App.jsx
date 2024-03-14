import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import github from "./assets/github.png"

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='p-4 h-screen flex items-center justify-center gap-6'>
			<a href="https://github.com/vaibhav797/mern-chattify"><img src={github} className="h-8 w-8 cursor-pointer rounded-sm" alt="github" /></a>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
