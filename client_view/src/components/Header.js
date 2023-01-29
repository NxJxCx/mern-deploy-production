import './Header.css';

function Header(props) {

  var isActiveNavLink = (path) => {
    if (props.path === path) {
      return "nav-link active";
    }
    return "nav-link";
  }

  return (
    <header className="navbar-top bg-light header">
        <nav className="navbar navbar-light">
          <div className="navbar-brand">
            <a href="/">
              <img src="/img/logo.png" alt="smcc logo" className="header-logo"/>
            </a>
            {/* Insert title here */}
            <a href="/" className="navbar-brand">{props.title}</a>
          </div>

          <button type="button" className="navbar-toggler m-2" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="sidebar-menu navbar-nav flex-column text-center">

              {/* Home Page Link */}
              <li className="nav-item">
                <span className="badge badge-danger pill"></span>
                <a className={isActiveNavLink("/")} href="/">
                <span className="nav-text">Home</span>
                </a>
              </li>

              {/* Create Student Profile Link */}
              <li className="nav-item" >
                <span className="badge badge-danger pill"></span>
                <a className={isActiveNavLink("/addstudent")} href="/addstudent">
                <span className="nav-text">Add Student Profile</span>
                </a>
              </li>

              {/* Retrieve Student Profile Link */}
              <li className="nav-item" >
                <span className="badge badge-danger pill"></span>
                <a className={isActiveNavLink("/displaystudents")} href="/displaystudents">
                <span className="nav-text">Display All Profile</span>
                </a>
              </li>

            </ul>
          </div>
        </nav>
    </header>
  )
}

export default Header;