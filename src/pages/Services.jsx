import services from "../services"

export default function Services() {
    return (
      <div>
        <h1>Services</h1>

        <div className="row">
        {services.map((service) => {
          return (

              <div className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-header">
                    <h4>{service.title}</h4>
                  </div>
                  <div className="card-body">
                    Click
                  </div>
                  <div className="card-footer">
                    Footer
                  </div>
                </div>
              </div>
          )
        })}
            </div>
      </div>
    )
  };
  