const postForm = document.getElementById('post-form');

// Handle when a user submits feedback
if (postForm) {
  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get the feedback text from the DOM and assign it to a variable
    let title = document.getElementById('titleOfPost').value;
    // Get the username text and add it to a variable
    let post = document.getElementById('bodyOfPost').value.trim();

    const postObj = {
      title,
      post,
      user_id: userId,
    };

    // Fetch POST request to the server
    try {
      console.log(postObj)
      const response = await fetch('api/users/dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postObj),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
       
      }

      const data = await response.json();
      alert(data.status);
      
    } catch (error) {
      console.error('An error occurred:', error);
    } 
  });
}