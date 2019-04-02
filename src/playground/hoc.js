import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>
      The info is:
      {' '}
      {props.info}
    </p>
  </div>
);

const withAdminWarning = WrappedComponent => props => (
  <div>
    {props.isAdmin && <p>This is private info. Please don't share.</p>}
    <WrappedComponent {...props} />
  </div>
);

const requireAuthentication = WrappedComponent => props => (
  <div>
    {props.isAuthenticated
      ? <WrappedComponent {...props} />
      : <p>Please log in to see the info.</p>}
  </div>
);

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin info="These are the details" />, document.querySelector('#app'));
ReactDOM.render(<AuthInfo isAuthenticated info="Patient dossier #334" />, document.querySelector('#app'));
