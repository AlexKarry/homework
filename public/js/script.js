var tabs = document.querySelectorAll("nav a");
contentPara = document.querySelector(".content");

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

document.addEventListener("click", makeActive);
window.addEventListener("hashchange", setContentAccordingToHash);

initializePage();

// --------------

var modalOuter = document.querySelector(".modal-outer");
var modalInner = document.querySelector(".modal");

var betaContent = `
<h3>Oooops!</h3>
<p>Wow! Nothing works!<p>
`;
var buttonContent = `
<h2>Contact</h2>
<p>Please send me a message.<p>

          <form name="contact" method="POST" action="/" autocomplete="true">
          <form action="/" data-netlify="true">
                       
              <label for="name">Your name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                autocomplete="name"
                title="Please enter your name"
              />

              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                title="The domain portion of the email address is invalid (the portion after the @)."
              />
              
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                rows="7"
              ></textarea>

              <button class='button' type="submit" name="submit">Send Message</button>
            
          </form>

<a class="closer" href="#0">✖︎</a>
`;

function showPopover(event) {
  if (event.target.matches(".beta")) {
    modalInner.innerHTML = betaContent;
    modalOuter.classList.add("open");
  } else if (event.target.closest("button")) {
    modalInner.innerHTML = buttonContent;
    modalOuter.classList.add("open");
  } else if (event.target.matches(".closer, .modal-outer")) {
    modalOuter.classList.remove("open");
  } else return;
  event.preventDefault();
}

document.addEventListener("click", showPopover);
