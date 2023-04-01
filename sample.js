var count = 0;
function passCountMessageToNative() {
    count += 1;
    window.webkit.messageHandlers.count.postMessage(count);
}

window.countFromNative = function(number) {
    var divTag = document.getElementById("native_count");
    divTag.innerText = number;
}
