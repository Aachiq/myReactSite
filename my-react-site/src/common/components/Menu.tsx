import '../style/Menu.css';

export default function Menu() {
  return (
   <div className='bg-black'>
     <div className="container-fluid">
      <ul className="nav bg-black d-flex justify-content-between">
          <div className="d-flex align-items-center">
          <li className="nav-item">
              <a className="nav-link link-item" aria-current="page" href="#">
                  <img src="logo.png" width="50" height="50" alt=""/>
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link link-item text text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
              <a className="nav-link link-item text text-white" href="#">Services</a>
          </li>
          <li className="nav-item">
              <a className="nav-link link-item text text-white" href="#">Contact</a>
          </li>
          {/* <li className="nav-item dropdown">
              <a className="nav-link link-item dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Register</a></li>
                <li><a className="dropdown-item" href="#">Login</a></li>
              </ul>
          </li> */}
          </div>
          <div className="d-flex align-items-center">
          <div className="nav-item dropdown">
              <a className="nav-link link-item dropdown-toggle text text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Register</a></li>
                <li><a className="dropdown-item" href="#">Login</a></li>
              </ul>
          </div>
          </div>
      </ul>
    </div>
   </div>
  )
}
