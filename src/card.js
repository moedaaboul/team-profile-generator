const generateCard = (
  name,
  id,
  email,
  icon,
  role,
  github,
  school,
  officeNumber
) => {
  let roleString;
  if (role === 'Manager') {
    roleString = `Office Number: ${officeNumber}`;
  } else if (role === 'Engineer') {
    roleString = `Github: ${github}`;
  } else if (role === 'Intern') {
    roleString = `School: ${school}`;
  }
  const cardString = `        <div class="column is-4">
<div class="card">
  <div class="card-header is-flex-direction-column">
    <p class="title is-4 ml-3">${name}</p>
    <div class="is-flex is-align-items-center ml-3 mb-2 pt-1">
      <span class="icon">
        <i class="fas ${icon}"></i>
      </span>
      <p class="ml-2">${role}</p>
    </div>
  </div>
  <div class="card-content">
    <table
      class="table is-bordered is-narrow is-hoverable is-fullwidth"
    >
      <tbody>
        <tr>
          <td>ID: ${id}</td>
        </tr>
        <tr>
          <td>Email: ${email}</td>
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
