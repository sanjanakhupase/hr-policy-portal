const firebaseConfig = {
  apiKey: "AIzaSyDCwQghaeC4YWVFXctmBo283ir3vV_m4ko",
  authDomain: "hr-policy-portal.firebaseapp.com",
  projectId: "hr-policy-portal"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// restrict domain
function allowed(email) {
  return email.endsWith("@indorama.com");
}

function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if (!allowed(email)) {
    alert("Only official emails allowed");
    return;
  }

  auth.signInWithEmailAndPassword(email, pass)
    .then(() => window.location = "dashboard.html")
    .catch(e => alert(e.message));
}

function signup() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if (!allowed(email)) {
    alert("Only official emails allowed");
    return;
  }

  auth.createUserWithEmailAndPassword(email, pass)
    .then(() => window.location = "dashboard.html")
    .catch(e => alert(e.message));
}

function logout() {
  auth.signOut().then(() => window.location = "index.html");
}
