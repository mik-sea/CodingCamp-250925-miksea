const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

function setCookieWithMaxAge(name, value, days) {
  const maxAgeSeconds = days * 24 * 60 * 60; // Convert days to seconds
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAgeSeconds}; path=/`;
}

// Example: Set a cookie named 'username' with value 'JohnDoe' that expires in 7 days
// setCookieWithMaxAge('username', 'JohnDoe', 7);

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}

// const username = getCookie("username");
// console.log(username); // Example: "JohnDoe"