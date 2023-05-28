import RestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
      <div class="hero">
        <div>
          <picture>
            <source media="(max-width: 600px)" srcset="../images/hero-image_2-small.jpg">
            <img src="../images/hero-image_2.webp" alt="hero-restaurant" class="lazyload" style="width: 100%; height: auto"/>
          </picture>
        </div>
      </div>

      <section class="content">
        <h2 class="content-heading" id="content-heading">Find the Restaurant</h2>
        <div id="list-menu" class="list-menu">
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurants();
    const restaurantsContainer = document.querySelector("#list-menu");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
