//
const generateHtml = (results) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Work Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <h1 class='jumbotron jumbotron-fluid bg-info text-dark'>My Team</h1>
        </header>
        <main class="row justify-content-center">
            ${generateCards(results)}
            
            
        </main>
    </body>
    </html>
`


}

const generateManagerCard = (employee) => {
    return `<div class="card col-lg-3 m-3 p-0 shadow" style="width: 18rem;">
    <div class="card-body bg-primary text-light">
      <h2 class="card-title">${employee.getName()}</h2>
      <span class="material-icons">manage_accounts</span><h4 class="card-text">${employee.getRole()}</h4>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.getId()}</li>
          <li class="list-group-item">Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>
        </ul>
    </div>
  </div>
`
}

const generateEngineerCard = (employee) => {
    return `<div class="card col-lg-3 m-3 p-0 shadow" style="width: 18rem;">
    <div class="card-body bg-primary text-light">
      <h2 class="card-title">${employee.getName()}</h2>
      <span class="material-icons">laptop_mac</span><h4 class="card-text">${employee.getRole()}</h4>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.getId()}</li>
          <li class="list-group-item">Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></li>
          <li class="list-group-item">Github: <a href='https://github.com/${employee.getGithub()}'>${employee.getGithub()}</a></li>
        </ul>
    </div>
  </div>
`
}

const generateInternCard = (employee) => {
    return `<div class="card col-lg-3 m-3 p-0 shadow" style="width: 18rem;">
    <div class="card-body bg-primary text-light">
      <h2 class="card-title">${employee.getName()}</h2>
      <span class="material-icons">school</span><h4 class="card-text">${employee.getRole()}</h4>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.getId()}</li>
          <li class="list-group-item">Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></li>
          <li class="list-group-item">School: ${employee.getSchool()}</li>
        </ul>
    </div>
  </div>
`
}

const generateCards = (results) => {
    let html = ""
    results.forEach((employee) => {
        switch(employee.getRole()){
            case 'Manager':
               html += generateManagerCard(employee) 
            break;
            case 'Engineer':
                html += generateEngineerCard(employee)
            break;
            case 'Intern':
                html += generateInternCard(employee)
            break;
        }
        
    })
    return html

}

module.exports = generateHtml;