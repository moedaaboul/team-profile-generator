const { Engineer, Intern, Manager } = require('../lib');

const generateCard = (e) => {
  let roleString;
  let role = e.getRole();
  if (role === 'Manager') {
    roleString = `Office Number: ${e.getOfficeNumber()}`;
  } else if (role === 'Engineer') {
    roleString = `Github: ${e.getGithub()}`;
  } else if (role === 'Intern') {
    roleString = `School: ${e.getSchool()}`;
  }
  const cardString = `        <div class="column is-4">
<div class="card">
  <div class="card-header is-flex-direction-column">
    <p class="title is-4 ml-3">${e.name}</p>
    <div class="is-flex is-align-items-center ml-3 mb-2 pt-1">
      <span class="icon">
        <i class="fas ${e.getIcon()}"></i>
      </span>
      <p class="ml-2">${e.getRole()}</p>
    </div>
  </div>
  <div class="card-content">
    <table
      class="table is-bordered is-narrow is-hoverable is-fullwidth"
    >
      <tbody>
        <tr>
          <td>ID: ${e.id}</td>
        </tr>
        <tr>
          <td>Email: ${e.email}</td>
        </tr>
        <tr>
          <td>${roleString}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>`;
  return cardString;
};

module.exports = generateCard;
