# Just do it

Track all your daily tasks in one place.

## Features
- Adding, removing and updating tasks.
- Setting priority of a task.
- Tasks saved in local storage for data persisiting.
- Adding lists to store related tasks together
- Searching for a task
## Installition
1) Download the app from github.
2) Install dependencies\
use `npm i`
3) Start development server (local environment) \
use `npm run dev`\
server should start on port: `3000`
4) For creating a production bundle\
use `npm run build`
## Tech stack
- **React**: for UI manipulation.
- **Redux**: for state managment.
- **MaterialUI v5**: for UI style, components, icons and theme.

## Side notes
I tried to make the app as close to a real app\
which includes sorting by priorities, showing the date of the creation of a task\
in a real scenario I would have added more features like:
- Adding due time
- Sharing tasks between pepole
- More tasks types

**IMPORTANT!**
Data saved in localstorage, which at some point might break due to pass the 5MB limit.\
in Real life app I would use a good database to store all data, I just wanted to do a quick POC and to persist the data.
