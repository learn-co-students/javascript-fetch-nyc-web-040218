const token = '31116f181c6cc96d7d00737e0f560f0dabc6e4a2'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
