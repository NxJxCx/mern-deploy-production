import './Header.css';
function Header(props) {
    return (
        <div className="row">
            <div className="col-2">
                <nav class="nav flex-column">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    <a class="nav-link" href="/addstudent">Add Student Profile</a>
                    <a class="nav-link" href="/displaystudents">Display All Profile</a>
                </nav>
            </div>
            <div className="col-10">
                <div className="header_section">
                    <div className="row">
                        <div className="col-10 text-center">
                            <h1>{props.title}</h1>
                        </div>
                        <div className="col-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/Smcc_logo.gif"  alt="smcc logo" className="header-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;