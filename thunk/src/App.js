import React from 'react';
import { NewNoteInput } from './components/NewNoteInput';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from './redux/actions';
import { saveNotes, loadNotes } from './redux/notesReducer';

function App() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const onAddNote = (note) => {
    dispatch(addNote(note));
  };

  const onSave = () => {
    dispatch(saveNotes());
  };

  const onLoad = () => {
    dispatch(loadNotes());
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
      <hr />
      <button onClick={onSave}>Save</button>
      <button onClick={onLoad}>Load</button>
    </>
  );
}

export default App;
