export default function Footer() {
    
    const date = new Date().getFullYear()
    
    return (
        <footer className="footer">
            <p className="text-muted">Copyright ARC Support Services {date}</p>
            <p>Website by <a href="https://mjclifford.com" target="__blank" className="link-text">mjclifford.com</a></p>
        </footer>
    )
}