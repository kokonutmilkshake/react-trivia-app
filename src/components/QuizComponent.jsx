import React, { useState } from 'react';
import './QuizComponent.css'

function shuffle(question) {
    const allAnswers = question.incorrect_answers.concat(question.correct_answer); // Combine all answers
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5); // Shuffle using random sort
    return shuffledAnswers;
}

function QuestionComponent({ question }) {
    // const [shuffledAnswersArray, setShuffledAnswersArray] = useState(shuffle(question)); // Store shuffled answers in state
    const [selectedIndex, setSelectedIndex] = useState(null); // Track selected answer index
    const [isAnswered, setIsAnswered] = useState(false)
    const [feedback, setFeedback] = useState(null);
    const [answerClass, setAnswerClass] = useState('')

    const shuffledAnswersArray = shuffle(question)
    const correctAnswerIndex = shuffledAnswersArray.indexOf(question.correct_answer);


    const handleRadioChange = (event) => {
        setSelectedIndex(parseInt(event.target.value)); // Parse selected index from value
    };

    const handleConfirmAnswer = () => {
        setIsAnswered(true);
        if (selectedIndex === correctAnswerIndex) {
            setFeedback('Correct!');
            setAnswerClass('correct')
        } else {
            setFeedback('Incorrect. The correct answer is: ' + question.correct_answer);
            setAnswerClass('incorrect')
        }
    };

    return (
        <div key={question.question} className={answerClass}>
            <h3>{question.question}</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                {console.log(shuffledAnswersArray)}
                {shuffledAnswersArray.map((element, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={`${element}`}
                            name={`${question.question}`}
                            value={index}
                            checked={selectedIndex === index} // Check radio button if selected
                            onChange={handleRadioChange}
                        />
                        <label for={`${element}`}>{element}</label>
                    </div>
                ))}
                <button disabled={isAnswered} onClick={handleConfirmAnswer}>Confirm Answer</button>
            </form>
            {isAnswered && feedback && <p>{feedback}</p>} {/* Display feedback if answered */}
        </div>
    );
}

function QuizComponent({ questions }) {

    return (
        <div>
            <h2>Quiz Questions</h2>
            {questions.map((question) => (
                <QuestionComponent question={question} />
            ))}
        </div>
    );
}

export default QuizComponent;
