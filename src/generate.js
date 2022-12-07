const generatePage = (card) => {
    return`
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title> 
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${card}
              </div>
          </div>
      </main>
      
  </body>
  </html>
    `;
}

//create function that creates a card when manager is chosen, use bootstrap card template
const createManagerCard = (manager) => {
    return `
    <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${manager.name}</li>
    <li class="list-group-item">${manager.id}</li>
    <li class="list-group-item">${manager.email}</li>
    <li class="list-group-item">${manager.officeNumber}</li>
  </ul>
    <div class="card-footer">
    Card footer
  </div>
</div>
    `
} 

//create function that creates a card when engineer is chosen, use bootstrap card template
const createEngineerCard = (engineer) => {
    return `
    <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${engineer.name}</li>
    <li class="list-group-item">${engineer.id}</li>
    <li class="list-group-item">${engineer.email}</li>
    <li class="list-group-item">${engineer.github}</li>
  </ul>
    <div class="card-footer">
    Card footer
  </div>
</div>
    `
}

//create function that creates a card when intern is chosen, use bootstrap card template
const createInternCard = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${intern.name}</li>
    <li class="list-group-item">${intern.id}</li>
    <li class="list-group-item">${intern.email}</li>
    <li class="list-group-item">${intern.school}</li>
  </ul>
    <div class="card-footer">
    Card footer
  </div>
</div>
    `
}

module.exports = generatePage;