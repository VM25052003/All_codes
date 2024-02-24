import { useState, useCallback} from "react"
import Questions from "../questions"
import Question from "./Question"
import Summary from "./Summary"

export default function Quiz(){
//The index of the currently active question and then answers[] selected by the user both can be derived from same array
    const [userAnswer, setUserAnswer] = useState([])
    //If question isn't yet answered, stick to it
    let activeQuestionIdx = userAnswer.length
    //Completed quiz as all questions attempted
    const quizCompleted = activeQuestionIdx === Questions.length

    const answerHandler = useCallback(function answerHandler(selectedAnswer){
        //To keep old answers as well
        setUserAnswer((prevSelectedAnswer) => {
            return [...prevSelectedAnswer, selectedAnswer]
        })
    }, [])

    const skipAnswerHandler = useCallback(() => answerHandler(null), [answerHandler])

    if(quizCompleted){
        return <Summary userAnswer={userAnswer}/>
    }
    
    return (
        <main id='quiz'>
            <Question key={activeQuestionIdx} idx={activeQuestionIdx} onSelectAnswer={answerHandler} onTimeout={skipAnswerHandler}/>
        </main>
    )
}