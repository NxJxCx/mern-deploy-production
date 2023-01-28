
import Header from './Header';
import Footer from './Footer';

function HomePage(props) {
  return (
    <div className="box">
      <div className="box-container">

        <div className="row header">
          <Header title={props.title} path="/"/>
        </div>
        
        <div className="row content bg-dark">
        
          <div className="h1">
            <h1 className="text-center m-2 text-light">&ldquo; A Simple Student Profile CRUD System &rdquo;</h1>
          </div>

          <div className="text-center">
            <a className="btn border-5 border-light bg-light m-2" href="/addstudent">Add New Student Profile</a>
          </div>

          <div className="text-center">
            <a className="btn border-5 border-light bg-light m-2" href="/displaystudents">Show Student Profiles</a>
          </div>

          <div className="text-center">
            <a className="btn border-5 border-dark bg-secondary m-2" href="#">Update Student Profile</a>
          </div>

          <div className="text-center">
            <a className="btn border-5 border-dark bg-secondary m-2" href="#">Delete Student Profile</a>
          </div>
        </div>

        <div className="row footer bg-light">
            <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;