const filePickerElement = document.getElementById('image');
const imagePreviewElement = document.getElementById('image-preview');

function showPreivew() {
  const files = filePickerElement.files;
  if (!files || files.length === 0) {
    imagePreviewElement.style.display = 'none';
    return 0;
  }
  const pickedFile = files[0];

  imagePreviewElement.src = URL.createObjectURL(pickedFile);
  imagePreviewElement.style.display = 'block';
}

filePickerElement.addEventListener('change', showPreivew);