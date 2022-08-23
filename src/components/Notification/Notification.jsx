import React from 'react';

export class Notification extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <h4
        style={{
          margin: '20px',
        }}
      >
        {message}
      </h4>
    );
  }
}

export default Notification;
