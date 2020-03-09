import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Info: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>this is private info, please dont share</p>
      <WrappedComponent {...props}/>
    </div>
  )
}


const requireAuth = (WrappedComponent) => {
  return (props) => (
    <div>
    {
      props.isAuth
      ? (<WrappedComponent {...props} />)
       : (<p>Pleas login to see Info</p>)
    }
    </div>
  )
}

// const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuth(Info)

ReactDOM.render(<AuthInfo isAuth={true} info="there are the details" />, document.getElementById('app'))