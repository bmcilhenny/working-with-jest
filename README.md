# Simple Comment List app for learning integration/unit testing w/Jest

## Configuration issues
- .env file and adding NODE_PATH=src/ was not working to reset absolute paths to something more manageable so I physically had to change the package.json scripts like so:

  - "start": "NODE_PATH=src/ react-scripts start",
  - "build": "NODE_PATH=src/ react-scripts build",
  - "test": "NODE_PATH=src/ react-scripts test --env=jsdom --verbose=false",
  - "eject": "NODE_PATH=src/ react-scripts eject"

- I also had to add `--env=jsdom` in order to work with jest plus `--verbose` in order to see the actual descriptions of the test when i ran `npm run test`, otherwise no descriptions were coming up. To see the results of console.log in the tests you should replace:
"test": "NODE_PATH=src/ react-scripts test --env=jsdom --verbose" with "test": "NODE_PATH=src/ react-scripts test --env=jsdom"

- Dependencies
  - tv4 (tiny validator 4)
    - intended to take some data, a json schema and validate the data
    - generate the json schema at jsonschema.net, add it to a file and import it into the middleware
