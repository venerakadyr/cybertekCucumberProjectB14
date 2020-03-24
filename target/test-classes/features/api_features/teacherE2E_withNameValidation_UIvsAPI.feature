Feature: Validation of the teacher name UI vs API

  @e2eName
  Scenario Outline:UI vs API cross data validation with name
    Given user gets teacher  "<resources>"
    And   user goes to cybertek training  app
    Then   user searches for teacher with name "<teacherName>"
    And   user cross validations details on API vs UI with "<teacherName>"
    Examples:
      | resources           | teacherName |
      | /teacher/name/Rahul | Rahul     |