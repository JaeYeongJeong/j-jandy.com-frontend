import NoteCard from './NoteCard';

export default function NotesList({ notes }) {
  return (
    <ul className="notes-container">
      {notes.map((note) => (
        <NoteCard note={note} key={note.id} />
      ))}
    </ul>
  );
}
