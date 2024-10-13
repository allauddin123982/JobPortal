import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AppLayout  from './layouts/app-layout' ;
import LandingPage  from './Pages/landingpage' ;
import OnBoarding  from './Pages/onboarding' ;
import { ThemeProvider } from './components/ui/theme-provider';
import './app.css'
import Jobs from './Pages/jobs';
import Postjob from './Pages/post-job';


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: '/onboarding',
        element: <OnBoarding/>
      },
      {
        path: '/jobs',
        element: <Jobs/>
      },
      {
        path: '/post-job',
        element: <Postjob/>
      }
    ]
  }
])

const App = () => {

  return ( 
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
  </ThemeProvider>
  )
}

export default App
