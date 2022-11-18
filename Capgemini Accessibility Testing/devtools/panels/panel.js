chrome.tabs.query({active: true, lastFocusedWindow: true, currentWindow: true}, tabs =>{
    let url = tabs[0].url;
    console.log(url);
});

document.getElementById("results : ")