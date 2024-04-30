import CategoryCard from '../components/CategoryCard'
import './App.css'

function Home() {
  const categories = [
    { name: 'books', img: 'books.jpg' },
    { name: 'films', img: 'films.jpg' },
    { name: 'music', img: 'music.jpg' },
    { name: 'science & nature', img: 'science & nature.jpg' },
    { name: 'computers', img: 'computers.jpg' },
    { name: 'math', img: 'math.jpg' },
    { name: 'geography', img: 'geography.jpg' },
    { name: 'history', img: 'history.jpg' },
    { name: 'anime & manga', img: 'anime & manga.jpg' },
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
