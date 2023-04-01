var count = 0;
function passCountMessageToNative() {
    count += 1;
    window.webkit.messageHandlers.count.postMessage(count);
}

window.countFromNative = function(number) {
    alert("got count from native ${number}");
}
