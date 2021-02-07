import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The information： {props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth && <p>This is a private page.</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo info="You are tricked." isAuth={false}/>, document.getElementById('app'));