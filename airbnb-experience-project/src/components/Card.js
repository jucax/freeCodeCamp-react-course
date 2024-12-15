export default function Card({card}) {
    // If we need to combine a prop with other html, we can use {` ${}`} the back ticks as we do in vanila JS
    // We can just use JS principles to make functions like conditional rendering
    let badgeText;
    if (card.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (card.location === "Online") {
        badgeText = "ONLINE";
    }

    // When we pass all the object as the prop, then we need to diretly reference it as card
    // Then we can insert each of the props to the component and iterate with the data
    
    return (
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}  
            <img src = {card.coverImg} className = "card--image"/>
            <div className="card--stats">
                <img src="star.png" className="card--star"/>
                <span>{card.stats.rating}</span>
                <span className="gray">({card.stats.reviewCount}) </span>
                <span className="gray">{card.location}</span>
            </div>
            <p className="hero--text">{card.title}</p>
            <p className="hero--text"><span className="bold">From ${card.price}</span> / person</p>
        </div>
    )
}