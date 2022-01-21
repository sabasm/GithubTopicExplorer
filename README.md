# GitHub Topic Explorer!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Clone or download this project and install the required dependencies

You will need a Github Token with certain permissions, to use the Github GraphQL API, [follow this steps](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

permissions required:

```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```

Please create an env file at the project root folder with the name .env for your enviroment variables,
add
`GH_GRAPH_QL_TOKEN = "YOUR_GITHUB_TOKEN_HERE"`

## Available Scripts

In the project directory, you can run:

### `npm start`

It will read your env files with the lib react-dotenv app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

You may also see any lint errors in the console.

### `npm run build`

**DONT BUILD AND DEPLOY THIS APP WITH A TOKEN OR KEY**
or with the react-dotenv lib, it will copy all your enviroment variables
builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app should NEVER be deployed with env variables on it.
this is just a test.
also it wont work because it will not have a token on it.

## Learn More

About GitHub GraphQl https://docs.github.com/en/graphql

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
