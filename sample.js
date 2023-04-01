function onClickButton() {
    console.log("on click!!!!");
}

var count = 0;

function passCountMessageToNative() {
    count += 1;
    window.webkit.messageHandlers.count.postMessage(count);
}
