function logowanie() {
  let username = document.getElementById("loginn").value;
  let password = document.getElementById("passwordd").value;

  // Zaszyfrowanie hasła za pomocą SHA-256
  let encryptedPassword = CryptoJS.SHA256(password).toString();

  // Przykład: sprawdzenie zaszyfrowanego hasła (dla demo, w rzeczywistości przechowuj i porównuj zaszyfrowane wersje)
  let storedHashedPassword = CryptoJS.SHA256("DRAGON").toString();

  if (username === "admin" && encryptedPassword === storedHashedPassword) {
    alert("Login successfully");
    window.location = "https://technischools.com"; // Przekierowanie do innej strony.
    return false; // Zatrzymanie wysłania formularza
  } else {
    alert("Incorrect username or password");
    return false; // Zatrzymanie wysłania formularza
  }
}

function admin() {
  let admin = document.getElementById("loginn").value;
  if (admin === "admin") {
    alert("Użytkownik o nazwie admin istnieje");
    return false;
  }
}
