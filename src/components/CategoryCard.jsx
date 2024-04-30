import { Link } from "react-router-dom"

export default function CategoryCard({ category }) {
    const imgURL = `../src/assets/${category.img}`
    return <>
        <div className="category-card">
            <Link to={{ pathname: `/generate/${category.name}` }}>
                <button style={{ width: '45%' }}>
                    <h3>{category.name}</h3>
                    <img style={{ width: '40%' }} src={imgURL} alt="" />

                </button>
            </Link>
        </div>

    </>
}