export default function Input({id, label, error, ...props}){
    return (
        <>
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            {/* Spreading id, type, name, onChange, onBlur, value prop to make more reusable, rest explicitly*/}
            <input {...props}/>
            <div className="control-error">{error && <p>{error}</p>}</div>
        </div>
        </>
    )
}