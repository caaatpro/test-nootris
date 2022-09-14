import { Fragment } from 'react';
import Banner from '../components/Banner/Banner';
import Discount from '../components/Discount/Discount';
import { banner } from '../global/app-data';

const Main = () => {
  return (
    <Fragment>
      <Banner {...banner} />
      <div className="app-container">
        <Discount />
      </div>
    </Fragment>
  );
};

export default Main;
