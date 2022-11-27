import axios from "axios"
import { useEffect, useState } from "react"
import LoadingSpinner from "./LoadingSpinner"

export default function Webinar() {

  const [loading, setLoading] = useState(false)
  const [webinar, setWebinar] = useState({
    title: 'Webinar Title',
    date: '',
    time: '',
    link: '',
    show: null
  })

  const loadWebinar = () => {
    axios
    .get('https://arcsupportservices-api.onrender.com/api/webinar')
    .then(res => setWebinar(res.data[0]))
    .catch(err => console.error(err))
    setLoading(true)
  }

  useEffect(() => {
   loadWebinar()
  }, [])

  // HTML for showiing webinar
  const webinarHtml = (
    <div>
      <p><span className="card-bold">Title:</span> {webinar.title}</p>
      <p><span className="card-bold">Date:</span> {new Date(webinar.date).toDateString()}</p>
      <p><span className="card-bold">Time:</span> {webinar.time}</p>
    </div>
  )

  // HTML for not showing webinar
  const noWebinar = (
    <div>
      <p>No webinar's planned</p>
      <p>Please check back later</p>
    </div>
  )

  // If webinar.show is false - show noWebinar
  const showWebinar = webinar.show ? webinarHtml : noWebinar

    return (
        <div className="card">
        <div className="card-header">
          <h4>Webinar</h4>
        </div>
          <div className="card-body">
          {loading ? showWebinar : <LoadingSpinner /> }
          </div>
          <div className="card-footer">
            {webinar && <a href={webinar.link} target="__blank" className="btn btn-link">Sign-Up</a>}
          </div>
        </div>
    )
}