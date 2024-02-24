export default function GameBoard(props){
    /* Redundant as log already stores turns, in order. So better
    const [gameBoard, setGameBoard] = useState(initialGameBoard)
    function gameBoardHandler(rowIdx, colIdx) {
        setGameBoard((prevGameBoard) => {
Directly updating as 'prevGameBoard[rowIdx][colIdx] = 'X'' isn't recommended as state is an object/ array, you update that state in an immutable way, which simply means you create a copy of the old state, so a new object/ array first, and you then just change that copy instead of that existing object/ array.
If your state is an object/ array, they are reference value in JS. Updating like what we did previously, would be updating the old value in-memory immediately, even before this scheduled state update was executed by React, leading to bugs or side effects
            const updatedGameBoard = [...prevGameBoard.map(innerArr => [...innerArr])]
            updatedGameBoard[rowIdx][colIdx] = props.activeSymbol
            return updatedGameBoard
        })
        Switch turns
        props.onSelectSq()
        //Now passing board instead of turns
    } */

    
    //<ol>->3<li>->1<ol>->3<li> can't hardcode like this as needed to be updated dynamically, with the symbol of player that clicked square
    return (
        <>
        <ol id="game-board">
        {props.board.map(
            (row, rowIdx) => <li key={rowIdx}>
                <ol>{row.map((symbol, colIdx) => <li key={colIdx}>
                    {/* Disable button if symbol isn't null, either 'X'  or 'O'*/}
                    <button onClick={() => props.onSelectSq(rowIdx, colIdx)} disabled={symbol !== null}>{symbol}</button>
                    </li>)}</ol>
            </li>
            )}
        </ol>
        </>
    )
}
