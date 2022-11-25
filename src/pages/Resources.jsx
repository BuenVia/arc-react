import { useEffect, useState } from "react";
import ResourceForm from "../components/ResourceForm"
import ResourceDownload from "../components/ResourceDownload";
import axios from "axios";

export default function Resources() {

    const [showForm, setShowForm] = useState(true)

    useEffect(() => {
    }, [])

    function getDetails(item) {

        axios
        .post('https://arcsupportservices-api.onrender.com/api/resource', item)
        .then(response =>{
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        })
        .catch(err => console.log(err))


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