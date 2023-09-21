import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
      <div className="navbar   bg-base-100 shadow-xl">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost normal-case text-xl another-font">Task Manager</Link>
        </div>
        <div className="flex-none mr-10">
          <div>
            <Link className='text-lg another-font mr-5' to={'/views'}>Views</Link>
            <Link className='text-lg another-font mr-5' to={'/automate'}>Automate</Link>
            <Link className='text-lg another-font mr-5' to={'/taskDashboard'}>Make Task</Link>
            <Link className='bg-info p-5 another-font text-lg text-white' to={'/signUp'}>Get Task Manager for Free</Link>
          </div>

          {/* {
      user? 
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> 
    : 
    'Login'
    } */}

          <Link className='another-font mx-4 text-lg' to={'/login'}>Login</Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar