export default function Places(props){
    return (
        <section className="places-category">
            <h2>{props.title}</h2>
            {props.isLoading && <p className="fallback-text">{props.loadingText}</p>}
            {!props.isLoading && props.places.length === 0 && <p className="fallback-text">{props.fallbackText}</p>}
            {!props.isLoading && props.places.length > 0 && (
                <ul className="places">
{/* On map we have (), not {}, take care. To use {}, use return statement. But for (), returned explicitly */}
                    {props.places.map(p => (
                        <li key={p.id} className="place-item">
                            <button onClick={() => props.onSelectPlace(p)}>
                                <img src={`http://localhost:3000/${p.image.src}`} alt={p.image.src} />
                                <h3>{p.title}</h3>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}