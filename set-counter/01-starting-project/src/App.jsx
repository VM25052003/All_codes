import { useState } from "react"
import Counter from "./components/Counter/Counter"
import Header from "./components/Header"
import { log } from "./log";
import ConfigureCounter from "./components/Counter/ConfigureCounter";

function App(){
    log('<App /> rendered');
    const [chosenCount, setChosenCount] = useState(0)
    
    function chosenCountHandler(newCount){
        setChosenCount(newCount)
    }

    return (
        <>
        <Header />
        <main>
            <ConfigureCounter onSetCount={chosenCountHandler}/>
{/* To set output value as counter on setting changes, on eidea is to useEffect() which isn't suggested. Next is to use a key */}
            <Counter key={chosenCount} initialCount={chosenCount}/>
            <Counter initialCount={0} />
        </main>
        </>
    )
} 

export default App