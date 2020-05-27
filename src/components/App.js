import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Form from './Form.js';

const App = props => {
  return (
    <React.Fragment>
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  )
}

export default App;