const openingString = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <section class="hero mb-3 is-info is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">My Team</h1>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
    <section class="container px-1">
      <div
        class="columns is-multiline is-centered cards-container"
        id="sectioncontainer"
      >`;

const closingString = `</div>
</section>
</body>
</html>
`;

module.exports = { openingString, closingString };
