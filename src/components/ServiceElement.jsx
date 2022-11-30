export default function ServiceElement(props) {

    function handleClick() {
        props.serviceHandler(props.service)
    }

    return (
        <div className="mb-5 p-5">
                <div className="card">
                  <div className="card-header">
                    <h4>{props.service.title}</h4>
                  </div>
                  <div className="card-body">
                    <h6>
                      {props.service.subTitle}
                    </h6>
                    <p>
                      {props.service.content}
                    </p>
                  </div>
                  <div className="card-footer">
                  <button 
                        className="btn btn-link" 
                        onClick={handleClick}
                    >Read More</button>
                  </div>
                </div>
              </div>
    )
}