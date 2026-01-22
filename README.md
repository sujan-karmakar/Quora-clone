# Quora Clone - REST API Project

A simple CRUD application built with Node.js and Express that mimics the core functionality of Quora posts. This project demonstrates the implementation of RESTful routing principles, server-side rendering with EJS, and modern glassmorphic styling.

## 🚀 Features

-   **View All Posts**: Browse a feed of all user posts.
-   **Create Post**: Interface to create new posts with a username and content.
-   **Read Post**: distinct view for individual posts with unique IDs (UUID).
-   **Update Post**: Edit the content of existing posts.
-   **Delete Post**: Remove posts from the feed.
-   **Glassmorphism UI**: Modern, dark-themed UI with frosted glass effects and responsive design.
-   **Interactive Elements**: Hover effects, glow animations, and FontAwesome icons.

## 🛠️ Tech Stack

-   **Backend**: Node.js, Express.js
-   **Templating**: EJS (Embedded JavaScript)
-   **Styling**: CSS3 (Variables, Flexbox, Grid, Glassmorphism)
-   **Utilities**: 
    -   `uuid` (for generating unique post IDs)
    -   `method-override` (to support PATCH/DELETE requests in HTML forms)
-   **Fonts/Icons**: Google Fonts (Poppins, Open Sans), Font Awesome 6

## 📦 Installation & Usage

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the server**
    ```bash
    nodemon index.js
    # OR
    node index.js
    ```

4.  **Access the application**
    Open your browser and visit: `http://localhost:8080/posts`

## 🛣️ API Routes (RESTful Endpoints)

| Method | Path | Description |
| :--- | :--- | :--- |
| **GET** | `/posts` | Index - key view of all posts |
| **GET** | `/posts/new` | New - Form to create a new post |
| **POST** | `/posts` | Create - specific logic to add new post to data |
| **GET** | `/posts/:id` | Show - Details of a specific post |
| **GET** | `/posts/:id/edit` | Edit - Form to edit a specific post |
| **PATCH** | `/posts/:id` | Update - Logic to modify post content |
| **DELETE** | `/posts/:id` | Destroy - Logic to remove a post |

## 🎨 UI Highlights

The project features a custom "Glassmorphism" aesthetic with:
-   Dark mode background (`#0f172a`)
-   Translucent cards with blur filters (`backdrop-filter`)
-   Gradual gradients and glow effects
-   Responsive grid layout

## 📝 Note

Currently, this project uses **in-memory storage** (a JavaScript array) to store posts. This means all data will be reset if the server is restarted.

## 👤 Author

**Sujan**

