const Home = () => {
    return (
      <div className="index">
        <div className="row index-header">
          <div className="card">
            <h2 className="index-header-title">WE BELIEVE IN CHALLENGING THE STATUS QUO!</h2>
            <p className="index-header-text">A manager accepts, the leader challenges...</p>
          </div>
        </div>

        <div className="row index-body">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Contact</h4>
              </div>
              <div className="card-body">
                <p><span className="card-bold">Tel:</span> 07956 202 722</p>
                <p><span className="card-bold">Office:</span> 01472 840120</p>
                <p><span className="card-bold">Email:</span> James@arcsupportservices.co.uk</p>
              </div>
              <div className="card-footer">
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Webinar</h4>
              </div>
                <div className="card-body">
                  <p><span className="card-bold">Title:</span></p>
                  <p><span className="card-bold">Date:</span></p>
                  <p><span className="card-bold">Time:</span></p>
                </div>
                <div className="card-footer">
                  <a href="/" className="btn btn-link">Sign-Up</a>
                </div>
              </div>
          </div>
        </div>

      </div>
    );
  };
  
  export default Home;