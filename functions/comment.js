const fetch = require("node-fetch")

const auth = process.env.GITHUB_PAT_TOKEN
const repo = process.env.GITHUB_REPO
const user = process.env.GITHUB_USER

exports.handler = async function (event, context, callback) {
  const text = await fetch(
    "https://api.github.com/repos/" + user + "/" + repo + "/contents/README.md",
    {
      headers: {
        Authorization:
          "Basic " + Buffer.from(user + ":" + auth).toString("base64"),
      },
    }
  ).then(res => res.text())

  callback(null, {
    statusCode: 200,
    body: text,
  })
}
