using System;
using System.Collections.Specialized;
using NUnit.Framework;
using TechTalk.SpecFlow;
using TicTacToe.Core;

namespace TicTacToe.Specs
{
    [Binding]
    public class TicTacToeSteps
    {
        private string[,] _board;
        private GameEngine _gameEngine = new GameEngine();
        private string _result;

        [Given(@"I have a tic tac toe board")]
        public void GivenIHaveATicTacToeBoard()
        {
            _board = new string[3, 3] { { " ", " ", " " }, { " ", " ", " " }, { " ", " ", " " } };
        }
        
        [Given(@"the board is empty")]
        public void GivenTheBoardIsEmpty()
        {
            for (var idx = 0; idx < 3; idx++)
            {
                for (var y = 0; y < 3; y++)
                {
                    _board[idx, y] = string.Empty;
                }
            }
        }
        
        [When(@"I determine the winner")]
        public void WhenIDetermineTheWinner()
        {
            _result = _gameEngine.GetWinner(_board);
        }
        
        [Then(@"the result will be a non-descison")]
        public void ThenTheResultWillBeANon_Descison()
        {
            Assert.AreEqual(string.Empty, _result);
        }

        [Given(@"the top row is all ""(.*)""")]
        public void GivenTheTopRowIsAll(string p0)
        {
            _board[0, 0] = p0;
            _board[0, 1] = p0;
            _board[0, 2] = p0;
        }

        [Then(@"the result will be ""(.*)""")]
        public void ThenTheResultWillBe(string p0)
        {
            Assert.AreEqual(p0, _result);
        }

        [Given(@"it looks like this")]
        public void GivenItLooksLikeThis(Table table)
        {
            _board[0, 0] = table.Rows[0]["col1"];
        }


    }
}
