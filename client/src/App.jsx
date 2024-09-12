import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LayoutWrapper from "./wrappers/LayoutWrapper"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import AuthWrapper from "./wrappers/AuthWrapper"
import ProfilePage from "./pages/ProfilePage"
import CreatePostPage from "./pages/CreatePostPage"
import AdminWrapper from "./wrappers/AdminWrapper"
import AdminDashboardPage from "./pages/AdminDashboardPage"
import ManageUsersPage from "./pages/ManageUsersPage"
import ManagePostsPage from "./pages/ManagePostsPage"

const router = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        element: <AuthWrapper />,
        children: [
          {
            path: "/profile",
            element: <ProfilePage />
          },
          {
            path: "/createPost",
            element: <CreatePostPage />
          }
        ]
      },
      {
        element: <AdminWrapper />,
        children: [
          {
            path: "/admin/dashboard",
            element: <AdminDashboardPage />
          },
          {
            path: "/admin/users",
            element: <ManageUsersPage />
          },
          {
            path: "/admin/posts",
            element: <ManagePostsPage />
          }
        ]
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App