import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componentes/Home/Home.jsx'
import About from './componentes/About/About.jsx'
import Contact from './componentes/Contactus/Contactus.jsx'
import User from './componentes/User/User.jsx'
import Github, { gitLoaderInfo } from './componentes/Github/Github.jsx'
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },{
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contactus",
//         element:<Contact/>
//       }
//     ]
//   }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
   <Route path='' element={<Home/>} />
   <Route path='/about' element={<About/>}/>
   <Route path='/contactus' element={<Contact/>}/>
   <Route path='user/:userid' element={<User />} />
   <Route loader={gitLoaderInfo}
   path='Github' element={<Github />} />
   
   </Route>
   
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
