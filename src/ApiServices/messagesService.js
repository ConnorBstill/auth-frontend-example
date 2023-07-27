export const getLastMessages = async () => {
  const jwt = localStorage.getItem('chatappjwt');

  const fetchResponse = await fetch('http://localhost:8080/last-messages', {
    method: 'GET',
    headers: {
      // 'Content-Type': 'application/json'
      Authorization: `Bearer ${jwt}`
    }
  });

  const data = await fetchResponse.json();

  console.log(data)

  return data;
}