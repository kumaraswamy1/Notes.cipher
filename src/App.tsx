import { Route, Routes } from "react-router-dom";

import { Sidebar } from "./components/Navbar/Sidebar";
import { useLogin } from "./context/AuthProvider";
import { useData } from "./context/Data.provider";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

import { useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { PrivateRoute } from "./privateRoutes/PrivateRoute";
import { Notes } from "./pages/Notes";
import { PinnedNotes } from "./pages/PinnedNotes";
import { NavbarBottom } from "./components/Navbar/NavbarBottom";
import { getNotes } from "./services/scores/scores";
function App() {
	const {
		authState: { token },
	} = useLogin();
	const { dataDispatch } = useData();
	useEffect(() => {
		getNotes({ dataDispatch });
	}, [token, dataDispatch]);
	return (
		<div className="bg-slate-900 min-h-screen pb-7">
			<Navbar />
			<div className=" flex flex-row">
				<Sidebar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/notes"
						element={<PrivateRoute>{<Notes />}</PrivateRoute>}
					/>
					<Route
						path="/pinnedNotes"
						element={<PrivateRoute>{<PinnedNotes />}</PrivateRoute>}
					/>
				</Routes>
			</div>
			<NavbarBottom />
		</div>
	);
}

export default App;
