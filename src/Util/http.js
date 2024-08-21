import { json } from 'react-router-dom';

let apiUrl = 'https://localhost:8080';

if (process.env.API_URL) {
  apiUrl = process.env.API_URL;
};

export async function fetchNotes({ searchTerm }) {
  let url = `${apiUrl}/notes`;

  if (searchTerm) {
    url += '/search?query=' + searchTerm
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw json(
      {
        message: 'Could not fetch notes.',
      },
      {
        status: 500,
      }
    );
  }

  const { notes } = await response.json();
  return notes;
}

export async function fetchNote({ id }) {
  let url = `${apiUrl}/notes/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw json(
      {
        message: 'Could not fetch note. id: ' + id,
      },
      {
        status: 500,
      }
    );
  }

  const { note } = await response.json();
  return note;
}

export async function createNewNote(noteData) {
  const url = `${apiUrl}/notes`;

  const formData = new FormData();
  formData.append('title', noteData.title);
  formData.append('image', noteData.image);
  formData.append('date', noteData.date);
  formData.append('description', noteData.description);

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
    credentials: 'include',
  });

  if (!response.ok) {
    if (response.status(404)) {
      throw new Error(response.message);
    } else {
      throw new Error('Could not edit note.');
    }
  }

  const { insertedId } = await response.json();

  return insertedId;
}

export async function editNote(noteData, id) {
  const url = `${apiUrl}/notes/${id}`;

  const formData = new FormData();
  formData.append('title', noteData.title);
  formData.append('image', noteData.image);
  formData.append('date', noteData.date);
  formData.append('description', noteData.description);

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      body: formData,
      credentials: 'include',
    });

    if (!response.ok) {
      let errorMessage = 'Could not edit note.';

      if (response.status === 401 || response.status === 404) {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      }

      throw new Error(errorMessage);
    }

    const { editedId } = await response.json();
    return editedId;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong while edit note.')
  }
}

export async function deleteNote(id) {
  const url = `${apiUrl}/notes/${id}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      credentials: 'include',
    })

    if (!response.ok) {
      let errorMessage = 'Could not delete note.';

      if (response.status === 401 || response.status === 404) {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      }

      throw new Error(errorMessage);
    }

    const { deleteId } = await response.json();
    return deleteId;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong while delete note.')
  }
}

export async function checkSession() {
  try {
    const response = await fetch(`${apiUrl}/session`, {
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error('Failed to check session');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { isAuthenticated: false };
  }
}

export async function logout() {
  try {
    const response = await fetch(`${apiUrl}/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error('Failed to logout');
    }
  } catch (error) {
    console.error(error);
  }
}
