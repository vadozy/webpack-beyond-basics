import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  climb = _ => {
    this.setState(prevState => (
      {count: prevState.count + 1}
    ));
  };

  render() {
    return (
      <div onClick={this.climb}>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}