const app = "I don't do much.";

const token = '065d3b08c94396a8eddfa50375264d4eee4253e0';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
