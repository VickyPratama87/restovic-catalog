const assert = require("assert");

Feature("Dislike Restaurant");
Before(({ I }) => {
  I.amOnPage("/#/favorites");
  I.wait(5);
});
Scenario("Dislike one restaurant", async ({ I }) => {
  I.seeElement(".restaurant-item__not__found");
  I.amOnPage("/");
  I.wait(5);
  I.seeElement(".restaurant-item-content");
  const firstRestaurant = locate(".restaurant-item-content a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(5);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorites");
  I.wait(5);
  I.seeElement(".restaurant-item");
  const likedRestaurantTitle = await I.grabTextFrom(".restaurant-item-content a");
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.click(firstRestaurant);
  I.wait(5);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorites");
  I.wait(5);
  I.seeElement(".restaurant-item__not__found");
});
