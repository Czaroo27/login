function logowanie() {
  let username = document.getElementById("loginn").value;
  let password = document.getElementById("passwordd").value;

  if (username === "admin" && password === "DRAGON") {
    alert("Login successfully");
    window.location = "technischools.com"; // Przekierowanie do innej strony.
    return false; // Zatrzymanie wysłania formularza
  } else {
    alert("Incorrect username or password");
    return false; // Zatrzymanie wysłania formularza
  }
}

function admin() {
  let admin = document.getElementById("loginn").value;
  if (admin === "admin") {
    alert("użytkownik o nazwie admin istnieje");
    return false;
  }
}
