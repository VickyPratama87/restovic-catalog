const assert = require("assert");

Feature("Liking Restaurant");
Before(({ I }) => {
  I.amOnPage("/#/favorites");
  I.wait(5);
});
Scenario("showing empty liked restaurant", ({ I }) => {
  I.seeElement(".content");
  I.seeElement(".restaurant-item__not__found");
});
Scenario("liking one restaurant", async ({ I }) => {
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
});
