console.log("Hello World!", browser);

document.getElementById("eth-button").addEventListener("click", function(e) {
    console.log("pop up button clicked!");
    
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var currTab = tabs[0];
      console.log("tab id: ", currTab.id);
      if (currTab) {
          browser.tabs.sendMessage(currTab.id,{'ethButtonClicked': true});
          window.close();
      }
    });
    
});



