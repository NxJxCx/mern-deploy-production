import Header from "./Header";
import axios from 'axios';
import { useState } from 'react';

function DisplayMessage(props) {
    if (props.error) {
        return (
            <h2>INSERT FAILED!</h2>
        )
    } else if (props.success) {
        return (
            <h2>INSERT SUCCESS</h2>
        )
    }
    return (
        <div>
        </div>
    )
}

function AddStudent() {
    const [displayMessage, setDisplayMessage] = useState({
        error: false,
        success: false
    });
    const onSubmitClick = function(e) {
        e.preventDefault();
        var data = {};
        Array.from({ length: e.target.length }).map((it, i) => {
            if (e.target[i].name)
                data[e.target[i].name] = e.target[i].value;
            return null;
        });
        axios.post("http://localhost:4000/studentprofiles", data)
            .then(res => {
                setDisplayMessage({success: true});
                console.log(`Successfully posted! `)
                console.log(res.data);
            })
            .catch(err => {
                setDisplayMessage({error: true})
                console.log(err);
            })
    }
    return (
        <div className="AddStudent">
            <Header title="Add New Student Profile"/>
            <form noValidate onSubmit={onSubmitClick} className="add-form">
                <div className="form-body">
                    <label htmlFor="firstname">Input First Name: </label>
                    <input type="text" name="firstname" />
                </div>
                <div className="form-body">
                    <label htmlFor="lastname">Input Last Name: </label>
                    <input type="text" name="lastname" />
                </div>
                <div className="form-body">
                    <label htmlFor="course">Input Course: </label>
                    <input type="text" name="course" />
                    <label htmlFor="year">Year: </label>
                    <select name="year">
                        <option value="1">I</option>
                        <option value="2">II</option>
                        <option value="3">III</option>
                        <option value="4">IV</option>
                    </select>
                </div>
                <div className="form-body">
                    <button type="submit" className="btn">Add New Profile</button>
                </div>
            </form>
            <div id="SuccessMessage">
                <DisplayMessage error={displayMessage.error} success={displayMessage.success} />
            </div>
        </div>
    );
}

export default AddStudent;