export default function Info() {
    return (
        <div className="info--container">
            <img src="headshot-1.png" className="info--headshot"></img>
            <h1>Juan Martinez</h1>
            <h3>Frontend Developer</h3>
            <a href="jcarlosmartinez.me" ><p>jcarlosmartinez.me</p></a>
            <div className="info--buttons-box">
                <button className="info--email-button">
                    <img src="mail-logo.png" className="info--email-logo"></img>
                    Email
                </button>
                <button className="info--linkedin-button">
                <img src="linkedin-logo.png" className="info--linkedin-logo"></img>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}