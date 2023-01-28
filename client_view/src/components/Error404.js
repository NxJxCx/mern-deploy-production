import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

function Error404() {
  const variablepicture = "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
  useEffect(() => {
    document.body.style = "background-image: url('" + variablepicture + "'); background-repeat: no-repeat; background-position: center; background-size: cover;";
  }, []);
  return (
    <div className="box">
      <div className="box-container">

        <div className="row header">
          <Header title="MERN Stack" path="/"/>
        </div>
        
        <div className="row content bg-dark">

          <div className="h1">
            <h1 className="text-center m-2 text-light">ERROR 404 NOT FOUND!</h1>
          </div>

        </div>

        <div className="row footer bg-light">
            <Footer />
        </div>
      </div>
    </div>
  )
}

export default Error404;