export default function Card({img, rating, reviewCount, location, title, price, openSpots}) {
    // If we need to combine a prop with other html, we can use {` ${}`} the back ticks as we do in vanila JS
    // We can just use JS principles to make functions like conditional rendering
    let badgeText;
    if (openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}  
            <img src = {img} className = "card--image"/>
            <div className="card--stats">
                <img src="star.png" className="card--star"/>
                <span>{rating}</span>
                <span className="gray">({reviewCount}) </span>
                <span className="gray">{location}</span>
            </div>
            <p className="hero--text">{title}</p>
            <p className="hero--text"><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}