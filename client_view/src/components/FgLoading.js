
function FgLoading(props) {
  return (
    <div className="modal" id="submitLoading" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="submitLoadingLabel" aria-hidden="true">
      <div className="modal-dialog" style={{position: 'fixed', top: '48%', left: '48%', transform: 'transform(-50%, -50%)'}}>
        <div className="modal-content">
          <div className="modal-body">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
              <button className="btn hide" data-bs-dismiss="modal" ref={props.refer}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FgLoading;