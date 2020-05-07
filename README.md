# gatsby-serverless-comments

This is a proof-of-concept for using Netlify serverless functions to let users add comments to a static website.

1. 👩 User enters a comment and clicks submit.
2. ⚙️ A serverless function receives the data.
3. 🔧 It reads the existing `comments.json` via GitHub's API, appends mine, and saves it.
4. 🚧 A new commit triggers a Netlify build.
5. ✔️ The new version of the website is deployed!

The new comment is visible ~30 seconds ⏰ after the first click.

<br>

## Why?

- Accept user comments and store them on GitHub. No database required.

- Avoid using third-party plugin solutions that leak your user's data.

<br>

## Setup

Set the following environmental variables on Netlify:

- `GITHUB_PAT_TOKEN` to your GitHub personal access token.
- `GITHUB_REPO` to the repository where this code is located.
- `GITHUB_USER` your GitHub username.

<br>

Deploy!
