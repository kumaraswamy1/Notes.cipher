import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataProvider } from "./context/Data.provider";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<DataProvider>
					<App />
				</DataProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
