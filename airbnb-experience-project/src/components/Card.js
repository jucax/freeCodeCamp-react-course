export default function Card({img, rating, reviewCount, country, title, price}) {
    // If we need to combine a prop with other html, we can use {` ${}`} the back ticks as we do in vanila JS
    return (
        <div className="card">
            <img src = {img} className = "card--image"/>
            <div className="card--stats">
                <img src="star.png" className="card--star"/>
                <span>{rating}</span>
                <span className="gray">({reviewCount}) </span>
                <span className="gray">{country}</span>
            </div>
            <p className="hero--text">{title}</p>
            <p className="hero--text"><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}