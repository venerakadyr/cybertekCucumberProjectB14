
Feature: Deleting teacher Service

@abc
Scenario: Positive teacher deleting
Given user delete teacher at "/teacher/delete/2538"
And user gets teacher "/teacher/2538"
Then user verifies response message with "Teacher with id = 2538 NOT FOUND!"
