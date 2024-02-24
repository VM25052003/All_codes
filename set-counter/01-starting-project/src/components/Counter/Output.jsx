import { log } from "../../log";

export default function Output(props){
log('<Output /> rendered', 2);
 const cssClass = props.value >= 0? 'counter-output': 'counter-output negative'
 return <span className={cssClass}>{props.value}</span>
}