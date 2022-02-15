import { useState, useEffect } from "react"
import { questions as dataset } from '../data/dataset'

const QuizPage = () => {
    const [started, setStarted] = useState(false)
    const [quizData, setQuizData] = useState(dataset)
    const [userAnswer, setUserAnswer] = useState('')
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [progress, setProgress] = useState(0)
    const [timeElapsed, setTimeElapsed] = useState(false)
    const [userScore, setUserScore] = useState(0)
    const [username, setUsername] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setStarted(true)
        setCurrentQuestion(quizData[progress])
    }

    return (
        <div className="quiz">
            { !started && 
                <div className="info">
                    <h1>Hello There!</h1>
                    <p>
                        You are about to start a quiz to test your knowledge. This quiz contains { quizData.length } questions. Every question answered correctly will add 10 points to your score. If you don't answer correctly, you get no points. This quiz is also timed, and has an average of 20 seconds per question. <b>Good Luck {username}!</b>
                    </p>

                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter Your name..." onChange={(evt) => setUsername(evt.target.value)} />
                        <button>Start Quiz!</button>
                    </form>
                </div>
            }

            {
                started &&
                <main>
                    <h1>{ currentQuestion.question }</h1>
                    <ul>
                        {
                            Object.values(currentQuestion?.options).map((option, index) => {
                                return <li 
                                            className={option === userAnswer ? 'selected' : ''} 
                                            onClick={() => setUserAnswer(option)}
                                            key={index}
                                        >
                                            { option }
                                        </li>
                            })
                        }
                    </ul>
                </main>
            }
        </div>
    )
}

export default QuizPage