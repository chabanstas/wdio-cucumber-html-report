Feature: The Internet Guinea Pig Website
  
  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |

  Scenario: As a user, I can enter only username

    Given I am on the login page
    When I login with fakename username
    Then I should see a flash message "Your username is invalid!"

  Scenario: As a user, I can enter only password

    Given I am on the login page
    When I login with fakepassword password
    Then I should see a flash message "Your password is invalid!"

  Scenario: As a user, I can click on Login button

    Given I am on the login page
    When I click on Login button
    Then I should see a flash message "Your username and password field empty!"
