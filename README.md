# Simple Web Template

A straightforward HTML boilerplate to jump-start your web development projects with a dynamic theming system and JavaScript-driven structural elements.



## 🌐 Overview

**Simple Web Template** affords developers a smooth kick-off in web development, providing a minimalistic and manageable environment devoid of intricate dependencies or build processes. It encompasses:

- 🎨 **Dynamic Theming**: Effortlessly switch between various visual themes using CSS variables.
- 📁 **Organized Style Management**: Systematically arranged CSS files for easy style navigation and management.
- 🔄 **JavaScript-Driven Structure**: Components like headers, navigation, and footers are not just injected but entirely constructed and inserted using JavaScript.



## 🚀 Key Features

- **Modular Theming**: Utilize and customize themes by tweaking CSS variables.
- **Efficient Style Segregation**: Isolated CSS files for simplified and scalable style management.
- **DRY JavaScript**: Dynamic creation and injection of structural elements avoid repetition across pages.



## 🗂️ Directory Layout

Here’s how the project is structured:

- 🎨 **assets**: Housing static assets like images and icons.

- 📑 **pages**: Encompassing different webpage directories, each containing specific HTML and CSS files.

- 📜 **scripts**: JS files that manage dynamic element creation and insertion.

- 🖌️ **styles**: Encompassing CSS files that manage:
    - **theme-colors.css**: Color definitions for various themes.
    - **theme.css**: Color application for light and dark themes based on chosen colors.
    - **global.css**: Styling for global HTML elements.
    - **components.css**: Styling for common web components like buttons, etc.

## 🎨 How to Use

1. **Start Developing**

        ```bash
        git clone [Your Repository Link]
        cd [Your Repository Folder]

        Open `index.html` to explore the template.

2. **Navigating the Template**

        - **Viewing Pages**: Simply browse through the pages and notice how the header, navigation, and footer elements are dynamically created and inserted using JavaScript.

3. **Adding New Pages**

        - **Page Creation**: Within the `pages` directory, create a new directory for your page.
        - **HTML and CSS**: Add your `page.html` and `page.css` files.
        - **Page-Specific JS**: Implement any page-specific JavaScript functionality as needed.

4. **Modifying Styles and Themes**

        - **Theme Modification**: Navigate to the `styles` directory and adjust the CSS files to personalize and apply your own visual styles and themes.

5. **Deployment**

        - **Go Live**: Host your completed project on your preferred platform to make it accessible on the web!



## 🧐 Example Usage: "empty-page"

    Ensure to embed `div` elements with ids `header`, `nav`, and `footer` in every page, to act as placeholders where the dynamically created elements will be injected.

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <!-- Your head content -->
    </head>
    <body>
        <div id="header"></div>
        <div id="nav"></div>
        
        <!-- Your main content -->

        <div id="footer"></div>
        <script src="../path_to_your_script.js"></script>
    </body>
    </html>
    
    In the above HTML structure, JavaScript will dynamically create and insert the header, navigation, and footer elements within the designated `div` elements.



## 🤝 Contributing

    Contributions are more than welcome! 🚀

    - **Fork and Clone**: Fork this repository, clone it to your local machine and work on your changes.
    - **Pull Requests**: Ensure they are aimed towards the `main` branch.
    - **Issues**: For major changes, please open an issue to discuss what you would like to change.

    Embrace collaboration and let’s refine this boilerplate for diverse projects! 🎉



## 📄 License

    MIT Licence
    Feel free to use / modify 
