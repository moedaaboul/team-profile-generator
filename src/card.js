const generateCard = (e) => {
  let roleString;
  let role = e.getRole();
  if (role === 'Manager') {
    roleString = `Office Number: ${e.getOfficeNumber()}`;
  } else if (role === 'Engineer') {
    roleString = `Github: <a
    href="https://github.com/${e.getGithub()}"
    target="_blank"
    rel="noopener noreferrer"
    >${e.getGithub()}</a
  >`;
  } else if (role === 'Intern') {
    roleString = `School: ${e.getSchool()}`;
  }
  const cardString = `        <div class="column is-4">
<div class="card">
  <div class="card-header is-flex-direction-column">
    <p class="title is-4 ml-3">${e.getName()}</p>
    <div class="is-flex is-align-items-center ml-3 mb-2 pt-1">
      <span class="icon">
        <i class="fas ${e.getIcon()}"></i>
      </span>
      <p class="subtitle ml-2 mb-2">${e.getRole()}</p>
    </div>
  </div>
  <div class="card-content">
    <table
      class="table is-bordered is-narrow is-hoverable is-fullwidth"
    >
      <tbody>
        <tr>
          <td>ID: ${e.getId()}</td>
        </tr>
        <tr>
          <td>Email:                      <a
          href="mailto:${e.getEmail()}"
          target="_blank"
          rel="noopener noreferrer"
          >${e.getEmail()}</a
        ></td>
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
