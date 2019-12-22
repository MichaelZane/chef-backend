# Chef Portfolio team

## Endpoints

### All the endpoints start with https://chefportfolio10.herokuapp.com/


                                 
   # Register New User
   
  ### EndPoint :




| Method        | EndPoint           | 
| ------------- |:-------------:| 
| POST      | api/auth/register|



                        
                                                              
  ### New User Object: 
   
   
   
   
   | field        | metadata           | 
   | -------------|:-------------:| 
   |  username   | Required and Unique
   |   password    |  Required   |
   |    email       |  Required and Unique |
   |   phone       |  Optional and Unique  |
   |      state       |  Optional  |
   |     city        |  Optional   |
   |    address     |  Optional    |
                    
   
   
   
 
            

   # Login User
   
  ### Users for Test: 
   
   
   
   | username        | password           | 
   | -------------|:-------------:| 
   | test3     |     test3  | 
   | test4     |     test4   |
   | test5     |     test5   |
   
   
   
   
   
  ### EndPoint
   
   
   Method        |           EndPoint
   | -------------|:-------------:| 
   | POST         |  api/auth/login|
                   
                       
   
  ### Login User Object: 
   
   
   
   | field        | metadata           | 
   | -------------|:-------------:| 
   | username     |     Required  | 
   | password     |     Required   |
   
   
   
   
   
   # Global Recipes
   
  * To Show all the recipes of the users without login.
   
   Method        |           EndPoint
   | -------------|:-------------:| 
   | GET         |  api/recipes|
   
   
   
   * To Show the recipe By Id without login.
   
   
   Method        |           EndPoint
 | -------------|:-------------:| 
 | GET         |  api/recipes/:id|
                   
   
   
 # APIs with authorization:
 
 ### must LogIn and have a token to make these requests:
 
 
 * make a request by the id of the user to get all the recipes of the user and add new recipe.
 
 
  Method        |       EndPoint | Description
 | -------------|:-------------:| ----------|
 | GET         |  api/auth/user/:id|  get all recipes
  | POST         |  api/auth/user/:id|  add new recipe
 
 
## Update/Delete Recipe
 * make a request by the id of the recipe to update or delete recipe.
 
 
 
 Method        |       EndPoint | Description
 | -------------|:-------------:| ----------|
 | PUT         |  api/auth/user/recipes/:id|  Update recipe
  | DELETE         |  api/auth/user/recipes/:id|   Delete recipe




### BackEnd Build with Node.js
   ### Libraries:
   * express
   * knex
   * bycryptjs
   * jsonwebtoken
