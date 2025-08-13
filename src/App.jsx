import Home from './pages/home'
import Products from './pages/products'
import About from './pages/about'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import NotFound from "./components/NotFound.jsx";
import JobsLayout from "./layout/JobsLayout.jsx";
import Jobs from "./pages/Jobs.jsx";
import JobDetails from "./pages/JobDetails.jsx";


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />

        <Route path='contact' element= {<ContactLayout />} >
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>

        <Route path='jobs' element={<JobsLayout />} >
            <Route index element={<Jobs />} />
            <Route path=':id' element={<JobDetails />} />
        </Route>

        <Route path='*' element={<NotFound />} />

      </Route>
    )
  )
  
  return (
    
    <RouterProvider router={router} />

  )
}

export default App
