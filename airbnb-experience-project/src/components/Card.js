export default function Card() {
    return (
        <div className="card">
            <img src="katie-zaferes.png" className="card--image"/>
            <div className="card--stats">
                <img src="star.png" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) </span>
                <span className="gray">USA</span>
            </div>
            <p className="hero--text">Life Lessons with Katie Zaferes</p>
            <p className="hero--text"><span className="bold">From $136</span> / person</p>
        </div>
    )
}