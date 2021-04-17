import Card from 'components/Card';
import React from 'react';
import './Home.styles.scss';

type HomeProps = {};

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className="home">
      <Card>hello from Home!</Card>
      <a href="/sub">Go to subrouter</a>
    </div>
  );
};

export default Home;
