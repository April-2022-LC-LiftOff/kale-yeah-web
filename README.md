# Grocery Meal Prep Application: Kale Yeah! &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> Grocery Meal Prep, Kale Yeah

This application aims to solve the never ending problem of creating grocery lists from scratch. This app can generate a grocery list for you by being able to search for ingredients, display an ingredient page and create grocery lists.


## Installing / Getting started

Spring Boot Set up: 
1. You are free to use any IDE of choice, such as Visual Studio, IntelliJIDEA. <br />
2. Clone this remote repository into a directory of your choice ie Desktop, Folder, etc. <br />
 
```shell
git clone https://github.com/April-2022-LC-LiftOff/kale-yeah-rest.git
cd kale-yeah-rest
```
3. Open up the project in your IDE and hit the Run: Run project button.
4. Go into a web browser and type in the URL localhost:8080 ---> this page should be blank with an error since their was no request mapping path specified for the base URL. Cross Origins is already stated within the controllers and resource classes to connect with React. We will go through setting up React next.

React Set Up:
1. Clone the front end remote repository:
```shell
git clone https://github.com/April-2022-LC-LiftOff/kale-yeah-web.git
cd kale-yeah-web
```
2. Open an IDE of your choice
3. in your project's root directory (where your package.json file is) you might have to do a
npm install if npm start is giving you issues.
4. Use this command on your terminal : 

```shell
npm start
```
React frontend is now running and go to a browser and type in the URL localhost:3000 ---> This is the landing page for the React frontend. 

## Developing

### Built With
React, Spring Boot, MySQL, Axios, JSX

### Prerequisites
Global dependencies for React: <br/>

React Error boundary should be installed on your local machine:
```shell 
   npm install --save react-error-boundary
```

Global Dependencies for Spring Boot:

```shell 

   implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
   implementation 'org.springframework.boot:spring-boot-starter-web'
	implementation 'org.springframework.boot:spring-boot-starter-validation'
   runtimeOnly 'mysql:mysql-connector-java'
   
```


### Deploying / Publishing
 A great resource on deploying this full stack project can be found at [How to Deploy a full stack Application](https://acidtango.com/thelemoncrunch/how-to-deploy-a-full-stack-app-to-the-web/) <br />
React: When you're ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. 

```shell
npm run build
```

Spring Boot:
Spring Boot’s executable jars are ready-made for most popular cloud PaaS (Platform-as-a-Service) providers. These providers tend to require that you “bring your own container”. They manage application processes (not Java applications specifically), so they need an intermediary layer that adapts your application to the cloud’s notion of a running process.

Two popular cloud providers, Heroku and Cloud Foundry, employ a “buildpack” approach. The buildpack wraps your deployed code in whatever is needed to start your application. It might be a JDK and a call to java, an embedded web server, or a full-fledged application server. A buildpack is pluggable, but ideally you should be able to get by with as few customizations to it as possible. This reduces the footprint of functionality that is not under your control. It minimizes divergence between development and production environments.

Ideally, your application, like a Spring Boot executable jar, has everything that it needs to run packaged within it.

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).


## Configuration

Here you should write what are all of the configurations a user can enter when using the project.


## Style guide

Explain your code style and show how to check it.

## API Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.

External API that we used for this project is [Spoonacular API](https://spoonacular.com/food-api/docs#Authentication) with a required API key. This
API has query parameters and must be specified when exposing a resource. 
List of Endpoints used: 
```shell
GET https://api.spoonacular.com/recipes/complexSearch
GET https://api.spoonacular.com/food/ingredients/search

```
Spring Boot RESTful services exposed such as:
```shell
@RequestMapping("/{name}")
    public Results getIngredientsList(@PathVariable("name") String name) {

        Results results = restTemplate.getForObject("https://api.spoonacular.com/food/ingredients/search?query=" + name + "&apiKey=" + apiKey, Results.class);
        return results;

    }
```

## Database

MySQL Set up:

1. Download MySQL https://dev.mysql.com/downloads/mysql/
2. Download MySQL Workbench https://dev.mysql.com/downloads/workbench/
3. Connect to Local instance port 3306 on MySQL Workbench
4. Create new database schema using db schema icon
5. Schema editor will prompt you to give it a name for your schema , name it kaleyeah
6. Go to administration pane ---> users & privileges --> Add account ---> login name: kaleyeah
7. Limit Hosts to matching : set as "localhost"
8. Set password
9. Select "Schema Privileges" tab and select "Add Entry" ---> Set Selected Schema to : kaleyeah ---> hit 'SELECT ALL' button for all the schema privileges a user should have ---> hit APPLY
10. MySQL is already configured within Spring Boot so there is no need to re configure. <br />

Database Design Process:
- Users table is created to store user information such as username, email, full  name, password*
- Ingredients table is created to store name, category, price , calories 
- Recipes table is created to store the name of the recipe, a list of ingredients, yield, category, instructions, cooking method, and calories
- Grocery list table  contains a list of ingredient items, a user , and date
- Grocery Class —> A One to One relationship between a grocery list and a user , One to Many where one grocery list has many ingredients
- Ingredient Class —> Many to One where a user can have several ingredients per grocery list,  Many to One where a user can have many ingredients per recipe.
- Recipes Class —> One to Many where one recipe can have many ingredients , Many to one where many recipes are related to one user

## Licensing

MIT License

Copyright (c) 2022 Matt Belz, Brandon Chapple, Eddy T. Garcia, Daniel Portnoy, Dale Madison

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
