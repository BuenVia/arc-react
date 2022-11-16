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
                <p>Tel: 07956 202 722</p>
                <p>Office: 01472 840120</p>
                <p>Email: James@arcsupportservices.co.uk</p>
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
                  <p>Title:</p>
                  <p>Date:</p>
                  <p>Time</p>
                </div>
                <div className="card-footer">
                  <a href="" class="btn btn-link">Sign-Up</a>
                </div>
              </div>
          </div>
        </div>

      </div>
    );
  };
  
  export default Home;