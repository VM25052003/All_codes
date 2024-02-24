import '../index.css'

export default function Calculator(props){
    
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={props.field.initialInvestment} onChange={(e) => props.onFieldChange('initialInvestment', e.target.value)}></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={props.field.annualInvestment} onChange={(e) => props.onFieldChange('annualInvestment', e.target.value)}></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={props.field.expectedReturn} onChange={(e) => props.onFieldChange('expectedReturn', e.target.value)}></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={props.field.duration} onChange={(e) => props.onFieldChange('duration', e.target.value)}></input>
                </p>
            </div>
        </section>
    )
}