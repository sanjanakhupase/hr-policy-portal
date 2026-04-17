const netlifyIdentity = window.netlifyIdentity;
netlifyIdentity.init();


function openPolicy(type) {
  if (type === "leave") {
    window.location = "leave-policy.html";
  }
}

// open login/signup
function openLogin() {
   window.location.href = "dashboard.html";
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
