function fetchRecipes() {
  let issues = JSON.parse(localStorage.getItem('issues'));
  let recList = document.getElementById('recList');

  recList.innerHTML = '';

  for (let i = 0; i < issues.length; i++) {
    let id = issues[i].id;
    let desc = issues[i].description;
    let effort = issues[i].effort;
    let assignedTo = issues[i].assignedTo;

    recList.innerHTML += '<div class="well">' +
      '<h3>' + desc + '</h3>' +
      '<p><span class="glyphicon glyphicon-time"></span> ' + effort + ' ' +
      '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
      '<a href="#" class="btn btn-danger" onclick="deleteRecipe(\'' + id + '\')">Delete</a>' +
      '</div>';
  }
}
document.getElementById('inputForm').addEventListener('submit', saveRecipe);
function saveRecipe(e) {
  let issueId = chance.guid();
  let issueDesc = document.getElementById('descInput').value;
  let issueEffort = document.getElementById('effortInput').value;
  let issueAssignedTo = document.getElementById('nameInput').value;
  let issue = {
    id: issueId,
    description: issueDesc,
    effort: issueEffort,
    assignedTo: issueAssignedTo,
  }

  if (localStorage.getItem('issues') === null) {
    let issues = [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    let issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  }

  document.getElementById('inputForm').reset();

  fetchRecipes();

  e.preventDefault();
}

function deleteRecipe(id) {
  let issues = JSON.parse(localStorage.getItem('issues'));

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1);
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchRecipes();
}
