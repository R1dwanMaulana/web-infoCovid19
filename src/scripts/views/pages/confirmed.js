/* eslint-disable no-console */
import CovidSource from '../../data/Covid-source';

const Confirmed = {
  async render() {
    return `
        <h2>Konfirmasi</h2>
      `;
  },

  async afterRender() {
    const status = await CovidSource.confirmedStatus();
    console.log(status);
  },
};

export default Confirmed;
