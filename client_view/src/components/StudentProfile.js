import Header from './Header';
import Footer from './Footer';
import Error404 from './Error404';
import { useParams } from 'react-router-dom';

function StudentProfile(props) {
  const { id } = useParams();
  if (id) {
    return (
      <div className="box">
        <div className="box-container">
          <div className="row header">
            <Header title={props.title} path="/"/>
          </div>
          <div className="row content bg-dark">
            <div className="content">
              <div className="h1">
                <h1 className="text-center m-2 text-light">Student Profile</h1>
              </div>

              <div className="text-center">
                <a className="btn border-5 border-light bg-light m-2" href="/addstudent">{id}</a>
              </div>
            </div>
          </div>
          <div className="row footer bg-light">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
  return <Error404 />;
}

export default StudentProfile;