window.onload = function () {
    document.getElementById("debug").onclick = function () {
        chrome.extension.sendMessage({
            type: "color-divs"
        });
    }
}