const postForm = document.getElementById('post-form');
console.log("hello")

// Handle when a user submits feedback

  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('INSIDE FORM')
    // Get the feedback text from the DOM and assign it to a variable
    let title = document.getElementById('title').value;
    // Get the username text and add it to a variable
    let post = document.getElementById('body').value.trim();
    const postObj = {
      title,
      post,
  
    };
    console.log('TITLE', title);
    console.log('POST', post);
    p = document.createElement('p').innerHTML = (`${title}, ${post}`)
    document.body.appendChild(p);
   
    // Fetch POST reaquest to the server
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
      
      
    } catch (error) {
      console.error('An error occurred:', error);
    } 
  });
