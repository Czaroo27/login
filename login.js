function logowanie() {
  let username = document.getElementById("loginn").value;
  let password = document.getElementById("passwordd").value;
  let errorMessage = document.getElementById("error-message"); // Element na komunikat o błędzie

  // Wyczyszczenie poprzedniego komunikatu o błędzie
  errorMessage.textContent = "";

  // Sprawdzanie hasła i loginu (przykład bez szyfrowania)
  if (username === "admin" && password === "DRAGON") {
    alert("Login successfully");
    window.location = "https://technischools.com"; // Przekierowanie do innej strony.
    return false; // Zatrzymanie wysłania formularza
  } else {
    // Wyświetlenie komunikatu o błędnym haśle lub loginie
    errorMessage.textContent = "Incorrect username or password";
    return false; // Zatrzymanie wysłania formularza
  }
}

function admin() {
  let admin = document.getElementById("loginn").value;
  let errorMessage = document.getElementById("error-message");

  // Wyczyszczenie poprzedniego komunikatu o błędzie
  errorMessage.textContent = "";

  if (admin === "admin") {
    errorMessage.textContent = "Użytkownik o nazwie admin istnieje";
    return false;
  }
}
