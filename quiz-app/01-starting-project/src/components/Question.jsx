import { useState } from "react"
import QuestionTimer from "./QuestionTimer"
import Questions from "../questions"
import Answer from "./Answer"

//Can't use key as idx directly
export default function Question(props){
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    let timer = 10000
    //if we have a selected answer, reveal the correct answer after those 1 sec.
    if(answer.selectedAnswer) timer = 1000
    //if we have info., whether it is correct or not, it'll take 2 sec to move to the next question.
    if(answer.isCorrect != null) timer = 2000

    function answerHandler(answer){
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })
        setTimeout(() => {
//Whenever we pick an answer, in the question component, We're setting two nested timers here. And once this inner timer expired, which happens after we marked an answer as right or wrong, we forward the selected answer to the parent, quiz component. But that means that if this timer here expires before the right or wrong answer is forwarded to the parent component, we switch to a different question because the timer expired. Two situations here are, whether we actually skipped a question or it is because timer expired
            setAnswer({
                selectedAnswer: answer,
                isCorrect: Questions[props.idx].answers[0] === answer
            })
            //A second after answer is selected, check if correct or wrong.
            setTimeout(() => {
                props.onSelectAnswer(answer)
            }, 2000)
        }, 1000)
    }

    let answerState = ''
    if(answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct': 'wrong'
    }
    else if(answer.selectedAnswer){
        answerState = 'answered'
    }
    
    return (
        <>
        <div id='question'>
{/*Passed null as value because no answer was chosen. Mode to change colour of progress bar based on correct or wrong answer */}
                <QuestionTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer === ''? props.onTimeout: null} mode={answerState}/>
                <h2>{Questions[props.idx].text}</h2>
                <Answer answers={Questions[props.idx].answers} selectedAnswer={answer.selectedAnswer} answerState={answerState} onSelectAnswer={answerHandler} />
            </div>
        </>
    )
}