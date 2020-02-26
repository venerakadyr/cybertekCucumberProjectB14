Feature: TC#25: Wikipedia Search Functionality Title Verification

  Background: User already in Home page
    Given User is onWikipedia home page



  Scenario:Steve Jobs search verification
    When User types "Steve Jobs" in the wiki search box
    And User clicks wiki search button
    Then User sees "Steve Jobs" is in the wiki title Note:


  Scenario:Steve Jobs search verification
    When User types "Steve Jobs" in the wiki search box
    And User clicks wiki search button
    Then User sees "Steve Jobs" is in the main headerNote

  @wiki
  Scenario Outline: Steve Jobs search verification
    When User types "<searchValue>" in the wiki search box
    And User clicks wiki search button
    Then User sees "<expectedTitle>" is in the image header
    Examples: different data sets
    |searchValue           |   expectedTitle|
    |Nancy Pelosi          | Nancy Pelosi   |
    | Donald Trump         |  Donald Trump  |



#  @etsy
#  Scenario Outline: Etsy search title verification
#    When User searches for "<searchValue>"
#    Then User should see "<expectedTitle>" in Etsy title
#    Examples: different data sets
#  #command option L for Mac
#      | searchValue         | expectedTitle       |
#      | custom wooden spoon | Custom wooden spoon |
#      | wooden spoon        | Wooden spoon        |
