import { useState } from "react" 
import Calculator from "./components/Calculator"
import Header from "./components/Header"
import Table from "./components/Table"
import './index.css'

function App() {
  const [field, setField] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10 
})

function fieldChangeHandler(identifier, value){
    setField(prevField => {
        return {
            ...prevField,
            //Received string, so converting it
            [identifier]: +value
        }
    })
}

const isValid = field.duration >= 1

  return (
    <main>
    <Header />
    <div id="user-input">
    <Calculator onFieldChange={fieldChangeHandler} field={field}/>
    </div>
    {!isValid && (<p className="center">Enter a valid duration</p>)}
    {isValid && <Table field={field}/>}
    </main>
  )
}

export default App
