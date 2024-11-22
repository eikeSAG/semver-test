const config = {
    // tells semantic release to only use the main branch
    branches: ['main'],
    plugins: [
        // looks at all the commit-messages and increments the version ccording to the found prefixes
        '@semantic-release/commit-analyzer',
        // takes the commits from the analyzer and puts them into a markdown
        '@semantic-release/release-notes-generator',
        // takes assets and stages a commit and push then into the repo
        ["@semantic-release/git", {
            "assets": ["dist/*.js", "dist/*.js.map"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        // it creates the release in itself with a tag and marks the pull requests as released
        '@semantic-release/github'
    ]
};

module.exports = config;