fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
    const script = document.createElement('script');
    script.src = 'js/navbar.js';
    document.body.appendChild(script);
  });

// fetch("navbar.html")
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById("navbar-container").innerHTML = data;

//     // const savedImage = localStorage.getItem("profileImage");
//     // if (savedImage) {
//     //   const navbarImg = document.querySelector(".profile-img");
//     //   if (navbarImg) navbarImg.src = savedImage;
//     // }

//   });

fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
  });

// function logout() {
//   localStorage.removeItem("isLoggedIn");
//   alert("You have been logged out.");
//   window.location.href = "login.html";
// }
