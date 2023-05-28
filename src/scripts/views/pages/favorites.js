import FavoriteRestaurants from "../../data/favorite-restaurants";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorites = {
  async render() {
    return `
      <a href="#content-heading" class="skip-link">Menuju ke konten</a>
      <div class="content">
        <div class="restaurant-item__not__found"></div>
        <h2 class="content-heading">Your Liked Restaurant</h2>
        <div id="list-menu" class="list-menu">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurants.getAllRestaurants();
    const restaurantsContainer = document.querySelector("#list-menu");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;
