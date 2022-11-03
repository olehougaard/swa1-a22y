import { Store } from '@reduxjs/toolkit';
import * as React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux'
import { otherPlayer } from './model';
import { State, Dispatch, gameSlice } from './store';
import { concedeThunk, initThunk, joinGameThunk, makeMoveThunk, newGameThunk, pollForMove, pollForOtherPlayerThunk, pollGamesThunk } from './thunks';
import './view.css';

const Board = ({enabled}: {enabled: boolean}) => {
  const gameState = useSelector((s: State) => s.game)
  const {board} = gameState.game
  const dispatch: Dispatch = useDispatch()
  return (
    <table>
      <tbody>
        { board.map((row, x) =>
            <tr key={x}>{ row.map((tile, y) => {
              if (tile)
                return <td key = {x + '' + y} className = { tile }/>
              else if (enabled)
                return <td key = {x + '' + y} className = {'blank'} onClick = {() => dispatch(makeMoveThunk(x, y))}/>
              else
              return <td key = {x + '' + y} className = {'inert'}/>
            })
            }</tr>
        )}
      </tbody>
    </table>
  )
}

const Lobby = () => {
  const [name, setName] = React.useState('Name')
  const games = useSelector((s: State) => s.lobby)
  const dispatch: Dispatch = useDispatch()
  React.useEffect(() => {dispatch(pollGamesThunk)})

  return (
    <div>
      <h1>Lobby</h1>
      {
        games.map(({gameNumber, gameName}) => 
          <div key={gameNumber}>
            {gameName}
            <button className = 'join' onClick = {() => dispatch(joinGameThunk(gameNumber))} >Join</button>
          </div>)
      }
      <input type='text' onChange={e => setName(e.target.value)} value={name}/>
      <button id = 'new' onClick={() => dispatch(newGameThunk(name))}>New game</button>
    </div>
  )
}

const WaitingForGame = () => {
  const game = useSelector((s: State) => s.game.game)
  const dispatch: Dispatch = useDispatch()
  React.useEffect(() => {dispatch(pollForOtherPlayerThunk(game))})
  return (
    <div>
      <h1>Waiting for other player...</h1>
    </div>
  )
}

const Active = () => {
  const {player} = useSelector((s: State) => s.game)
  const dispatch: Dispatch = useDispatch()
  return <div>
    <h2>Your turn, { player }</h2>
    <Board enabled = {true}/>
    <button onClick = {() => dispatch(concedeThunk)}>Concede game</button>
  </div>
}

const WaitingForTurn = () => {
  const {player, game} = useSelector((s: State) => s.game)
  const dispatch: Dispatch = useDispatch()
  React.useEffect(() => {dispatch(pollForMove(game.gameNumber, player))})
  return <div>
    <h2>Waiting for { otherPlayer(player) }</h2>
    <Board enabled = {false}/>
  </div>
}

const GameOver = () => {
  const {game} = useSelector((s: State) => s.game)
  const dispatch: Dispatch = useDispatch()
  return <div>
    <h1>Game {game.gameNumber} complete</h1>
    <h2>{game.stalemate? 'Stalemate' : game.winState.winner + ' won'}</h2>
    <Board enabled = {false}/>
    <button onClick = {() => dispatch(gameSlice.actions.leaveGame())}>Return to lobby</button>
  </div>
}

const Playing = () => {
  const {game, player} = useSelector((s: State) => s.game)
  return <div>
    <h1>Playing {game.gameName}</h1>
    {game.inTurn === player? <Active/> : <WaitingForTurn/>}
  </div>
}

const GamePage = () => {
  const {game} = useSelector((s: State) => s.game)
  if (game.winState || game.stalemate)
    return <GameOver/>
  else
    return <Playing/>
}

const Page = () => {
  const dispatch: Dispatch = useDispatch()
  React.useEffect(() => {dispatch(initThunk)})
  const gameState = useSelector((s: State) => s.game)
  switch(gameState.mode) {
    case 'no game':
      return <Lobby/>
    case 'waiting':
      return <WaitingForGame/>
    case 'playing':
      return <GamePage/>
  }
}

export const View = (store: Store<State>) =>
<Provider store={store}>
  <Page></Page>
</Provider>
