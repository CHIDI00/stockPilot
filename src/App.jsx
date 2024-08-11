import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { ReactQueryDevTools } from "@tanstack/react-query-devtools";

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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate replace to="dashboard" />} />
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="inventory" element={<Inventory />} />
						<Route path="reports" element={<Reports />} />
						<Route path="suppliers" element={<Suppliers />} />
						<Route path="orders" element={<Orders />} />
						<Route path="manageStore" element={<ManageStore />} />
						<Route path="user" element={<Users />} />
						<Route path="account" element={<Account />} />
						<Route path="settings" element={<Settings />} />
					</Route>

					<Route path="login" element={<Login />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>

			<Toaster
				position="top-center"
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptions={{
					success: {
						duration: 3000,
					},
					error: {
						duration: 5000,
					},
					style: {
						fontSize: "16px",
						maxWidth: "500px",
						padding: "16px 24px",
						backgroundColor: "var(--color-gray-0)",
						color: "var(--color-gray-700)",
					},
				}}
			/>
		</QueryClientProvider>
	);
}

export default App;