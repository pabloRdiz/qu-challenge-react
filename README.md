## Project Name

**qu-challenge-react**

### Deployment

This project is deployed on Netlify, and you can access the live application by following this link:

[**Live Demo**](https://qu-challenge-react.netlify.app/)

### Description

This project is a React application created with Vite, Vitest, React Testing Library, and Mock Service Worker. It includes configurations for development, building, linting, and testing. This README provides information on how to set up the project and execute various commands.

### Test coverage

**93.87 %**

### Prerequisites -> Must have installed

- Node.js (Version >= 18)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pabloRdiz/qu-challenge-react.git

   ```

2. Access folder

   ```bash
   cd qu-challenge-react

   ```

3. Install dependencies:
   ```bash
   yarn
   ```

### Available Scripts

- Development Server. Run the development server:
  ```bash
  yarn dev
  Open http://localhost:5173/ in your browser to view the app.
  ```

### Linting

- Lint the project:
  ```bash
  yarn lint
  ```

### Testing

- Run tests:

  ```bash
  yarn test

  ```

- Run tests coverage:
  ```bash
  yarn coverage
  ```

### Disclaimer: Infinite Scroll Without Data Limitation

This application features an infinite scroll functionality that continuously loads more data as you scroll. However, it currently does not implement a mechanism to check whether there is no more data to load. As a result, the application will keep attempting to fetch additional data even if there is none, potentially leading to unnecessary network requests.

### Questions

- What's a Closure?
  - A closure is a concept in programming languages where a function retains access to variables from its outer (enclosing) scope, even after the outer function has finished execution. In other words, a closure allows a function to "close over" and remember the environment in which it was created.
- Where in the code is there a closure?
  - src/features/ListPlanets/hooks/usePlanets/usePlanets.ts
- Which are the potential side-effects in any function?
  - A side effect refers to any change in the program state that is observable outside the function. Functions that produce side effects can modify variables outside their own scope, interact with the DOM, make network requests, or have other observable effects.
- Could you point out any of these cases in your code? - I strive to write code with minimal side effects to maintain a clear and predictable program state.
  **_Note: I'm aware that the Select component may introduce a side effect due to the following warning:
  Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>._**
- Are they expected?
  - No, they aren't.
- Can they be avoided?
  - In the current implementation, I am conscious of the potential side effect related to the Select component warning. While there are strategies to address this warning in React, I have opted to dedicate time to building the application in Vue.
  - By working on the application in Vue, I aim to showcase my versatility and proficiency in multiple technologies. Vue provides a different approach to handling certain aspects, and this decision aligns with my goal to demonstrate a breadth of skills. I appreciate your understanding and am open to any further discussions or recommendations regarding best practices in either React or Vue.
