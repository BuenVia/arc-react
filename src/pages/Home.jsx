import Webinar from "../components/Webinar";

export default function Home() {

  

    return (
      <div className="index mb-3">
        <div className="row index-header">
          <div className="card">
            <h2 className="index-header-title">WE BELIEVE IN CHALLENGING THE STATUS QUO!</h2>
            <p className="index-header-text">A manager will accept, but the leader will challenge...</p>
          </div>
        </div>

        <div className="row index-body">
          <div className="col-md-6 mt-3">
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
          <div className="col-md-6 mt-3">
            <Webinar />
          </div>
        </div>

      </div>
    );
  };