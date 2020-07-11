import React from 'react';
import Game from './components/Game';

const App = () => 

	<div class="container">
		<h1> Welcome to the classic game of <strong> Tic-Tac-Toe </strong> </h1>
		<h2> Rules: X goes first. Then 0. </h2>
		<h2> Click the box where you want to enter your X or O. </h2>
		<div class="game-style">
			<Game />
		</div>
	</div>

export default App;
