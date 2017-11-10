export default (body = { }, method = 'POST') => ({ credentials: 'include', method: method, body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } });
