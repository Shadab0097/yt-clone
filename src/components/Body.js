
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
      <Outlet />
      <Sidebar />
    
    </div>
  )
}

export default Body