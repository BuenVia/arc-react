import { useState } from "react"

export default function ServiceContainer(props) {
    
    const [subService, setSubService] = useState({})

    console.log(subService)
    
    return (
        <div className="card">
            <div className="card-header">
                <h1>{props.service.title}</h1>
            </div>
            <div className="card-body">
                <h4>{props.service.subTitle}</h4>
                <p>{props.service.content}</p>
                <div>
                    <div className="btn-box">
                        {props.service.subContent &&  props.service.subContent.map((subContent) => {
                            return (
                                    <button key={props.service.subContent.indexOf(subContent)} className="btn btn-content" onClick={() => setSubService(subContent)}>
                                        {subContent.title}
                                    </button>
                        )}
                        )}
                    </div>
                </div>
                <div>
                    {subService && <div className="card">
                        <div className="card-header">
                            <h1>{subService.title}</h1>
                        </div>
                        <div className="card-body">
                            <h4>{subService.subTitle}</h4>
                            <p>{subService.content}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-link">Contact Us</button>
                        </div>
                    </div>}
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-link" onClick={() => props.resetServices()}>Back</button>
            </div>
        </div>
    )
}