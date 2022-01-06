let textarea = document.getElementById("notes_text");
let btn = document.getElementById("btn");
let btn_fetch = document.getElementById("btn_fetch");
let msg = document.getElementById("msg");

fetch();
// Save the data automatically
let timeoutId;
textarea.addEventListener("input", function () {
  msg.innerText = "Auto Saving...";
  // If a timer was already started, clear it.
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(function () {
    save();
    console.log("fire");
  }, 1000);
});

function save() {
  let content = document.getElementById("notes_text").value;
  localStorage.setItem("content", content);
  msg.innerText = "Successfully saved!";
}

function fetch() {
  let store_text = localStorage.getItem("content");
  textarea.innerHTML = store_text;
}
// btn.addEventListener("click", save);
