import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <img class="lazyload restaurant__picture" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <div class="restaurant__info">
        <h3>Information</h3>
            <h4>Address</h4>
            <p>${restaurant.address}</p>
            <div class="categories">
                <h4>Categories</h4>
                ${restaurant.categories.map((category) => `
                    <div class="category">
                        <h5 tabindex="0">${category.name}</h5>
                    </div>
                `).join('')}
            </div>
            <h4>Rating</h4>
            <p>${restaurant.rating}</p>
        </div>
        <div class="restaurant__overview">
            <h3>Description</h3>
            <p>${restaurant.description}</p>
            <div class="restaurant__menus">
                <h4>Menus</h4>
                <div class="foods">
                    <h5>Foods</h5>
                    ${restaurant.menus.foods.map((food) => `
                        <div class="food">
                            <h6 tabindex="0">${food.name}</h6>
                        </div>
                    `).join('')}
                </div>
                <div class="drinks">
                    <h5>Drinks</h5>
                    ${restaurant.menus.drinks.map((drink) => `
                        <div class="food">
                            <h6 tabindex="0">${drink.name}</h6>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="customerReviews">
                <h4>Costumer Reviews</h4>
                ${restaurant.customerReviews.map((review) => `
                    <div class="customerReview">
                        <h5 tabindex="0">${review.name}</h5>
                        <p tabindex="0" class="date-review">${review.date}</p>
                        <p tabindex="0">${review.review}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <div class="restaurant-item__header">
        <img class="lazyload restaurant-item__header__picture" alt="${restaurant.name || '-'}"       
            data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
            <div class="restaurant-item__header__city">
                <p><span class="restaurant-item__header__city_name">${restaurant.city || '-'}</span></p>
            </div>
            <div class="restaurant-item__header__rating">
                <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
            </div>
        </div>
        <div class="restaurant-item__content">
            <h3 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
            <p>${restaurant.description || '-'}</p>
        </div>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
