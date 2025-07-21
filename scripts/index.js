const profileEditOpen = document.querySelector(".profile__edit-btn");
const profileEditModal = document.querySelector("#edit-profile-modal");
const profileEditClose = document.querySelector("#edit-post");

profileEditOpen.addEventListener("click", function () {
  profileEditModal.classList.add("modal_is-opened");
});

profileEditClose.addEventListener("click", function () {
  profileEditModal.classList.remove("modal_is-opened");
});

const profileNewOpen = document.querySelector(".profile__add-btn");
const profileNewModal = document.querySelector("#new-post-modal");
const profileNewClose = document.querySelector("#new-post");

profileNewOpen.addEventListener("click", function () {
  profileNewModal.classList.add("modal_is-opened");
});

profileNewClose.addEventListener("click", function () {
  profileNewModal.classList.remove("modal_is-opened");
});
