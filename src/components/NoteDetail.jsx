import { useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import { deleteNote } from '../Util/http';

export default function NoteDetail({ note }) {
  const navigate = useNavigate();
  const session = useRouteLoaderData('root');
  const isAuthenticated = session.session.isAuthenticated;
  const param = useParams();

  let apiUrl = 'https://localhost:8080';

  if (import.meta.env.API_URL) {
    apiUrl = import.meta.env.API_URL;
  }

  const cardImage = note.image
    ? `${apiUrl}/${note.image}`
    : `${apiUrl}/noImage.jpg`;

  const formatedDate = new Date(note.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    // weekday: 'long',
  });

  function editHandler() {
    navigate(`/notes/edit/${param.id}`);
  }

  async function deleteHandler() {
    if (confirm('정말로 삭제하시겠습니까?')) {
      await deleteNote(param.id);

      navigate('/notes');
    }
    return;
  }

  return (
    <div className="note-detail">
      <article>
        <div className="note-detail-img">
          <img src={cardImage} alt={''} />
        </div>
        <div className="note-detail-contents">
          <h1>{note.title}</h1>
          <p>{formatedDate}</p>
          <div className="note-detail-description">
            <pre>{note.description}</pre>
          </div>
        </div>
      </article>
      <div className="note-header-container">
        {isAuthenticated && (
          <>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}
