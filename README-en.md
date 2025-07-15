# 🌍 Country Browser App 🚀

Welcome to the **Country Browser App**! A powerful and dynamic tool developed with Angular that allows you to explore detailed country information in various ways. This application is ideal for learning geography, researching demographic data, or simply satisfying your curiosity about the world.

It demonstrates advanced frontend development skills, including routing, interaction with external APIs, dynamic DOM manipulation, and the creation of reusable and interactive components.

## ✨ Key Features

### 🔍 Search and Category Navigation

The application features a versatile search and navigation system divided into three main categories, accessible via an intuitive menu:

1.  **Search by Capital:**
    * Enter a capital city's name to get detailed information about its corresponding country.
    * Results are displayed in a **dynamic table** with the following columns:
        * **Acronym (CCA3):** The country's three-letter code.
        * **Flag:** Image of the country's flag.
        * **Country Name:** Official name of the country.
        * **Capital:** The searched capital city.
        * **Population:** Population figure highlighted with a **red badge and white text**.
        * **More Info:** A button to access the complete details of the country.

2.  **Search by Country:**
    * Enter a country's name to get the same detailed data presented in the dynamic table, including its flag, acronym, capital, and population.

3.  **Search by Region (Continent):**
    * In this category, you will find a **button for each continent**.
    * Clicking on a continent will load a table with all countries belonging to that region, showing the same data (acronym, flag, name, capital, population).

### 📊 Full Country Details (Dynamic Window)

Upon clicking the "More Info" button in any search result or continent list, a **dynamic and draggable modal window** will open, displaying extended country data:

* **Country Name:** Official name.
* **Population:** Total number of inhabitants.
* **Region and Subregion:** To which geographical region and subregion it belongs.
* **Acronym (CCA3):** Three-letter code.
* **Large Flag:** A larger version of the flag.
* **Flag Opacity Control:** A slider within the window allows you to make the flag more or less translucent, adding interactivity and customization.

### 📱 Responsive Design

* The application is designed to adapt and offer an optimal user experience across different screen sizes, from desktops to mobile devices.

## 🛠️ Technologies Used

### Frontend:

* **[Angular](https://angular.io/) (v19.2.14, with Signals):** The main framework for building the user interface, utilizing Signals for reactive state management.
* **[TypeScript](https://www.typescriptlang.org/) (~5.7.2):** The base programming language that adds static typing.
* **[Tailwind CSS](https://tailwindcss.com/) (v3.4.17):** A utility-first CSS framework for fast and responsive design.
* **[DaisyUI](https://daisyui.com/) (v4.12.24):** A UI component library for Tailwind CSS.
* **[RxJS](https://rxjs.dev/) (~7.8.0):** For managing asynchronous data streams.

### Data Integration:

* **Countries API:** The application connects to an external API (e.g., [REST Countries API](https://restcountries.com/) or similar) to fetch and display country-related data.

## 🚀 How to Run the Project

To get the **Country Browser App** up and running on your local environment, follow these steps:

### Prerequisites

* Node.js (version 18 or higher)
* npm or Yarn

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Jose-designer-23/Browser-country-app](https://github.com/Jose-designer-23/Browser-country-app)
    cd Browser-country-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use Yarn
    # yarn install
    ```

3.  **Start the application:**
    ```bash
    ng serve
    ```

4.  **Access the Application:**
    Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---

## 💻 Development Commands (Angular CLI)

This section provides a quick reference to the most common Angular CLI commands.

* **Start the Development Server:**
    ```bash
    ng serve
    ```
* **Generate Components, Services, etc.:**
    ```bash
    ng generate component component-name
    ng generate service services/my-service
    # For a complete list of available schematics: ng generate --help
    ```
* **Build the Project for Production:**
    ```bash
    ng build
    ```
* **Run Unit Tests:**
    ```bash
    ng test
    ```
