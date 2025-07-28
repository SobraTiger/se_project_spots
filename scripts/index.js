const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];
const profileEditOpen = document.querySelector(".profile__edit-btn");
const profileEditModal = document.querySelector("#edit-profile-modal");
const profileEditClose = document.querySelector("#edit-post");
const profileEditNameInput = profileEditModal.querySelector(
  "#profile-name-input"
);
const profileEditDescriptionInput = profileEditModal.querySelector(
  "#profile-description-input"
);

const profileNewOpen = document.querySelector(".profile__add-btn");
const profileNewModal = document.querySelector("#new-post-modal");
const profileNewClose = document.querySelector("#new-post");

const profileFormElement = profileEditModal.querySelector(".modal__form");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

profileEditOpen.addEventListener("click", function () {
  profileEditModal.classList.add("modal_is-opened");
  profileEditNameInput.value = profileNameElement.textContent;
  profileEditDescriptionInput.value = profileDescriptionElement.textContent;
});

profileEditClose.addEventListener("click", function () {
  profileEditModal.classList.remove("modal_is-opened");
});

profileNewOpen.addEventListener("click", function () {
  profileNewModal.classList.add("modal_is-opened");
});

profileNewClose.addEventListener("click", function () {
  profileNewModal.classList.remove("modal_is-opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = profileEditNameInput.value;
  profileDescriptionElement.textContent = profileEditDescriptionInput.value;

  profileEditModal.classList.remove("modal_is-opened");
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach(function (item) {
  console.log(item.name);
});
