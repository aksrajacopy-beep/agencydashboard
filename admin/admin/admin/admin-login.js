const BACKEND_URL = "https://script.google.com/macros/s/AKfycbxPRCrSpDnQAC1vuS5bOu2oiEp-7oPVq_w3QmTzeoiO7Xzxub8XtbQNqe0CsMi1sBzV/exec";

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");
  
  msg.innerText = "Checking...";

  fetch(BACKEND_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      email: email,
      password: password
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "success" && data.role === "ADMIN") {
      localStorage.setItem("role", data.role);
      window.location.href = "admin-dashboard.html";
    } else {
      msg.innerText = "Invalid admin login";
    }
  })
  .catch(() => {
    msg.innerText = "Server error";
  });
}
