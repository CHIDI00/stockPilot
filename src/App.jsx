import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { ReactQueryDevTools } from "@tanstack/react-query-devtools";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeContext";

import GlobalStyles from "./styles/GlobalStyle";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import Suppliers from "./pages/Suppliers";
import Orders from "./pages/Orders";
import ManageStore from "./pages/ManageStore";
import Users from "./pages/Users";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Product from "./pages/Product";
import ProtectedRoute from "./ui/ProtectedRoute";
import Signup from "./pages/Signup";
import ChangePassword from "./settings/ChangePassword";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
		},
	},
});

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<DarkModeProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<GlobalStyles />
				<BrowserRouter>
					<Routes>
						<Route
							element={
								<ProtectedRoute>
									<AppLayout />
								</ProtectedRoute>
							}
						>
							<Route index element={<Navigate replace to="dashboard" />} />
							<Route path="dashboard" element={<Dashboard />} />
							<Route path="inventories" element={<Inventory />} />
							<Route path="inventories/:productId" element={<Product />} />
							<Route path="reports" element={<Reports />} />
							<Route path="suppliers" element={<Suppliers />} />
							<Route path="orders" element={<Orders />} />
							<Route path="manageStore" element={<ManageStore />} />
							<Route path="user" element={<Users />} />
							<Route path="account" element={<Account />} />
							<Route path="settings" element={<Settings />} />
							<Route
								path="settings/update_password"
								element={<ChangePassword />}
							/>
							<Route path="account" element={<Account />} />
						</Route>

						<Route path="login" element={<Login />} />
						<Route path="signup" element={<Signup />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>

				<Toaster
					position="top-center"
					gutter={12}
					containerStyle={{ margin: "8px" }}
					toastOptions={{
						success: {
							duration: 5000,
						},
						error: {
							duration: 5000,
						},
						style: {
							fontSize: "14px",
							maxWidth: "400px",
							padding: "10px 20px",
							backgroundColor: "var(--color-grey-200)",
							color: "var(--color-gray-700)",
						},
					}}
				/>
			</QueryClientProvider>
		</DarkModeProvider>
	);
}

export default App;
