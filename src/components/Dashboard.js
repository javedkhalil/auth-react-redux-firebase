import React from 'react'
import { connect } from "react-redux"

function Dashboard({ email }) {
  return (
    <div className="page-wrap">
      <h4>Dashboard { email ? `(${email})` : null }</h4>
      <p>This is dashboard and is a protected route... </p>
    </div>
  )
}

const mapStateToProps = state => ({
  email: state.getAuth.userEmail
})

export default connect(mapStateToProps, null)(Dashboard);
