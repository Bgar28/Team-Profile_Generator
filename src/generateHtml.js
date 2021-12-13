const generateHtml = (results) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            ${generateCards(results)}
            
            
        </main>
    </body>
    </html>
`


}

const generateManagerCard = (employee) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.getName()}</h5>
      <p class="card-text">${employee.getRole()}</p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.getId()}</li>
          <li class="list-group-item">Email: ${employee.getEmail()}</li>
          <li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>
        </ul>
    </div>
  </div>
`
}

const generateEngineerCard = (employee) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.getName()}</h5>
      <p class="card-text">${employee.getRole()}</p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.getId()}</li>
          <li class="list-group-item">Email: ${employee.getEmail()}</li>
          <li class="list-group-item">Github: ${employee.getGithub()}</li>
        </ul>
    </div>
  </div>
`
}

const generateInternCard = (employee) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.getName()}</h5>
      <p class="card-text">${employee.getRole()}</p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.getId()}</li>
          <li class="list-group-item">Email: ${employee.getEmail()}</li>
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