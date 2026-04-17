const netlifyIdentity = window.netlifyIdentity;
netlifyIdentity.init();

// open login/signup
function openLogin() {
  netlifyIdentity.open("login");
}

function openSignup() {
  netlifyIdentity.open("signup");
}

// after login
netlifyIdentity.on("login", user => {
  if (!user.email.endsWith("@indorama.com")) {
    alert("Access denied: Only Indorama employees allowed");
    netlifyIdentity.logout();
    return;
  }

  netlifyIdentity.close();
  window.location.href = "dashboard.html";
});

// logout
function logout() {
  netlifyIdentity.logout();
  window.location.href = "index.html";
}
