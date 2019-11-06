const search = document.getElementById("searchUser");
search.addEventListener("keyup", searchUser);

// initialize class
const github = new GitHub();
const ui = new UI();

async function searchUser(e) {
  const user = e.target.value;
  if (user !== "") {
    const data = await github.getUser(user);
    if (data.profile.message === "Not Found") {
      ui.showAlert("User Doesn't Exist", "alert alert-danger");
    } else {
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
    }
  } else {
    ui.clearProfile();
  }
}
