# Tractian Application

## Introduction
This project is a Challenge from Tractian, and was build for a CRUD application using Typescript, NodeJS and MongoDB.

On this project you can check the files used.

A preview was deployed on Heroku on address [https://ebarreto-tractian-backend.herokuapp.com/](https://ebarreto-tractian-backend.herokuapp.com/)

For use this online application I must to create a MongoDB Atlas Cluster.

## Available Scripts

In the project directory, you can run:

### `npm run start-dev`

Runs the app in the development mode. The port can be set on .env file on root folder of project. Use the route [http://localhost:PORT](http://localhost:PORT) to view it in the browser.

*Important: for this script you must have the nodemon tools running, you can install with `npm i -g nodemon`

### `npm run deploy`

This scripts push files from dist folder to heroku for deployement. Before running you must run `tsc` comand

### `npm run start` or `npm run watch-node`

Runs the app in the development mode using dist files. On the second scrit listed you can use nodemon.





