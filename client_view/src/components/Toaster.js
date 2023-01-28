import { useRef, useEffect } from 'react';

function Toaster(pdata) {
  const myref = useRef(null);
  var ref = !pdata.ref ? myref : pdata.ref;
  useEffect(() => {
    if (ref) {
      ref.current.classList.add("show");
      ref.current.classList.remove("hide");
    }
    setTimeout(() => {
      ref.current.classList.remove("show");
      ref.current.classList.add("hide");
    }, 3000);
  });
  return (
    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" id={pdata.id} ref={ref}>
      <div className="toast-header bg-success text-light">
        <strong className="me-auto">{pdata.title}</strong>
        <small className="text-muted">{pdata.timestr}</small>
        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div className="toast-body">
        {pdata.message}
      </div>
    </div>
  )
}

export default Toaster;