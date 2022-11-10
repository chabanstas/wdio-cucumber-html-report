Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can check the selected options

    Given I am on the dropdown page
    Then I should see selected options

  Scenario: As a user, I can select options 1

    Given I am on the dropdown page
    When I select options 1
    Then I should see selected options 1

  Scenario: As a user, I can select options 2

    Given I am on the dropdown page
    When I select options 2
    Then I should see selected options 2