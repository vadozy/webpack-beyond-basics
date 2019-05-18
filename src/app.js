import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById("react-root")
  );
};

render(Counter);
