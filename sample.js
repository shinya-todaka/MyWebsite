var count = 0;
function passCountMessageToNative() {
    count += 1;
    window.webkit.messageHandlers.count.postMessage(count);
}

function increment(number) {
    return number + 1
}
