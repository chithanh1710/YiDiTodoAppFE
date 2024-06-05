import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { Upcoming } from "./pages/Upcoming";
import { Today } from "./pages/Today";
import { Calendar } from "./pages/Calendar";
import { StickyWall } from "./pages/StickyWall";
import { ListId } from "./pages/ListId";
import { Toaster } from "react-hot-toast";
import { TodoProvider } from "./context/contextApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="upcoming" />,
      },
      {
        path: "upcoming",
        element: <Upcoming />,
      },
      {
        path: "today",
        element: <Today />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "sticky-wall",
        element: <StickyWall />,
      },
      {
        path: "list/:id",
        element: <ListId />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </TodoProvider>
    </QueryClientProvider>
  );
}
