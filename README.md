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
   
   ### Endpoint: To Show all the recipes of the users without login.
   
   Method        |           EndPoint
   | -------------|:-------------:| 
   | GET         |  api/recipes|
   
   
   
   ### EndPoint: To Show a recipe By Id without login.
   
   
   Method        |           EndPoint
 | -------------|:-------------:| 
 | GET         |  api/recipes/:id|
                   
   

   
