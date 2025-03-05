## Sunrise Timer

Run the app with `npm i` and `npm run dev` to see the sunrise time and countdown timer for a location, starting with Jackson WY :)

App will be running at [http://localhost:3000](http://localhost:3000) in your browser.

## The Stack

#### API

Sunrise timer is powered by SunriseSunset.io which is a free, open source API.

#### UI

Chakra UI is used for the UI components.
Unsplash for the background image.

#### Frontend

Next.js is used for the frontend.

- **todo find an API to get coordinates of the user**
- **todo find an API to get the sunrise time of the user's location**
- **todo find a way to implement a countdown timer to the sunrise time**
- **todo find a way to implement a map of the user's location**

## The Process

In an effort to use this project as a learning experience, I will be iterating in the following way:

### Jackson Hole, WY

:white_check_mark: The first iteration of this app will only get the sunrise time for Jackson Hole, WY. This will also include a countdown til sunrise :)

### Coordinate Lookup

The next iteration will include a feature to get the coordinates of the user's location, which can be used to look up the sunrise time automatically.

### Sunrise Timer

The final iteration will include a countdown timer to the sunrise time.

### Future Iterations

- Improved UI implementations, such as a map of the user's location, and a more detailed countdown timer.
- Development improvements— I will be looking to improve my development process as I go, including better git practices, more detailed commit messages, and more detailed documentation.
- Codestyle enforcing will be implemented.
- Testing— I will be looking to implement testing in the future, including unit tests and integration tests.
- Deployment— I will be looking to deploy this app to a live server in the future, likely on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
