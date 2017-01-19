import React from 'react';
import ReactDOM from 'react-dom';
// const url = process.env.NODE_ENV === 'prod' ? 'deepstream' : 'localhost';
const url = '35.167.204.20'; // Need to change to production IP/URL when deploying
// const url = 'localhost'; // Need to change to production IP/URL when deploying
const client = window.deepstream(`${url}:6020`);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      dsConnected: false
    }
  }
  
  getUserData(data, callback) {
    this.setState({data: data}, callback)
  }

  makeDsConnectionTrue() {
    this.setState({
      dsConnected: true
    })
  }

  checkAuth(settings) {
    console.log('hits checkAuth function');
    const connectionState = client.getConnectionState();
    console.log('connectionState is: ', connectionState);
    if (connectionState !== 'OPEN') { // Test to see if this is the correct constant.
      this.setState({
        dsConnected: true
      })
      const userJWT = window.localStorage.cryptocracy;
      if (userJWT) {
        client.login({
          role: 'user',
          jwt: userJWT
        }, (success, data) => {
          console.log('success is: ', success, 'data is: ', data);
          if (success) {
            const callback = () => {
              if (!settings) {
                console.log('hits not settings');
                this.props.router.push('/dashboard');
              } else {
                this.props.router.push('/settings');
              }
            }
            this.getUserData(data, callback);
            
          } else {
            window.localStorage.removeItem('cryptocracy');
            this.setState({
              dsConnected: false
            })
            // this.props.router.push('/');
          }
        });
      }
    }
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        checkAuth: this.checkAuth.bind(this),
        makeDsConnectionTrue: this.makeDsConnectionTrue.bind(this),
        deep: client,
        getUserData: this.getUserData.bind(this),
        userData: this.state.data,
        dsConnected: this.state.dsConnected
      })
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

export default App;
