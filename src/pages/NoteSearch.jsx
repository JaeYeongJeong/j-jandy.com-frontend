import { Await, defer, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
import { fetchNotes } from '../Util/http';
import NoteHeader from '../components/NoteHeader';
import SearchedNotesList from '../components/SearchedNote';

export default function NoteSearch() {
  const { searchResult } = useLoaderData();

  return (
    <div className="notes">
      <NoteHeader />
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={searchResult}>
          {(loadedNote) => {
            if (loadedNote.length === 0) {
              return (
                <p style={{ fontSize: '24px' }}>Search results not found.</p>
              );
            }
            return <SearchedNotesList notes={loadedNote} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
}

export function loader({ request, params }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('query');

  return defer({
    searchResult: fetchNotes({ searchTerm }),
  });
}
