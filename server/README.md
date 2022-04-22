# Create JSON Web Token (Back end)

In this demo, you will create a profile and verify JSON Web Tokens to log into a profile.

## Instructions

* Run `npm install` and `npm run seed` to set up the database.

* Open [Profile.js](models/Profile.js) and explain the `save` hook and `isCorrectPassword` custom method:

  * When a new profile is created, the password is automatically hashed using `bcrypt`.

  * When a user logs into their profile, we will execute the `isCorrectPassword` method to determine if the correct password was provided.

* Open [typeDefs.js](schemas/typeDefs.js) and explain the `Auth` and `Mutation` types:

  * An `Auth` type returns a `token` and can include any other `Profile` data.

  * The `addProfile` mutation now takes in more profile information as input and returns an `Auth` object.

  * A `login` mutation takes in an `name` and `password` and returns an `Auth` object.

* Open [auth.js](utils/auth.js) and explain the contents:

  * We require `jsonwebtoken` on top.

  * We create a JWT `secret` and an `expiration`.

  * We export the `signToken()` function that takes in a `user` object and adds the `name` and `_id` properties to the token, along with the `secret` and `expiration`.

* **DO NOT** explain the code `resolver.js` as that is the objective of the following `22-Stu_Sign-JWT` activity!

* To demonstrate how it all works, run `npm run watch` in your command line and open your browser to <http://localhost:3001/graphql> to view the GraphQL Playground.

  * Query all users for their `name` and `password`. Make note of one user's name and password to test out the `login()` mutation.

    ```graphql
    query {
      profiles {
        name
        password
      }
    }
    ```

  * Open another tab in GraphQL Playground and test the `login()` mutation using the query variables `name` and `password` of the user noted above. 

    ```graphql
    mutation login($name: String!, $password: String!) {
      login(name: $name, password: $password) {
        user {
          _id
          name
        }
        token
      } 
    }
    ```

  * You should be able to see the `token` along with the user's `name` and `_id`. Copy the `token`.

* Open your browser to <https://jwt.io/> and paste the `token` in the `Encoded` text box.

  * In the `Decoded` boxes, you should be able to see the Header, Payload (which includes the `name` and `_id`), and Signature.
