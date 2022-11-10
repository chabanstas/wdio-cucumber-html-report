Feature: The Internet Guinea Pig Website
  
  Scenario: As a user, I can see start checked checkboxes

    Given I am on the checkboxes page
    Then I should see start checked checkboxes

  Scenario: As a user, I can check the checkbox1

    Given I am on the checkboxes page
    When I click on the checkbox1
    Then I should see checked checkbox1

  Scenario: As a user, I can check the checkbox1 and checkbox2

    Given I am on the checkboxes page
    When I click on the checkbox1
    And I click on the checkbox2
    Then I should see checked checkbox1 and checkbox2