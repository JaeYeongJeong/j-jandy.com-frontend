import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHome } from '../../redux/actions';

export default function NoteHeader() {
  const searchElement = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const session = useRouteLoaderData('root');
  const isMobile = useSelector((state) => state.isMobile);
  const isHome = useSelector((state) => state.isHome);
  function handleSubmit(event) {
    event.preventDefault();
    const searchTerm = searchElement.current.value.trim();

    navigate(`/notes/search?query=${searchTerm}`);
  }

  function handleAdd() {
    const isAuthentiacted = session.session.isAuthenticated;
    if (!isAuthentiacted) {
      if (confirm('로그인이 필요합니다')) {
        return navigate('/login');
      }
    }
    return navigate(`/notes/create`);
  }

  function handleHome() {
    event.preventDefault();
    dispatch(setHome(true));
  }

  return (
    <div className="note-header-container">
      <form onSubmit={handleSubmit}>
        {isMobile && (
          <button type="button" onClick={handleHome}>
            home
          </button>
        )}
        <input type="search" ref={searchElement} />
        <button type="submit">search</button>
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
}
