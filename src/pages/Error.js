import React from 'react'
import {Link} from 'react-router-dom'
function Error() {
  return (
    <section className='error'>
        <div className='error-sub'>
          <h1 className='error-heading'>Oops! Dead End</h1>
          <Link className="error-button" to="/" >
            Back Home
          </Link>
        </div>
    </section>
  )
}

export default Error