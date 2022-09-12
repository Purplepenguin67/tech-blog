const logout = async function() {
  
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
  
    if (response.ok) {
      document.location.replace('/');
      alert('you are now logged out')
    } else {
      alert('have not logged out');
    }
  };
  
  
  document.querySelector('#logout-link').addEventListener('click', logout);
  