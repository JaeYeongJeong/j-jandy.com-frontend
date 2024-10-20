import React, { useEffect, useState } from 'react';
import {
  Form,
  useNavigate,
  useNavigation,
  redirect,
  useActionData,
} from 'react-router-dom';
import { checkSession, createNewNote, editNote } from '../Util/http';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../../redux/actions';

export default function NoteForm({ method, note }) {
  const [imagePreview, setImagePreview] = useState('');
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      actionData?.isAuthenticated == true ||
      actionData?.isAuthenticated == false
    ) {
      dispatch(setAuthenticated(actionData.isAuthenticated));
    }
  }, [actionData, dispatch]);

  function handleImageChange(evnet) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const isSubmitting = navigation.status === 'submitting';

  function cancelHandler() {
    navigate(-1);
  }

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
        <div className="note-form-chd">
          <div className="note-footer-container">
            <button type="button" onClick={cancelHandler}>
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Save'}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request, params }) {
  try {
    const sessionData = await checkSession();
    const isAuthenticated = sessionData.isAuthenticated;
    if (!isAuthenticated) {
      if (confirm('세션 만료')) {
        redirect('/login');
      }
      return { isAuthenticated: isAuthenticated };
    }
  } catch (error) {
    throw new Error(
      error.message || 'Something went wrong while check session.'
    );
  }

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
    } else if (method === 'PATCH') {
      const id = params.id;
      await editNote(noteData, id);
    } else {
      throw new Error('Unsupported method');
    }

    return redirect('/notes');
  } catch (error) {
    throw new Error(error.message || 'Something went wrong while form action.');
  }
}
