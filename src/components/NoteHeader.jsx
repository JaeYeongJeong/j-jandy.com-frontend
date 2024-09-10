import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHome } from '../../redux/actions';
import menuIcon from '../assets/icon/menu-burger.png';
import plusIcon from '../assets/icon/plus.png';
import searchIcon from '../assets/icon/search.png';

export default function NoteHeader() {
  const searchElement = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const session = useRouteLoaderData('root');
  const isMobile = useSelector((state) => state.isMobile);

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
      <button
        type="button"
        onClick={handleHome}
        style={{ visibility: isMobile ? 'visible' : 'hidden' }}
      >
        <img className="icon" src={menuIcon} alt="Menu Icon" />
      </button>
      <div className="searchbar-container">
        <div className="block" />
        <form onSubmit={handleSubmit}>
          <input type="search" ref={searchElement} />
          <button type="submit">
            {' '}
            <img className="icon" src={searchIcon} alt="search" />
          </button>
        </form>
      </div>
      <button type="button" onClick={handleAdd}>
        <img className="icon" src={plusIcon} alt="add note" />
      </button>
    </div>
  );
}
