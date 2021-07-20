import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <style type="text/css">
          .hero {
            display: none;
          }

          #query {
            padding: 13px;
            min-width: 200px;
            width: 100%;
          }
          
          .query-container {
            padding-right: 30px;
          }
        </style>
        <div class="content">
          <div class="query-container">
            <input id="query" type="text" placeholder="Search your favorite restaurant">
          </div>
          
          <h2 class="content__heading">Your Favorite Restaurant</h2>
              <div id="restaurants" class="restaurants">
            
              </div>
            </div>
        </div>
        `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
