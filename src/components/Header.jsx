export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><img class="logo-img" src="./assets/new_arc_logo.png" alt=""></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" href="/">Home</a>
                <a class="nav-link" href="/services">Services</a>
                <a class="nav-link" href="/resources">Resources</a>
                <a class="nav-link" href="/admin" target="_blank">Admin</a>
            </div>
          </div>
        </div>
      </nav>
    )
}