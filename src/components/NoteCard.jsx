import { Link } from 'react-router-dom';
import apiUrl from '../Util/api-url';

export default function NoteCard({ note }) {
  const cardImage = note.image
    ? `${apiUrl}/${note.image}`
    : `${apiUrl}/noImage.jpg`;

  const formatedDate = new Date(note.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    // weekday: 'long',
  });

  return (
    <div className="note-item">
      <Link to={`/notes/${note.id}`} className="note-item-link">
        <img src={cardImage} alt={''} />
        <div className="note-item-content-container">
          <div className="note-item-content">
            <h2 className="note-item-title">{note.title}</h2>
            <p className="note-item-description"> {note.description}</p>
          </div>
          <div className="note-item-date">
            <p>{formatedDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
