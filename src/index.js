import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

const Main = props => {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));