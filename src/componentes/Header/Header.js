import "./Header.css"

function Header() {
    return <header className="header">
        <img src="/img/LogoMain.png" alt="LogoMain" />
        
        <nav>
            <button>Home</button>
            <button >Register New Video</button>
        </nav>
    </header>
}

export default Header