import axios from "axios";

function ConfirmDeleteModal(props) {
  const selectedID = props.data.id;
  
  const onClickDelete = () => {
    if (selectedID) {
      const hostname = '/api/studentprofiles/';
      axios.delete(hostname + selectedID)
      .then(() => {
        props.toast("Delete", "Deleted Successfully");
        props.setSelected({index: null, id: null, firstname: null, lastname: null, course: null, year: null});
      })
      .catch(() => {
        props.toast("Delete", "Failed To Delete Student Profile!");
      });
    }
  }

  return (
    <div className="modal fade" id="confirmDelete" tabIndex="-1" aria-labelledby="confirmDeleteLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="confirmDeleteLabel">Delete Student Profile</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-wrap text-danger">
            Do you really want to delete student profile?<br />
            <div className="bg-light p-3">
            <span className="bd-highlight inline-block text-success" >Profile #{props.data.index}<br />Name: {props.data.firstname + " " + props.data.lastname}<br />
            Course/Yr: {props.data.course + " - " + props.data.year}</span>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={onClickDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDeleteModal;