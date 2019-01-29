
## Web Exam (Individual)

Please follow the following indications carefully:

1) Get your environment ready (file editor, git, etc) for web development
2) Create a GitHub+Pages repo (online browsing). Basic HTML structure (index.html, site.css, main.js) browsable for your files.
3) Follow the instructions provided to you below to be completed on your own.
4) Use your own HTML, CSS, and JavaScript as necessary.
5) Work alone in your machine, silently.
6) Is explicitly prohibited to take out your computed from the exam either to work in peers during the exam time.

## Delivery instructions
1) Share your solution as a public Website URL with the instructor
2) Place all your code under source control (Git) under your GitHub account
3) Make sure all your files and references in the code are included.
4) Make sure all content, classes and JS files. Having errors in the console either missing CSS classes may affect your final score. 

## Exam Sections

### Part 1 - Web structure
1) Create a website layout that looks similar to the one provided by the instructor.
2) Keep your code clean & tidy
3) Make sure to follow better coding practices like dedicated CSS files, JavaScript files, and name everything meaningfully.
4) Customize the layout (choose a color set, use a custom font, make it nice)
5) Create separate sections by using the HTML tags as needed for:

    a) Displaying a product catalog
    b) Shopping cart
    c) "Confirm" purchase section

`Screenshot #1`
![Screenshot-01](/final-exam/screenshot-01.png)

`Screenshot #2`
![Screenshot-02](/final-exam/screenshot-02.png)

### Part 2 - Rendering the data
1) Set up one or more plain array of objects for elements in the page to make it dynamic (script, strings) based from the product catalog provided to you in JSON format.

`https://products-catalog-8e792.firebaseio.com/set-1.json`

2) Use HTML/CSS/JavaScript to display the data from the array to be the list of products available so new products can be added easily (either changing the array in the code or grabbing the data across the network)
3) When the "Continue" button is clicked, it allows the user to navigate the checkout (shopping-cart) section.
4) A "Buy" button is provided so it confirms the purchase and clears the shopping cart.
5) Further purchases can be done (1 at the)

### Part 3 - Provide a tailored shopping experience (HTML, CSS + JavaScript)
Go beyond the mockup provided and make a HTML/CSS/JS proposal for making a better UI for the "Shopping cart" experience. Consider things like:

- Having a "Buy" button for every item in the products catalog, or a similar solution created by you.
- The section for "Shopping cart" gets populated as products get selected from the product catalog
- A major total is displayed for products as part of the purchase.
- A summary of the shopping is displayed

### Part 4 - Extra points
A) Extra features:
    - Include quantity counter for every line in products in the "Shopping cart"
    - Feed the product catalog from the webserice provided
    - Other action buttons are included for a better shopping experience (e.g remove button)

B) Use standardized UI components like Bootstrap (dialogs, grid system) for better UI experiences.
C) Use transitions between sections, animations, canvas, CSS/JS frameworks or libraries (jQuery)
D) Propose other sections for making better the "shopping cart" experience (payments, checkout, navigation buttons) if time allows