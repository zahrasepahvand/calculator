
# Calculator App

A simple calculator app built with **React** and **Vite**. This project demonstrates advanced React concepts like **React Context**, **React Router**, **React Hooks**, and **useMemo** for optimized performance.

### Features

- Simple and clear user interface

- Supports addition, subtraction, multiplication, and division

- Responsive design for mobile and desktop

- Smooth and fast user experience



## Calculator Overview

In this image, you can see the calculator's home screen, with all the basic operation buttons available.


## Using Addition and Subtraction

An example of performing addition and subtraction on numbers entered by the user.

## Mobile or Responsive View

Responsive design allows the user to easily use the calculator on mobile devices.

---

## Upcomming Features

* Basic arithmetic functions: addition, subtraction, multiplication, and division.
* Built with **React**, **Vite**, and **Semantic UI**.
* User-friendly, mobile-responsive UI.
* Supports **dark mode** for better user experience.
* History and memory functions to store previous calculations.

---

## Tasks to Improve the Calculator

Here are the **4 frontend tasks** to improve the calculator app using advanced React features:

---

### 1. Implement Global State with React Context

**Task**: Use **React Context** to manage global state (such as `display`, `firstValue`, `operator`, and `history`) across the entire calculator app.

**Goal**: Centralize state management for shared data between components (`Display`, `Button`, `History`) without needing to pass props down through multiple levels.

---

### 2. Add Routing with React Router for Different Calculator Modes

**Task**: Use **React Router** to create separate pages or routes for different modes of the calculator (e.g., **Basic Mode**, **Scientific Mode**, or **History Mode**).

**Goal**: Allow users to switch between different calculator features or modes, providing a better and more organized user experience.

**Example Routes**:

* `/basic`
* `/scientific`
* `/history`

---

### 3. Optimize Calculations with `useMemo`

**Task**: Use the **`useMemo`** hook to memoize the calculation results. For instance, memoize the result of arithmetic operations to avoid unnecessary recalculations when the same operation and values are repeated.

**Goal**: Improve performance, especially with repeated calculations or a large history of results.

---

### 4. Manage Button States with React Hooks

**Task**: Create a custom **React hook** (e.g., `useButtonState`) to handle the state of individual calculator buttons (e.g., whether a button is pressed, disabled, or active).

**Goal**: Simplify the logic for managing button interactions and improve maintainability by encapsulating button state management within reusable hooks.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/calculator-app.git
   cd calculator-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`.

---

## Technologies Used

* **React**: JavaScript library for building user interfaces.
* **Vite**: Fast build tool and development server.
* **Semantic UI**: CSS framework for UI components.
* **React Router**: For navigation and routing between different calculator modes.
* **React Context**: For managing global state across the app.
* **useMemo**: To optimize performance by memoizing results.

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make changes, and create a pull request. Contributions are always welcome!

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
