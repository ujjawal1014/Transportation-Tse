import "./Traffic_Rules_Card.css";

export default function Traffic_Rules_Card({ image, name }) {
    return (
        <div className="traffic-rules-card">
            <div className="traffic-card-image-wrapper">
                <img src={image} alt={name} className="traffic-card-image" />
            </div>
            <h2 className="traffic-card-title">{name}</h2>
        </div>
    );
}
