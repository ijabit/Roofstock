# Roofstock
This project uses VueJS to implement the take-home excercise for Roofstock. It is using the Vuetify Material Design framework for styling and layout.

Obviously this is not production ready code, but seems to fulfill all of the requirements of the excercise. There is no authentication set up on the API and the only property you can update is the rent.

I didn't have time to create a many-to-many relationship between a Property and Resource. Also, to save time, instead of creating all related tables I used [Owned Entity Types](https://docs.microsoft.com/en-us/ef/core/modeling/owned-entities) which is a feature in Entity Framework that allows you to denote child entity fields with an "_" in the column name in SQL Server. Normally I would separate those entities into their own tables.

## Project setup
- git pull https://github.com/ijabit/Roofstock.git
- cd web
    - npm i
- Open Backend\RoofstockSolution.sln in Visual Studio 2019
- Right-click the RoofstockDb SQL Project and click Publish
    - Publish to your local SQL Server Instance. This will create the database and seed it with the sample data provided from your JSON file.
    - Adjust appsettings.json with the correct SQL connection string for the local environment
- Run VS solution in VS 2019 or VS Code
    - Observe and test API at https://localhost:44316/swagger/index.html
- cd web
- Run npm run start
- Open http://localhost:8080/
- Profit