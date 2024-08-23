import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import { useRef } from 'react';

export default function NoteHeader() {
  const searchElement = useRef();
  const navigate = useNavigate();
  const session = useRouteLoaderData('root');

  function handleSubmit(event) {
    event.preventDefault();
    const searchTerm = searchElement.current.value.trim();

    navigate(`/notes/search?query=${searchTerm}`);
  }

  function handleAdd() {
    // const isAuthentiacted = session.session.isAuthenticated;
    // if (!isAuthentiacted) {
    //   if (confirm('로그인이 필요합니다')) {
    //     navigate('/login');
    //   }
    // } else {
    //   navigate(`/notes/create`);
    // }
    navigate(`/notes/create`);
  }

  return (
    <div className="note-header-container">
      <form onSubmit={handleSubmit}>
        <input type="search" ref={searchElement} />
        <button type="submit">search</button>
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
}
