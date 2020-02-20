import React from 'react'
import { withRouter, Link } from 'react-router-dom';

function Home({ isAuth }) {
  return (
    <div className="page-wrap">
      <h4>Homepage</h4>
  <p>This is default homepage... { isAuth ? <Link to="/dashboard">Go to Dashboard</Link> : null }
       </p>
    </div>
  )
}

export default withRouter(Home);