import React from 'react'

function NotFound() {
    return (
        <div className="container text-center py-5">
            <div className="display-4">
                <span className="text-danger">Oops!</span> It's a 404
            </div>
            <div className="lead">
                sorry, couldn't find what you are looking for.....
            </div>
        </div>
    )
}

export default NotFound;