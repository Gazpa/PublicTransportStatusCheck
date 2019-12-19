The official Public Transport Status Check (3H Max after setup Home task)

- To run the project first you need to npm install in the folder location

- Then run npm start

Tech choices

- axios is the best and lightest library I know out there to make the API calls. Easy to use and reliable. Wrapping the results in a promise object makes it easy to work with.

- Redux is a great choice to keep application state and I have already adquired experience on how to use it

- Redux Thunk is here to handle function as actions dispatches in middleware, so it would check the type that returns each action and handle the ones that are functions

- React Router to handle navigation

Things to improve, having only 2 hours to develop it left me with a list of 'ToDos' pending:

- Wanted to animate the sidebar to hide and show with an arrow button above

- Adding a way to condition the public transports types we fetch from the API

- Add a map to the Bike Points page
