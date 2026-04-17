// Initialize Netlify Identity
const netlifyIdentity = window.netlifyIdentity;
netlifyIdentity.init();

// allow only indorama emails
function allowed(email) {
  return email && email.endsWith("@indorama.com");
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!allowed(email)) {
    alert("Only official @indorama.com emails allowed");
    return;
  }

  netlifyIdentity.open("login");
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!allowed(email)) {
    alert("Only official @indorama.com emails allowed");
    return;
  }

  netlifyIdentity.open("signup");
}

// handle login success
netlifyIdentity.on("login", user => {
  if (!allowed(user.email)) {
    alert("Access denied");
    netlifyIdentity.logout();
    return;
  }

  netlifyIdentity.close();
  window.location.href = "dashboard.html";
});

// logout function
function logout() {
  netlifyIdentity.logout();
  window.location.href = "index.html";
}
