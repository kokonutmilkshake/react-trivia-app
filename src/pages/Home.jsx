import CategoryCard from '../components/CategoryCard'
import './App.css'

function Home() {
  const categories = [
    { name: 'books', img: 'books.jpg' },
    { name: 'films', img: 'films.jpg' },
    { name: 'music', img: 'music.jpg' },
  ];

  return (
    <>
      <h1>Welcome to the Trivia Game</h1>
      <h2>Choose a category:</h2>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </>
  )
}

export default Home
