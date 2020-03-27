Feature: Validation of the teacher name UI vs API

  @e2eName
  Scenario Outline:UI vs API cross data validation with name
    Given user gets teacher  "<resources>"
    And   user goes to cybertek training  app
    Then   user searches for teacher with name "<teacherName>"
    And   user cross validations details on API vs UI with "<teacherName>"
    Examples:
      | resources           | teacherName |
      | /teacher/name/Rahul | Rahul       |



  Scenario: API vs DB end to end data validation
    Given user gets teacher at "/teacher/2625"
    And user connects to Cybertek Training DB
    Then user gets data from DB with "some SQL query"
    And user cross validates API with DB