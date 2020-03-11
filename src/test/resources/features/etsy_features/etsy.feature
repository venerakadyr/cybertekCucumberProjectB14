Feature: Etsy search functionality
  CBT-25 Agile Story; can be placed here

    Background: User is already on Etsy home page
      Given User is on Etsy home page
    Scenario: Etsy search title verification
    When user search for wooden spoon
    Then User should see wooden spoon in Etsy title

#  @etsy
#  Scenario: Etsy search title verification
#    When user search for "wooden spoon"
#    Then User should see "Wooden spoon" in Etsy title
  @etsy
  Scenario Outline: Etsy search title verification
    When User searches for "<searchValue>"
    Then User should see "<expectedTitle>" in Etsy title
    Examples: different data sets
  #command option L for Mac
      |searchValue        |expectedTitle       |
      |custom wooden spoon| Custom wooden spoon|
      |wooden spoon       | Wooden spoon       |


@etsy2
  Scenario: Etsy search title verification
    When user search for "balloon"
    Then User should see "Balloon" in Etsy title