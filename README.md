# Recipe Keeper
> An application that allows users to view a list of existing recipes and add or remove recipes from the database.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
This application was built as my JavaScript project for Flatiron School.

## Technologies
* Ruby on Rails as backend (API)
* JavaScript as frontend user interface

## Setup

### Clone the Repository
```
git clone git@github.com:swellpf/recipe_keeper_frontend.git
git clone git@github.com:swellpf/recipe_keeper_backend.git
cd recipe_keeper_frontend.git
```
### Check your Ruby Version
```
ruby -v
```
Recipe Keeper was developed using Ruby v2.6.1 and Rails v5.2.5.  Update your Ruby installation as necessary.

### Install dependencies
```
This app utilizes both the rack-cors and fast_jsonapi gems.

Run bundle to make sure the gems are up to date.
```

### Initialize the database
```
rails db:create db:migrate db:seed
```
### Start Rails server
```
rails s
```
And now you can visit the site with the URL http://localhost:3000

## Features
List of features ready and TODOs for future development
* Users can view a list of existing recipes in the database
* Users can add a new recipe to the database including the list of ingredients and the directions on how to make the recipe.
* Users can remove existing recipes from the database.

To-do list:
* Correct bug in persisting ingredients to the database.
* Complete code for viewing the details of a particular recipe (ideally on the same page as the index list of recipes.)
* Add the ability for users to filter recipes based on ingredients.
* Add (and format) display of an image associated with the recipe.

## Status
Project is: Stable and functional (with the exception regarding ingredients noted above) as of 5/15/2021.

## Inspiration
This application is my class project for Flatiron School to demonstrate my proficiency developing in JavaScript.

## Contact
Created by Paul Cinoman. You can contact me by email at [swellpf@gmail.com](mailto:swellpf@gmail.com). Check out my [Blog](http://www.pconthepc.com) - feel free to contact me!