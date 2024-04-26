# empty
API Wrapper Generator From HAR or XHR resquests

## api
- contains the main logic for handling the request and formatting it into the right structures

### api.ts
main class for the program to use for this 
### structure
- each file in here must of the postfix of structure
#### api strucutre
- the main object that contains all the logic for the requests that were sent
    - such as a list of reqeust and responses from their designated URL
### utils
#### contants 
- basic const that the main program will use throughout


## formats
- this is where the different formatings are located
    - formats include .har for request requests at the moment

# TODO
- [ ] work on parsing the restful request to its correct objects
- [ ] work on parsing the url to figure out what the request is
- [ ] work on adding more formats and api styles like graphql
