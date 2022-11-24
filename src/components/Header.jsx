export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><img className="logo-img" src="./assets/new_arc_logo.png" alt=""></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/services">Services</a>
                <a className="nav-link" href="/resources">Resources</a>
            </div>
          </div>
        </div>
      </nav>
    )
}