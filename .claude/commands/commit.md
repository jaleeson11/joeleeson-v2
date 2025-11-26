---
description: Run tests, linting, and build checks, then stage and commit changes
allowed-tools:
  - Bash
argument-hint: [optional commit message]
---

Execute the following pre-commit workflow:

1. **Run tests**: Execute the project's test suite (detect and use npm test, pytest, cargo test, or appropriate test command)
2. **Check linting**: Run the project's linter (detect and use eslint, flake8, ruff, clippy, or appropriate linter)
3. **Check build**: Run the project's build command if applicable (npm run build, cargo build, etc.)
4. **Review results**: If any checks fail, stop and report the errors clearly

If all checks pass: 5. **Stage changes**: Run `git add .` to stage all changes 6. **Remove Claude co-authorship**: Check the staged commit for any "Co-authored-by: Claude" trailers and remove them before committing 7. **Create commit**: Generate a conventional commit message with format `<type>(<scope>): <description>` where:

- type: feat, fix, chore, docs, style, refactor, test, perf
- scope: optional, based on files changed
- description: clear, concise, imperative mood
- Use $1 as the commit message if provided, otherwise generate an appropriate one based on the changes

8. **Show summary**: Display the commit details and ask if I want to push to remote

Use extended thinking to analyze the codebase and determine the appropriate commands to run.
