import React from 'react';

const Header = () => {
    return(
        <>
            <div className="head1">
                <img src={require('../Images/banner.png')} alt="banner" height="200px" width="100%"/>
            </div>
            <div className="input-group">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn btn-outline-primary">search</button>
            </div>
        </>
    )
}

export default Header;