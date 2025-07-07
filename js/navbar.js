

document.addEventListener("DOMContentLoaded", () => {
  const waitForElement = (selector, callback) => {
    const el = document.querySelector(selector);
    if (el) return callback(el);
    setTimeout(() => waitForElement(selector, callback), 100);
  };

  waitForElement("#profileBtn", () => {
    const profileBtn = document.getElementById("profileBtn");
    const sidebar = document.getElementById("sidebar");

    profileBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      const isClickInside = sidebar.contains(e.target) || profileBtn.contains(e.target);
      if (!isClickInside) {
        sidebar.classList.remove("active");
      }
    });
  });
});
