function showForm(formId) {
  if (formId === 1) {
    document.getElementById("form1").style.display = "grid";
    document.getElementById("form2").style.display = "none";
    document.querySelector(".detail").classList.add("active");
    document.querySelector(".link").classList.remove("active");
  } else {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "grid";
    document.querySelector(".link").classList.add("active");
    document.querySelector(".detail").classList.remove("active");
  }
}
document.querySelectorAll(".input-field").forEach((item) => {
  item.addEventListener("input", updateCard);
});

function updateCard() {
  const fields = [
    "full-name",
    "nickname",
    "title",
    "phone",
    "email",
    "address",
  ];
  fields.forEach((field) => {
    document.getElementById(`${field}-display`).innerText =
      document.getElementById(field).value;
  });
}
function toggleInput(inputClass, button) {
  var inputs = document.querySelectorAll("." + inputClass);
  inputs.forEach(function (input) {
    if (input.style.display == "none" || input.style.display === "") {
      input.style.display = "inline-block";
      button.classList.add("icon-selected"); // Thêm lớp icon-selected khi input được hiển thị
    } else {
      input.style.display = "none";
      button.classList.remove("icon-selected"); // Loại bỏ lớp icon-selected khi input bị ẩn
    }
  });
}

const socialMediaInputs = [
  {
    input: document.querySelector(".facebook-input-value"),
    link: document.querySelector(".facebook-link"),
  },
  {
    input: document.querySelector(".twitter-input-value"),
    link: document.querySelector(".twitter-link"),
  },
  {
    input: document.querySelector(".instagram-input-value"),
    link: document.querySelector(".instagram-link"),
  },
  {
    input: document.querySelector(".linkedin-input-value"),
    link: document.querySelector(".linkedin-link"),
  },
  {
    input: document.querySelector(".youtube-input-value"),
    link: document.querySelector(".youtube-link"),
  },
];

function updateHref(inputField, link) {
  link.setAttribute("href", inputField.value);
}

socialMediaInputs.forEach((pair) => {
  pair.input.addEventListener("input", function () {
    updateHref(pair.input, pair.link);
  });
});
