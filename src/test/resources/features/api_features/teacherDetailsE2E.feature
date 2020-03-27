Feature: Teacher Details End to End  for UI vs API


  @e2eUIvsAPI
  Scenario Outline:UI vs API cross data validation
    Given user gets teacher  "<resources>"
    And user goes to cybertek training  app
    Then  user opens teacher profile details page "<teacherId>"
    And  user cross validations details on API vs Ui



    Examples:
      | resources    | teacherId |
      | /teacher/2794 | 2794      |




