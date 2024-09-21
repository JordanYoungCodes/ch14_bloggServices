const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const comment = document.querySelector('#comment-desc').value.trim();
  
    if (title &&  comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ title, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/comment');
      } else {
        alert('Failed to create blog');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/comment');
      } else {
        alert('Failed to delete comment');
      }
    }
  };


  document
    querySelector('.new-comment-form')
    addEventListener('submit', newCommentFormHandler);

    document
    .querySelector('.comment-list')
    .addEventListener('click', delButtonHandler);