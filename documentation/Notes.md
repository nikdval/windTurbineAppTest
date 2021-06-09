## General approach

For the purpose of this test, some assumptions has been made. The application is a simple one page React application. There’s no server side and all the http calls are made with no link and with a mock response from api.js. Turbine.model.js represents a model of a turbine data structure and in api.js  I create one instant to use it as mock data. Due to time limitations no unit tests are created.

The application displays some basic details of a wind turbine and different alarms every 3 seconds based on the algorithm in question.

## Planning

For the development of this application, the following steps are made:

*	Create a mockup for the page as a reference with Illustrator. There’s an image file in this folder.
*	Setup react-create-app and add extra packages
*	Setup Github repository
*	Clean the react original files and organize folders for layout, pages, components, assets
*	Add the new components and store.
*	Setup AWS host.

## Application Improvement
*	Unit and integration tests
*	Navigation and user information (Authentication process)
*	A map page to display the location and an overview status
*	Live stream data for energy production of the turbine
*	Reports and analysis of energy production

