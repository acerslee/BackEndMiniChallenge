# BackEndMiniChallenge

Use this repo to pracite writing RESTful routes. Simulate client interactions using Postman <a href="https://www.postman.com/downloads/">Postman</a>. The goal is to make all tests pass and practice <a href="http://expressjs.com/en/guide/error-handling.html">error handling</a> in an express server.

### Installation

To get started:

Navigate to the project Directory

```sh
$ cd BackEndMiniChallenge
```

Install the dependencies

```sh
$ npm install
```

In a new terminal, seed the database

```sh
$ mysql -u root -p < schema.sql
```

Start the server

```sh
$ npm run start
```

Before running the tests, create and use the test database

```sh
$ CREATE DATABASE pets_info_test
$ USE pets_info_test
```

Run the tests

```sh
$ npm run test
```

### Technologies

<table style="width:50%">
  <tr>
    <td><a href="http://expressjs.com">Express</a></td>
     <td><a href="https://www.mysql.com/">MySQL</a></td>
    <td><a href="https://jestjs.io/">Jest</a></td>
    <td><a href="https://www.npmjs.com/package/supertest">Supertest</a></td>

  </tr>
</table>
