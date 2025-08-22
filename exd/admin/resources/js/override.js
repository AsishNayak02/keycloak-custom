document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const navItem = document.querySelector("#nav-item-realms");
    if (navItem && navItem.textContent.trim() === "Manage realms") {
      navItem.textContent = "Manage global domains";
      observer.disconnect(); // stop watching once updated
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
