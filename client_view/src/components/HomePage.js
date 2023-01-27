
import Header from './Header';

function HomePage(props) {
    return (
        <div className="HomePage">
            <Header title={props.title} />
            <div className="centered">
                <a className="btn" href="/addstudent">Add New Student Profile</a><br />
                <a className="btn" href="/studentprofile">Show Student Profiles</a><br />
                <a className="btn" href="/updatestudent">Update Student Profile</a><br />
                <a className="btn" href="/deletestudent">Delete Student Profile</a><br />
            </div>
        </div>
    );
}

export default HomePage;