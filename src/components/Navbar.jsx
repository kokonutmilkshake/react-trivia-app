import { NavLink } from 'react-router-dom'

function Navbar() {
    return <>
        <div>
            <NavLink to="/home">
                <button>Back to Home Page</button>
            </NavLink>
        </div>
    </>
}

export default Navbar