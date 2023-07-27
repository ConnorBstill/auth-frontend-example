
export const register = async (username, password) => {
  const fetchResponse = await fetch('http://localhost:8080/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  const data = await fetchResponse.json();

  return data;
}

export const logIn = async (username, password) => {
  const fetchResponse = await fetch('http://localhost:8080/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  const data = await fetchResponse.json();

  return data;
}

export const logOut = () => {
  localStorage.removeItem('chatappjwt');
}
