const navigation = document.querySelector(".navigation");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    navigation.classList.toggle("active");

    toggle.classList.toggle("active");
});
