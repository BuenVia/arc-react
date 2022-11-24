import { useState } from "react"
import ServiceElement from "../components/ServiceElement"
import ServiceContainer from "../components/ServiceContainer"
import services from "../services"

export default function Services() {

  const [allServices, setAllServices] = useState(false)
  const [selectedService, setSelectedService] = useState({})



  function serviceHandler(item) {
    setAllServices(prevVal => !prevVal)
    setSelectedService(item)
  }

  function resetServices() {
    setAllServices(false)
    setSelectedService({})
  }

    return (
      <div>
        <h1>Services</h1>
        <div className="row">
          {allServices ? <ServiceContainer service={selectedService} resetServices={resetServices} /> : services.map((service) => {
            return (
              <ServiceElement key={services.indexOf(service)} service={service} serviceHandler={serviceHandler} />
            )
          })}
        </div>
      </div>
    )
  };
  