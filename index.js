require('dotenv').config()
const express = require('express')
const app = express()
const githubData={
    "login": "inamulhaqmayo",
    "id": 24813470,
    "node_id": "MDQ6VXNlcjI0ODEzNDcw",
    "avatar_url": "https://avatars.githubusercontent.com/u/24813470?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/inamulhaqmayo",
    "html_url": "https://github.com/inamulhaqmayo",
    "followers_url": "https://api.github.com/users/inamulhaqmayo/followers",
    "following_url": "https://api.github.com/users/inamulhaqmayo/following{/other_user}",
    "gists_url": "https://api.github.com/users/inamulhaqmayo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/inamulhaqmayo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/inamulhaqmayo/subscriptions",
    "organizations_url": "https://api.github.com/users/inamulhaqmayo/orgs",
    "repos_url": "https://api.github.com/users/inamulhaqmayo/repos",
    "events_url": "https://api.github.com/users/inamulhaqmayo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/inamulhaqmayo/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2016-12-28T17:07:10Z",
    "updated_at": "2025-01-11T11:27:15Z"
  }
// Use port from environment or default to 3000
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('this is home page request')
  })

  app.get('/login', (req, res) => {
    res.send('<h1>login at nodejs testing project</h1>')
  })
  app.get('/github', (req, res) => {
    res.json(githubData)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})