import {Link} from '@reach/router';
const Nav = props =>{
    return(
        <div className="d-flex flex-row justify-content-between bg-primary shadow">
            <div className="d-flex fw-bolder m-2 mb-0">
                <p><Link to="/" className="text-decoration-none text-white">Get Freaking Vaccinated</Link></p>
            </div>
            <div className="d-flex m-2 mb-0">
            <p><Link to="/about" className="text-decoration-none text-white">About</Link></p>
            </div>
        </div>
    );
}

export default Nav;