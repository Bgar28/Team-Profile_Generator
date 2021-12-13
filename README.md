# Team-Profile_Generator
  ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
  ![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
  
  
  ## Description 
  
  The team profile generator is a command-line application that accepts user input to generate an HTML file that consists of info about one's engineering team. The info required to answer the prompts are member job titles, member id numbers, email addresses, Github usernames, an office phone number, and the name of one's college/university. Each team member then has their info displayed in a card.
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
   
  ## Installation

  Node.js is required to generate your team profile. <br/>
  Git clone this repository and then run npm install in the terminal to load the package dependencies from the package.json file.

  To start the application, open the terminal and enter "node index.js" in the command line. <br/>
  You are welcomed with a prompt. <br/>
  You are then given a series of prompts that will determine what is included within your team profile. <br/>
  First, you are asked questions about the manager's name, id, email, and office phone number. Then you are given a prompt containing a list of choices which include "engineer", "intern", and "I dont want to add any more members." This prompt appears after each member's info is entered, giving the user a chance to end the application whenever their team is complete. Questions about the engineer consists of name, id, email, and github username. Questions about the intern consists of name, id, email, and school name. <br/>
  Once the user selects "I dont want to add any more members", your HTML is generated and accessible via the dist folder and a success message is displayed in the terminal. <br/>
  For a video walk-through demonstration, click the link: https://drive.google.com/file/d/14KMCNiMazyn2isugF8A5VJ2kfNwgGGQU/view?usp=sharing
  
  ## Usage

  This application utilizes ES6 and its features of switch/case, "const" variables, arrow functions, forEach() loop. Also, the app utilizes inheritance (class, extends) from the object-oriented-programming language. The inquirer package is utilized to capture user input.The generateHtml.js file is utilized to generate one's dashboard.html. The jest package is utilized to test the application and make sure all user inputs are rendering as expected. Lastly, the fs.writeFile method is utilized to write the html and puts it into the specified file path. <br/>
  ![screenshot](https://github.com/Bgar28/Team-Profile_Generator/blob/main/assets/screenshotMain.png) <br/>
  ![screenshot](https://github.com/Bgar28/Team-Profile_Generator/blob/main/assets/screenshot1.png) <br/>
  ![screenshot](https://github.com/Bgar28/Team-Profile_Generator/blob/main/assets/screenshot2.png)

  ## License
  ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
  ![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
  
  

  ## Questions?

  Any questions or concerns, please contact me via the information provided below:

  Github: Bgar28 <br/> https://github.com/Bgar28/ <br/>
  ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

  Or

  Email: briangarlandk@gmail.com <br/>
  ![GMAIL](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)