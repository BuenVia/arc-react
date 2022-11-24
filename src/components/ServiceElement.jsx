export default function ServiceElement(props) {

    function handleClick() {
        props.serviceHandler(props.service)
    }

    return (
        <div className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-header">
                    <h4>{props.service.title}</h4>
                  </div>
                  <div className="card-body">
                    <button 
                        className="btn btn-link" 
                        onClick={handleClick}
                    >Read More</button>
                  </div>
                  <div className="card-footer">
                  </div>
                </div>
              </div>
    )
}