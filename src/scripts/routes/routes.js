/* eslint-disable import/extensions */
import Confirmed from '../views/pages/confirmed';
import Recovered from '../views/pages/recovered';
import Death from '../views/pages/death';

const routes = {
  '/': Confirmed,
  '/confirmed': Confirmed,
  '/recovered': Recovered,
  '/death': Death,
};

export default routes;
