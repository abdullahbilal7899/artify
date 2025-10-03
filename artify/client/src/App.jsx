import React from 'react'
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import {logo} from './assets'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import CreatePost from './pages/CreatePost'


const App = () => {
  return (
   <BrowserRouter>
   <header className='w-full flex justify-between items-center bg-white 
   sm:px-8 px-4 py-4 border-b border-b-[e6ebf4]'>
<Link to='/' className="flex-shrink-0">
<img src={logo} alt="logo" className='w-auto max-w-[100px] sm:max-w-[200px] object-contain' />
{/* <h1 className='text-3xl text-blue-600 font-size:32 font-poppins'>A R T I F Y</h1> */}
</Link>

<Link to='/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
Create
</Link>
   </header>

   <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/create' element={<CreatePost/>}/>
</Routes>
   </main>
   <ToastContainer/>
   </BrowserRouter>
  )
}

export default App
