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
const profileNewImageInput = profileNewModal.querySelector(
  "#profile-image-input"
);
const profileNewCaptionInput = profileNewModal.querySelector(
  "#profile-caption-input"
);
const postFormElement = profileNewModal.querySelector(".modal__form");

const profileFormElement = profileEditModal.querySelector(".modal__form");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

profileEditOpen.addEventListener("click", function () {
  openModal(profileEditModal);
  profileEditNameInput.value = profileNameElement.textContent;
  profileEditDescriptionInput.value = profileDescriptionElement.textContent;
});

profileEditClose.addEventListener("click", function () {
  closeModal(profileEditModal);
});

profileNewOpen.addEventListener("click", function () {
  openModal(profileNewModal);
});

profileNewClose.addEventListener("click", function () {
  closeModal(profileNewModal);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = profileEditNameInput.value;
  profileDescriptionElement.textContent = profileEditDescriptionInput.value;

  closeModal(profileEditModal);
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(profileNewImageInput.value);
  console.log(profileNewCaptionInput.value);

  closeModal(profileNewModal);
}

postFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
  console.log(item.name);
});
