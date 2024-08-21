import NoteCard from './NoteCard';

export default function SearchedNotesList({ notes }) {
  return (
    <ul className="notes-search-container">
      {notes.map((note) => (
        <NoteCard note={note} key={note.id} />
      ))}
    </ul>
  );
}
