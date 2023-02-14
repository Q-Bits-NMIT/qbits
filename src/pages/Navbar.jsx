import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <div className="container">
        <h1 className="text-3xl"><Link to='/'>Q-BITS</Link></h1>
        <ul>
            <li><Link to="/about">About</Link></li>
        </ul>
        </div>
    )
}