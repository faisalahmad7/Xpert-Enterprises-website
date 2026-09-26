import { RouterProvider, useRouter, matchPath } from "./router.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import WhatsAppButton from "./components/WhatsAppButton.jsx"
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ProductsPage from "./pages/ProductsPage.jsx"
import ProductDetailPage from "./pages/ProductDetailPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"

// Add a page here and it's live -- no other wiring needed.
const routes = [
  { pattern: "/", Component: HomePage },
  { pattern: "/about", Component: AboutPage },
  { pattern: "/products", Component: ProductsPage },
  { pattern: "/products/:slug", Component: ProductDetailPage },
  { pattern: "/contact", Component: ContactPage },
]

function CurrentPage() {
  const { path } = useRouter()
  for (const route of routes) {
    const params = matchPath(route.pattern, path)
    if (params) {
      const { Component } = route
      return <Component params={params} />
    }
  }
  return <NotFoundPage />
}

function AppShell() {
  return (
    <>
      <Navbar />
      <main>
        <CurrentPage />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <AppShell />
    </RouterProvider>
  )
}
