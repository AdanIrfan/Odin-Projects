# Odin Recipes

This project is part of the [Odin Project](https://www.theodinproject.com/) curriculum and serves as an introduction to basic HTML structure and website navigation. The goal is to create a simple website that showcases a collection of recipes using only HTML.

---

## 🔧 Iteration 1: Initial Structure

* Created the main project directory: `odin-recipes`.
* Inside the directory, added a file: `index.html`.
* Included basic HTML boilerplate in `index.html`.
* Added an `<h1>` heading with the text: **"Odin Recipes"** to the body.

---

## 🍝 Iteration 2: First Recipe Page

* Created a `recipes` directory inside `odin-recipes`.
* Inside `recipes`, added a new HTML file (e.g., `lasagna.html`) for the first recipe.
* Each recipe file includes full HTML boilerplate and an `<h1>` with the name of the dish.
* Linked the recipe page from `index.html` using an anchor tag:

  ```html
  <a href="recipes/lasagna.html">Lasagna</a>
  ```
* Added a link **back to the homepage** from the recipe page using:

  ```html
  <a href="../index.html">Home</a>
  ```

---

## 📄 Iteration 3: Recipe Page Content

Each recipe page now includes the following:

1. **An image** of the completed dish below the `<h1>` heading.
2. A **"Description"** section with one or two paragraphs describing the recipe.
3. An **"Ingredients"** section containing an unordered list of all required ingredients.
4. A **"Steps"** section with an ordered list of the steps to prepare the dish.

---

## 🍽️ Iteration 4: Add More Recipes

* Added **two more recipes** using the same structure as the first recipe page.
* Updated `index.html` to include links to all recipes.
* Organized the recipe links in an unordered list for better readability:

  ```html
  <ul>
    <li><a href="recipes/lasagna.html">Lasagna</a></li>
    <li><a href="recipes/pancakes.html">Pancakes</a></li>
    <li><a href="recipes/tacos.html">Tacos</a></li>
  </ul>
  ```

---

## 📁 Project Structure

```
odin-recipes/
│
├── index.html
└── recipes/
    ├── lasagna.html
    ├── pancakes.html
    └── tacos.html
```

---

## ✅ Summary

This project reinforced basic HTML concepts including:

* Boilerplate setup
* Headings, paragraphs, and lists
* Image embedding
* Internal linking and navigation
* Organizing a simple multipage site

This marks a foundational step in learning web development through the Odin Project.

---

Let me know if you'd like to add a section for screenshots or GitHub Pages deployment!
