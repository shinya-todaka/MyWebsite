var count = 0;
function passCountMessageToNative() {
    count += 1;
    window.webkit.messageHandlers.count.postMessage(count);
}

function increment(number) {
    return number + 1
}

var showPasswordButton = document.getElementById("toggleShowPasswordButton");
showPasswordButton.addEventListener("click", togglePasswordVisibility);

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordButton.textContent = "非表示";
  } else {
    passwordInput.type = "password";
    showPasswordButton.textContent = "表示";
  }
}