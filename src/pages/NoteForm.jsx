import React, { useState } from 'react';
import {
  Form,
  useNavigate,
  useNavigation,
  redirect,
  useActionData,
} from 'react-router-dom';
import { createNewNote, editNote } from '../Util/http';

export default function NoteForm({ method, note }) {
  const [imagePreview, setImagePreview] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData();

  function handleImageChange(evnet) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setImagePreview('');
  }

  const isSubmitting = navigation.status === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  React.useEffect(() => {
    if (actionData && actionData.error) {
      setError(actionData.error);
      alert(actionData.error);
    }
  }, [actionData]);

  return (
    <div className="note-form-container">
      <Form method={method} as="form" enctype="multipart/form-data">
        <div className="note-form-chd">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            required
            defaultValue={note ? note.title : ''}
          />
        </div>
        <div className="note-form-chd">
          <label htmlFor="image">Image</label>
          {imagePreview && (
            <img
              id="image-preview"
              src={imagePreview}
              alt="Your picked image."
            />
          )}
          <input
            id="image"
            type="file"
            name="image"
            accept=".jpg,.png,.jpeg"
            onChange={handleImageChange}
          />
        </div>
        <div className="note-form-chd">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            required
            defaultValue={note ? note.description : ''}
          />
        </div>
        <div className="note-form-control">
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Save'}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request, params }) {
  const method = request.method;

  const data = await request.formData();
  const date = new Date().toLocaleString('en-US');

  const noteData = {
    title: data.get('title'),
    image: data.get('image'),
    date: date,
    description: data.get('description'),
  };

  try {
    if (method === 'POST') {
      await createNewNote(noteData);
    }

    if (method === 'PATCH') {
      const id = params.id;
      await editNote(noteData, id);
    }

    return redirect('/notes');
  } catch (error) {
    return {
      error: error.message,
    };
  }
}
