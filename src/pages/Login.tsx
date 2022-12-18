import { NavLink } from "react-router-dom";

import { default as logo } from "../logo.svg";
import { Password } from "../components/Authentication/Password";
import { Username } from "../components/Authentication/Username";
import { useLogin } from "../context/AuthProvider";

export function Login() {
	const {
		loginWithCredentials,
		authState: { username, password },

		authDispatch,
	} = useLogin();

	const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		loginWithCredentials(username, password);
	};

	return (
		<div className="flex items-center justify-center mx-auto m-10 px-6 py-12  lg:px-8 border border-gray-800 rounded-t-xl">
			<div className="w-full max-w-md space-y-8">
				<div className="text-center items-center m-1">
					<img src={logo} alt=" Logo" className="mx-auto" />
					<h2 className="mt-6 pb-4 text-center text-3xl font-bold tracking-tight text-white">
						Sign in to your account
					</h2>
					<p className="  text-base text-white">
						Or Don't have an account?
						<span className="text-indigo-600">
							<NavLink to="/signup"> Sign up! </NavLink>
						</span>
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={loginHandler}>
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="-space-y-px rounded-md shadow-sm">
						<Username username={username} userDispatch={authDispatch} />
						<Password password={password} userDispatch={authDispatch} />
					</div>

					<div>
						<button className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
							Sign in
						</button>
					</div>
				</form>

				<button
					className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					onClick={() => {
						authDispatch({ type: "SET_USERNAME", payload: "test" });
						authDispatch({ type: "SET_PASSWORD", payload: "test123#A" });
					}}
				>
					Use Guest Credentials
				</button>
			</div>
		</div>
	);
}
