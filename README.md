# w381.github.io
github pages


Experimenting with LWC on github pages

Followed instructions from salesforce-oss/SF_Documentation/Notes.md

I have first run
- npm init lwr
- selected "Single Page App" project type
- selected "LWC" variant instead of "LWC (typescript)"
  - typescript is something to consider later
- next cd lwr-project
- npm install
- npm run dev

Next trying to build for prod

- npm run build:prod-compat

Copied .gitignore from C:\work\git_repos\github\salesforce-oss

commited all to git

Started the "prod" version locally by running
- npm run start
  - this serves application from 'site' folder, while 'npm run dev' serves it from src

Then copied complete content of /site folder to the root folder of w381.github.io repository
- overode index.html

Commit, push, test 

