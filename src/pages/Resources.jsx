import { useState } from "react";
import ResourceForm from "../components/ResourceForm"
import ResourceDownload from "../components/ResourceDownload";

export default function Resources() {

    const [showForm, setShowForm] = useState(true)

    function getDetails(item) {
        console.log(item);
        setShowForm(prevVal => !prevVal)
    }

    return (
        <div className="resources">
            
            <div className="card">
                <div className="card-header">
                    <h1>Resources</h1>
                </div>
                <div className="card-body">
                    <p>Download our latest eBook - "Change is Inveitable, Growth is Optional"</p>
            
                    {showForm ? <ResourceForm getDetails={getDetails} /> : <ResourceDownload />}
                </div>
                <div className="card-footer"></div>
            </div>
            

        </div>
    )
}