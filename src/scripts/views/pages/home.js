import DummySource from '../../data/dummy-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
          <h2 class="content__heading">List TOP-Leading Restaurants Profile</h2>
          <div id="restaurants" class="restaurants">
          </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await DummySource.homeRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    // TODO: tamplikan restaurants di dalam DOM
  },
};

export default Home;
