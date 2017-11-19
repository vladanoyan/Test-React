import React from 'react';
import NavBar from '../../components/ListingNavbar';
import cs from './HomePage.pcss';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1 className={cs.Title}>HomePage</h1>
      </div>
    );
  }
}

export default HomePage;
