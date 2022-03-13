// var tabs = document.querySelectorAll("nav a");
// var contentPara = document.querySelector(".content");

// // when the hash changes
// function setActiveTabAccordingToHash(type) {
//   makeAllTabsInactive();
//   var tabToActivate = document.querySelector(`[href="#${type}"]`);
//   tabToActivate.classList.add("active");
// }

// function makeAllTabsInactive() {
//   tabs.forEach((tab) => tab.classList.remove("active"));
// }

// // runs on page load and whenever the hash changes
// function setContentAccordingToHash() {
//   var type = window.location.hash.substring(1);
//   for (let item of data) {
//     if (item.section === type) {
//       // contentPara.innerHTML = item.story
//       contentPara.innerHTML = `
//       <h2>${item.section}</h2>
//       <p>${item.story}</p>
//       `;
//       setActiveTabAccordingToHash(type);
//     }
//   }
// }

// // only runs once on page load
// function initializePage() {
//   if (!window.location.hash) {
//     window.location.hash = "about";
//     document.querySelector('[href="#about"]').classList.add("active");
//   }
//   setContentAccordingToHash();
// }

// window.addEventListener("hashchange", setContentAccordingToHash);

// initializePage(); // import "./styles.css";

// // document.getElementById("app").innerHTML = `
// // <h1>Hello Vanilla!</h1>
// // <div>
// //   We use the same configuration as Parcel to bundle this sandbox, you can find more
// //   info about Parcel
// //   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// // </div>
// // `;
// // var mainNav = document.querySelectorAll("nav a");
// // document.addEventListener("click", showActive);

// // function showActive(event) {
// //   event.preventDefault();
// //   if (event.target.matches("nav a")) {
// //     for (let navItem of mainNav) {
// //       navItem.classList.remove("active");
// //     }
// //     event.target.classList.add("active");
// //   }
// // }

var tabs = document.querySelectorAll("nav a");
contentPara = document.querySelector(".content");

// tabs.forEach((tab) => tab.addEventListener('click', makeActive))

// function makeActive(event) {
//   if (!event.target.matches('nav a')) return
//   makeInactive()
//   event.target.classList.add('active')

//   if (event.target.href.includes('cuisines')) {
//     contentPara.innerHTML = data.cuisines
//   } else if (event.target.href.includes('chefs')) {
//     contentPara.innerHTML = data.chefs
//   } else if (event.target.href.includes('reviews')) {
//     contentPara.innerHTML = data.reviews
//   } else if (event.target.href.includes('delivery')) {
//     contentPara.innerHTML = data.delivery
//   }
// }

function makeActive(event) {
  if (!event.target.matches("a")) return;
  makeInactive();
  event.target.classList.add("active");
}

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1);
  contentPara.innerHTML = data[type];
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}

function initializePage() {
  document.querySelector("nav a").classList.add("active");
  window.location.hash = "about";
  setContentAccordingToHash();
}

// function initializePage() {
//   if (!window.location.hash) {
//     window.location.hash = "about";
//     document.querySelector('[href="#about"]').classList.add("active");
//   } else {
//     document
//       .querySelector(`[href="${window.location.hash}]"`)
//       .classList.add("active");
//   }
//   setContentAccordingToHash();
// }

document.addEventListener("click", makeActive);
window.addEventListener("hashchange", setContentAccordingToHash);

initializePage();
