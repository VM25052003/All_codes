import { useRef } from "react"

export default function Answer(props){
    const shuffledAnswers = useRef()
    if(!shuffledAnswers.current){
    shuffledAnswers.current = [...props.answers]
    //Not done on original Questions[] as there, first option is correct and later required to check answers. sort(), takes 2 inputs, when returns (-), swaps those numbers, in order for (+). Don't care about input as have to shuffle only, and random(), gives value [0, 1[, and - 0.5 means, we have 50% chances for both (-) and (+) value
    shuffledAnswers.current.sort(() => Math.random() - 0.5)
    }

    return (
        <>
        <ul id="answers">
        {shuffledAnswers.current.map((answer) => {
            const isSelected = props.selectedAnswer === answer
            let cssClass = ''
            if(props.answerState === 'answered' && isSelected) cssClass = 'selected'
            if((props.answerState === 'correct' || props.answerState === 'wrong') && isSelected) cssClass = props.answerState
//To point at answerHandler, React would not know that it should pass the selected answer along. And therefore, we'll wrap this with an arrow function, which will then be the function invoked by React, so that in this potentially invoked function, we can now pass the answer we got and this will still not be executed immediately when this code here is parsed, but instead still only when the button is clicked, because it's then this outer function that will be invoked, and in there, our custom function execution here will then be executed.
//Diasabled button so can't change answers after
            return <li key={answer} className='answer'><button onClick={() => props.onSelectAnswer(answer)} className={cssClass} disabled={props.answerState !== ''}>{answer}</button></li>
            })}
        </ul>
    </>
    )
}