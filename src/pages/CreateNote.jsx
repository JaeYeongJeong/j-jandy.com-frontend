import { useNavigate } from 'react-router-dom';
import NoteForm from './NoteForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function CreateNote() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.app.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <NoteForm method="POST" /> : null;
}
