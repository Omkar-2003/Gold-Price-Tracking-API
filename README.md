# Gold-Price-Tracking-API
**Overview :** A Gold Price Tracking API using Node.js and MongoDB. The API will provide functionalities to mock the gold price, update the price of gold items, and retrieve the current and best prices of gold items within a specified time range. Additionally, you will have the opportunity to automate the process of updating gold item prices daily.





**Stepwise Guide :**

step 1 : Add required node modules like express , body-parser, mongoose 

step 2 : Follow Postman Documentation precisely

Postman Documentation link :- https://documenter.getpostman.com/view/21887155/2s93m1bQMc






**Requirements:**

1. Mock Gold Price API:
● Create an API endpoint that generates a random price for gold.
2. Update Gold Item Price API:
● Create an API endpoint that updates the price of gold items.
● The API endpoint should make a call to the Mock Gold Price API to get the
current gold price and multiply grams of gold present in gold items with the gold
price.
● Save the updated price of the gold item in a MongoDB database.
3. Retrieve Gold Item Price API:
● Create an API endpoint to retrieve the current and best prices of gold items.
● The API endpoint should accept the following parameters:
● Item ID (optional): Unique identifier for the gold item. If provided, retrieve
the current and best prices for the specified gold item. If not provided,
retrieve the current and best prices for all gold items.
● Time Range (optional): Specify the time range (in days) for retrieving the
best price. The default time range is 30 days.

4. Bonus Objective:
● Create a script that runs daily to update the prices of gold items automatically.
● The script should make a call to the Mock Gold Price API to get the current gold
price.
● Update the price of each gold item in the MongoDB database with the new price.
● Unit Test Cases for every API will be much appreciated.


