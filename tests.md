# Tests

The tests, located in `tests/`, aim to verify the functionality of the application. They cover scenarios such as user authentication, navigation, and interactions with different pages.

## UI Scenarios

### registrationPositiveTests.spec.ts

1. **User is registered sucessfully**
   - Description: verify that user can be registered with valid credentials
   - Steps: Navigate to the main page, open Sign up form, enter the valid credentials into the required fields, and click the Register button, then check that user is navigated to the Garage page

### registrationNegativeTests.spec.ts

**Preconditions:** Navigate to the main page, open the Sign up form

1. **Invalid First Name is entered**
   - Description: verify that user with an invalid Name cannot be registered
   - Steps: Enter invalid value into the Name field, check the validation message
2. **Null First Name is entered**
   - Description: verify that user without a Name cannot be registered
   - Steps: Leave the Name field empty, check the validation message
3. **Invalid Last Name is entered**
   - Description: verify that user with invalid Last Name cannot be registered
   - Steps: Enter invalid value into the Last Name field, check the validation message
4. **Null Last Name is entered**
   - Description: verify that user without a Last Name cannot be registered
   - Steps: Leave the Last Name field empty, check the validation message
5. **Invalid Email is entered**
   - Description: verify that user with invalid Email cannot be registered
   - Steps: Enter invalid value into the Email field, check the validation message
6. **Null Email is entered**
   - Description: verify that user without an Email cannot be registered
   - Steps: Leave the Email field empty, check the validation message
7. **Invalid Password is entered**
   - Description: verify that user with invalid Password cannot be registered
   - Steps: Enter invalid value into the Password field, check the validation message
8. **Null Password is entered**
   - Description: verify that user without a Password cannot be registered
   - Steps: Leave the Password field empty, check the validation message
9. **Invalid Password is re-entered**
   - Description: verify that user with invalid re-entered Password cannot be registered
   - Steps: Enter invalid value into the Re-enter password field, check the validation message
10. **Confirm Password validation**
    - Description: verify that user with mismatched password confirmation cannot be registered
    - Steps: Enter valid value into the Password field, enter valid but a different value into the Re-enter password field, check the validation message
11. **Registration button is disabled**
    - Description: verify that the Register button is disabled when the form is not valid
    - Steps: enter all the valid values into the required fields, clear the Re-enter password field, check that the Registration button is disabled

### logInPositiveTests.spec.ts

1. **User is logedIn with valid creadentials**
   - Description: Verify that an existing user can successfully log in.
   - Steps: Navigate to the main page, open Sign In form, enter the valid credentials into the required fields, and click the Login button, then check that user is navigated to the Garage page

### logInNegativeTests.spec.ts

1. **User is not logedIn with invalid creadentials**
   - Description: Verify that a not-existing user cannot successfully log in.
   - Steps: Attempt to log in with invalid username and password combinations and verify that the system denies access.

### addCarPositiveTests.spec.ts

1. **Car is added**
   - Description: Verify that a car can be added successfully
   - Steps: using the fixture userGaragePage.js/innerFixtureAddCar open the Garage page, click the Add car button, enter all the valid data, click the Add button, check that the added car model is shown
2. **Fuel expense is added**
   - Description: Verify that a fuel expense can be added successfully
   - Steps: using the fixture userGaragePage.js/innerFixtureAddFuel open the Fuel expenses page, click the Add an expense button, enter all the valid data, click the Add button, check that the added fuel expense is shown
3. **Delete all cars**
   - Description: Verify that all cars are deleted
   - Steps: using the fixture userGaragePage.js/deleteAllCars open the Garage page, for each of the cars open an Edit a car modal and then click the Remove car button, check that there are no records left

## API Scenarios

### addCarTestsAPI.spec.ts

1. **Car is added API test**
   - Description: Verify that a car is added via POST /api/cars
   - Steps: send a request with valid data to POST /api/cars, check that the car is added

2. **Add Car - Mileage is null API test**
   - Description: Verify that a car is not added via POST /api/cars when there is no mileage
   - Steps: send a request without mileage parameter to POST /api/cars, check that the respective error message is returned

3. **Add Car - Mileage > 999999 API Test**
   - Description: Verify that a car is not added via POST /api/cars when there is invalid mileage
   - Steps: send a request with invalid mileage parameter to POST /api/cars, check that the respective error message is returned

### profileTestAPI.spec.ts

1. **User Profile is modified**
   - Description: Verify that a user profile can be modified
   - Steps: send a request with valid data to POST /api/users/profile, check that the user data is modified
