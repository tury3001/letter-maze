import { LetterMatrix } from './components/LetterMatrix';

const matrix = [
  [{ id: 11, letter: 'A' }, { id: 12, letter: 'G' }, { id: 13, letter: 'E' }, { id: 14, letter: 'L' }, { id: 15, letter: 'A' }, { id: 16, letter: 'C' }],
  [{ id: 21, letter: 'U' }, { id: 22, letter: 'E' }, { id: 23, letter: 'S' }, { id: 24, letter: 'A' }, { id: 25, letter: 'P' }, { id: 26, letter: 'O' }],
  [{ id: 31, letter: 'D' }, { id: 32, letter: 'M' }, { id: 33, letter: 'E' }, { id: 34, letter: 'T' }, { id: 35, letter: 'R' }, { id: 36, letter: 'I' }],
  [{ id: 41, letter: 'A' }, { id: 42, letter: 'U' }, { id: 43, letter: 'E' }, { id: 44, letter: 'O' }, { id: 45, letter: 'F' }, { id: 46, letter: 'S' }],
  [{ id: 51, letter: 'P' }, { id: 52, letter: 'A' }, { id: 53, letter: 'R' }, { id: 54, letter: 'R' }, { id: 55, letter: 'E' }, { id: 56, letter: 'D' }],
];

export const LettersMaze = () => {
  return (
    <>
      <div>
        <h1>Letters Maze</h1>
        <LetterMatrix matrix={ matrix } />
      </div>
    </>
  )
}
