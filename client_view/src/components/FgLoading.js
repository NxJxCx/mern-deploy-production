
import { useState, useEffect, useRef } from 'react';

function FgLoading(props) {
  const [showModal, setShowModal] = useState(false);
  const openRef = useRef(null);
  useEffect(() => {
    if (openRef.current && !openRef.current.dataset.isopen && props.isOpen) {
      openRef.current.click();
      openRef.current.dataset.isopen = true;
    } 
  }, [showModal, setShowModal, openRef]);
  
  return (
    <div className="modal" id="submitLoading" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="submitLoadingLabel" aria-hidden="true">
      <div className="modal-dialog" style={{position: 'fixed', top: '48%', left: '48%', transform: 'transform(-50%, -50%)'}}>
        <div className="modal-content">
          <div className="modal-body">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
              <button className="btn hide" style={{width: '0.1px', height: '0.1px', position: 'fixed', 'left': -100, 'top': -100}} data-bs-dismiss="modal" data-bs-target="#submitLoading" ref={props.refer}></button>
              <button className="btn hide" style={{width: '0.1px', height: '0.1px', position: 'fixed', 'left': -100, 'top': -100}} data-bs-toggle="modal" data-bs-target="#submitLoading" ref={openRef}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FgLoading;