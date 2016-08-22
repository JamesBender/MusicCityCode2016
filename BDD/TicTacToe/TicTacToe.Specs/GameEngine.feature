Feature: Tic Tac Toe
	In order to determine who the winner of the game as
	As a Player
	I want to be told who (if anyone) won the game

Scenario: Empty board ends with a non descision
	Given I have a tic tac toe board
	And the board is empty
	When I determine the winner
	Then the result will be a non-descison

Scenario: When the top row is all X then X wins
	Given I have a tic tac toe board
	And the top row is all "X"
	When I determine the winner
	Then the result will be "X"

Scenario: When the top row is all Y then Y wins
	Given I have a tic tac toe board
	And the top row is all "Y"
	When I determine the winner
	Then the result will be "Y"

Scenario: When the board looks like this then X wins
	Given I have a tic tac toe board
	And it looks like this
	| col1 | col2 | col3 |
	| X    |      | O    |
	| O    | X    |      |
	| O    |      | X    |
	When I determine the winner
	Then the result will be "X"