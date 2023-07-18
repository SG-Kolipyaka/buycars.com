
import { Route,Routes } from 'react-router-dom'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import OemSpec from '../Components/OemSpec'
import AddCars from '../Components/AddCars'
import Cars from '../Components/Cars'



const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<OemSpec/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cars' element={<Cars/>}/>
            <Route path='/addcars' element={<AddCars/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes