# NBA-App 

An application that keeps you up to date about NBA Games,Players and Teams

It has multiple endpoints for fetching the data from several API provider.

####     APP Behavior
  At app onload no there is no API calls made.
  When a a user clicks on the navigation link the component attempts to fetch to an endpoint at componentDidMount.
  If the action is successful it will be stored in the redux store and the component will not make future fetch request on the next navigation click.
  

  
####     API endpoints
  Currently there are four different API provider for different endpoints. 
  
   http://api.suredbits.com/nba
   https://api.mysportsfeeds.com/
   https://nba-players.herokuapp.com/players
 
## Getting Started

```
run npm install --to download node modules
run npm start  --runs webpack-dev-server, the file will be serve on http://localhost:8080/
```

### List of things to test

* Test the responses from the end point are handled for success and error cases
* Test that the action creators are properly managing promise objects, especially with async dispatch with redux-thunk before it hits the reducer.
* Test the reducer to make sure it is updating the application state according to the actions fired;




