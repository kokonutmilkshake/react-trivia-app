import './App.css';
import Navbar from '../components/Navbar';
import QuizComponent from '../components/QuizComponent';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function GeneratePage() {
    const { categoryName } = useParams();
    let categoryCode = 0
    switch (categoryName) {
        case 'books':
            categoryCode = 10
            break;
        case 'films':
            categoryCode = 11
            break;
        case 'music':
            categoryCode = 12
            break;
    }
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [showQuizComponent, setShowQuizComponent] = useState(false);
    const [questions, setQuestions] = useState([]); // State to hold fetched questions
    const [isLoading, setIsLoading] = useState(false); // State for loading indicator

    const capitalizeFirstLetter = (string) =>
        string.charAt(0).toUpperCase() + string.slice(1);

    const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value);
    };
    async function fetchData() {
        setIsLoading(true)
        try {
            const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryCode}&difficulty=${selectedDifficulty}&type=multiple`)
            const data = await response.json()
            const questionArr = data.results
            setQuestions(questionArr)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleGenerateClick = (event) => {
        event.preventDefault();
        if (selectedDifficulty) {
            setShowQuizComponent(true);
            fetchData()
        } else {
            alert('Please select a difficulty level.');
        }
    };

    useEffect(() => {
        // Only fetch data when showQuizComponent is true and selectedDifficulty changes
        if (showQuizComponent && selectedDifficulty) {
            fetchData();
        }
    }, [showQuizComponent, selectedDifficulty]);

    return (
        <>
            <h1>{capitalizeFirstLetter(categoryName)} Quiz</h1>
            <h2>Choose your difficulty:</h2>
            <form onSubmit={handleGenerateClick}>
                <div>
                    <input
                        type="radio"
                        id="choice1"
                        name="difficulty"
                        value="easy"
                        checked={selectedDifficulty === 'easy'}
                        onChange={handleDifficultyChange}
                    />
                    <label for="choice1">Easy</label>

                    <input
                        type="radio"
                        id="choice2"
                        name="difficulty"
                        value="medium"
                        checked={selectedDifficulty === 'medium'}
                        onChange={handleDifficultyChange}
                    />
                    <label for="choice2">Medium</label>

                    <input
                        type="radio"
                        id="choice3"
                        name="difficulty"
                        value="hard"
                        checked={selectedDifficulty === 'hard'}
                        onChange={handleDifficultyChange}
                    />
                    <label for="choice3">Hard</label>
                </div>
                <div>
                    <button type="submit">Generate</button>
                </div>
            </form>

            {isLoading ? (
                <p>Loading quiz questions...</p>
            ) : showQuizComponent && questions.length > 0 ? (
                <QuizComponent questions={questions} />
            ) : null} {/* Only render QuizComponent if data is loaded and not empty */}

            {/* if (isLoading) {
                return <p>Loading quiz questions...</p>;
                } else if (showQuizComponent && questions.length > 0) {
                return <QuizComponent questions={questions} />;
                } else {
                return null;
                } */}
            <Navbar />
        </>
    );
}

export default GeneratePage;
