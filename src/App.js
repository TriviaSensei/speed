import './App.css';
import React, { useState } from 'react';
// import { Modal } from 'react-bootstrap';
import Target from './components/Target.jsx';
import Timer from './components/Timer.jsx';
import Scoreboard from './components/Scoreboard';
import SubmitButton from './components/SubmitButton';
import ButtonContainer from './components/ButtonContainer';
import EndGameModal from './components/EndGameModal';
import useInterval from './components/hooks/useInterval';
import useLocalStorage from './components/hooks/useLocalStorage';

const startTime = 45;

function App() {
	const [state, setState] = useState({
		score: 0,
		gameOn: false,
		timeLeft: startTime,
		target: 0,
		value: 0,
		timer: 0,
	});

	const [highScore, setHighScore] = useLocalStorage('hs', 0);

	function clearHighScore() {
		setHighScore(0);
	}

	const [modalOpen, setModalOpen] = useState(false);

	const vals = [64, 32, 16, 8, 4, 2, 1];

	function getNewTarget() {
		let newValue = Math.floor(Math.random() * 125) + 3;
		while (newValue === state.value || vals.includes(newValue)) {
			newValue = Math.floor(Math.random() * 125) + 3;
		}
		setState((prevState) => {
			return { ...prevState, target: newValue };
		});
	}

	function submitGuess() {
		if (state.gameOn && state.target === state.value) {
			setState((prevState) => {
				return {
					...prevState,
					timeLeft: prevState.timeLeft + (prevState.timeLeft <= 5 ? 2 : 1),
					score: prevState.score + 1,
				};
			});
		}
		getNewTarget();
		setState((prevState) => {
			return {
				...prevState,
				value: 0,
			};
		});
	}

	useInterval(decrementTimer, state.gameOn ? 100 : 0);

	function decrementTimer() {
		setState((prevState) => {
			return {
				...prevState,
				timeLeft: Math.max(0, prevState.timeLeft.toFixed(1) - 0.1),
				gameOn: prevState.timeLeft > 0,
			};
		});
		if (state.timeLeft <= 0) {
			setState((prevState) => {
				return {
					...prevState,
					value: 0,
					target: 0,
				};
			});
			if (state.score > highScore) {
				setHighScore(state.score);
			}
			setModalOpen(true);
		}
	}

	function startGame() {
		if (!state.gameOn) {
			setState((prevState) => {
				return {
					...prevState,
					timeLeft: startTime,
					gameOn: true,
					value: 0,
					score: 0,
				};
			});
			getNewTarget();
		}
	}

	function closeModal() {
		setModalOpen(false);
	}

	return (
		<div>
			<Target
				target={state.target}
				className="gameLabel"
				setNewTarget={getNewTarget}
				setGameState={setState}
				gameOn={state.gameOn}
				value={state.value}
			/>
			<ButtonContainer
				value={state.value}
				setGameState={setState}
				gameOn={state.gameOn}
				vals={vals}
			/>
			<div
				style={{
					width: '362px',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '20px',
					marginBottom: '20px',
				}}
			>
				<SubmitButton
					label={state.gameOn ? state.value : 'Start'}
					setGameState={setState}
					startTime={startTime}
					getNewTarget={getNewTarget}
					startGame={startGame}
					submitGuess={submitGuess}
					setModalOpen={setModalOpen}
				/>
				<Timer timeLeft={state.timeLeft} setGameState={setState} />
				<Scoreboard score={state.score} />
			</div>

			<EndGameModal
				show={modalOpen}
				onHide={closeModal}
				score={state.score}
				highScore={highScore}
				clearHighScore={clearHighScore}
			/>
		</div>
	);
}

export default App;
