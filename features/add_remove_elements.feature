Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can add elenemts

    Given I am on the addRemoveElements page
    When I click on the Add Element button
    Then I should see the Delete button

  Scenario: As a user, I can delete elenemts

    Given I am on the addRemoveElements page
    Then I should not see the Delete button

  Scenario: As a user, I can delete an existing elenemts

    Given I am on the addRemoveElements page
    When I click on the Add Element button
    And I click on the Delete button
    Then I should not see the Delete button

  Scenario: As a user, I can add 2 elenemts and delete them

    Given I am on the addRemoveElements page
    When I double click on the Add Element button
    And I double click on the Delete button
    Then I should see the Delete button
