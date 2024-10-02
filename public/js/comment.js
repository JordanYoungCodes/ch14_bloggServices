const newCommentFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const comment = document.querySelector('#comment').value.trim();

       const urlParts = window.location.pathname.split('/');
        const blogId = urlParts[urlParts.length - 1];
        
        console.log('Title:', title);
        console.log('Comment:', comment);
        console.log('Blog ID:', blogId);



  if (title && comment) {
    try {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ title, comment, blog_id: blogId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
 
        document.location.replace(`/blog/${blogId}`);
      } else {
        alert('Failed to create comment');
      }
    } catch (error) {
      console.error('Error creating comment:', error);
      alert('Failed to create comment due to an error.');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const urlParts = window.location.pathname.split('/');
    const blogId = urlParts[urlParts.length - 1]; 

    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace(`/blog/${blogId}`); // comments or blog.hb
      } else {
        alert('Failed to delete comment');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert('Failed to delete comment due to an error.');
    }
  }
};


document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentFormHandler);

document
  .querySelector('.comment-list')
  .addEventListener('click', delButtonHandler);