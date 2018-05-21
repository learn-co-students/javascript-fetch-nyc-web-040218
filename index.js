const app = "I don't do much.";

const token = 'fd6075175d75e4d01fd1f5acd573bdc2f4b4e3cc'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
