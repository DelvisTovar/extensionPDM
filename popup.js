document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `d = document;
        d.body.style.setProperty('background-color','#000','important');
        d.body.style.setProperty('color','#fff','important');
        [...d.querySelectorAll('div,section,a,span,p,button,table,tr,th,tr,ul,li')].forEach(el => el.style.setProperty('background-color','#000','important'));
        [...d.querySelectorAll('p,i,button,label')].forEach(el => el.style.setProperty('color','#fff','important'));
        [...d.querySelectorAll('table,tr,th,td')].forEach(el => el.style.setProperty('color','#fff','important'));
        [...d.querySelectorAll('ul,ol,li')].forEach(el => el.style.setProperty('color','#fff','important'));
        [...d.querySelectorAll('a,span,p,button,table,tr,th,tr,ul,li')].forEach(el => el.style.setProperty('color','#fff','important'));
        [...d.querySelectorAll('h1,h2,h3,h4,h4,h6')].forEach(el => el.style.setProperty('color','#fff','important'));`
      });
    });
  }, false);
}, false);