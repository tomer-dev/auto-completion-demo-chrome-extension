browser.runtime.onMessage.addListener(() =>
  browser.tabs.executeScript({
    file: "content-script.js"
  }));
