import QuizComplete from '../assets/quiz-complete.png'
import Questions from '../questions'

export default function Summary(props){
const skipped = props.userAnswer.filter(answer => answer === null)
const correct = props.userAnswer.filter((answer, idx) => Questions[idx].answers[0] === answer)
const skippedShare = Math.round((skipped.length / props.userAnswer.length)*100)
const correctShare = Math.round((correct.length / props.userAnswer.length)*100)
const wrongShare = 100 - skippedShare - correctShare
return (
    <>
    <div id='summary'>
        <img src={QuizComplete} alt="quiz-complete" />
        <h2>QUIZ COMPLETED</h2>
        <div id='summary-stats'>
            <p>
                <span className='number'>{skippedShare}%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>{correctShare}%</span>
                <span className='text'>Answered correctly</span>
            </p>
            <p>
                <span className='number'>{wrongShare}%</span>
                <span className='text'>Answered Incorrectly</span>
            </p>
        </div>
        <ol>
            {props.userAnswer.map((answer, idx) => {
                let cssClass = 'user-answer'
                if(answer === null) cssClass += ' skipped'
                else if(Questions[idx].answers[0] === answer) cssClass += ' correct'
                else cssClass += ' wrong'
                return (
                <li key={idx}>
                    <h3>{idx + 1}</h3>
                    <p className='question'>{Questions[idx].text}</p>
                    <p className={cssClass}>{answer ?? 'Skipped'}</p>
                </li>
                )
            })}
        </ol>
    </div>
    </>
)
}