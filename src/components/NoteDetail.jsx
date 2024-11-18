import { useNavigate, useParams } from 'react-router-dom';
import { deleteNote } from '../Util/http';
import { s3BucketUrl } from '../Util/api-url';
import { useDispatch, useSelector } from 'react-redux';
import { scrollToTop } from '../Util/scrollToTop';
import { deleteNoteAction } from '../../redux/actions';

export default function NoteDetail({ note }) {
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.app.isAuthenticated);

  const cardImage = note.image ? `${s3BucketUrl}/${note.image}` : '';

  const formatedDate = new Date(note.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    // weekday: 'long',
  });

  function editHandler() {
    scrollToTop();
    return navigate(`/notes/edit/${param.id}`);
  }

  async function deleteHandler() {
    if (confirm('정말로 삭제하시겠습니까?')) {
      await deleteNote(param.id);
      dispatch(deleteNoteAction(param.id));
      return navigate('/notes');
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
      <div className="note-footer-container">
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
