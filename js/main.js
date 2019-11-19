/* ================================
    MODALS
================================ */
// GLOBAL VARIABLES
let donateModal = document.getElementById("donateModal");
let donateButton = document.getElementById("donateModalBtn");
let donateClose = document.getElementById("donateClose");

let donateModal2 = document.getElementById("donateModal2");
let donateButton2 = document.getElementById("donateModalBtn2");
let donateClose2 = document.getElementById("donateClose2");

let subscribeModal = document.getElementById("subscribeModal");
let subscribeButton = document.getElementById("subscribeModalBtn");
let subscribeClose = document.getElementById("subscribeClose");

let nestModal = document.getElementById("nestModal");
let nestButton = document.getElementById("nestModalBtn");
let nestClose = document.getElementById("nestClose");

// FUNCTIONS
/* ================================
    DONATE
================================ */
const showDonateModal = () => {
  donateModal.style.display = "block";
};
const hideDonateModal = () => {
  donateModal.style.display = "none";
};

/* this second one is for the get involved page that has two cash donate modals */
const showDonateModal2 = () => {
  donateModal2.style.display = "block";
};
const hideDonateModal2 = () => {
  donateModal2.style.display = "none";
};

/* ================================
    SUBSCRIBE
================================ */
const showSubscribeModal = () => {
  subscribeModal.style.display = "block";
};
const hideSubscribeModal = () => {
  subscribeModal.style.display = "none";
};

/* ================================
    NEST
================================ */
const showNestModal = () => {
  nestModal.style.display = "block";
};
const hideNestModal = () => {
  nestModal.style.display = "none";
};

// closes on window click
window.onclick = function(event) {
  if (event.target == donateModal) {
    donateModal.style.display = "none";
  }
  if (event.target == subscribeModal) {
    subscribeModal.style.display = "none";
  }
  if (event.target == nestModal) {
    nestModal.style.display = "none";
  }
};

/* ================================
    RESPONSIVE NAV
================================ */
/* Open when someone clicks on the span element */
function mobileToggle() {
  document.getElementById("turtle-nav--mobile").style.width = "100%";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("turtle-nav--mobile").style.width = "0%";
}
