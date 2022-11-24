export default function Webinar() {

    const webinar = {
        title: 'Webinar Title',
        date: new Date(),
        time: '12:30'
    }

    return (
        <div className="card">
        <div className="card-header">
          <h4>Webinar</h4>
        </div>
          <div className="card-body">
            <p><span className="card-bold">Title:</span> {webinar.title}</p>
            <p><span className="card-bold">Date:</span> {webinar.date.toDateString()}</p>
            <p><span className="card-bold">Time:</span> {webinar.time}</p>
          </div>
          <div className="card-footer">
            {webinar && <a href="https://formsite.com" target="__blank" className="btn btn-link">Sign-Up</a>}
          </div>
        </div>
    )
}