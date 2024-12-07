let autoLogin_2 = document.getElementById("login_2");
let autoLogin_3 = document.getElementById("login_3");
let autoLogin_4 = document.getElementById("login_4");
let autoLogin_5 = document.getElementById("login_5");
let autoLoginZixi = document.getElementById("login_zixi");


autoLogin_2.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: autoLoginData_2,
  });
});


autoLogin_3.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: autoLoginData_3,
  });
});


autoLogin_4.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: autoLoginData_4,
  });
});


autoLoginZixi.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: autoLoginDataZixi,
  });
});


autoLogin_5.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: autoLoginData_5,
  });
});


autoLoginZixi.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: autoLoginDataZixi,
  });
});


function autoLoginData_2() {
  document.getElementById("usr").value = "user_name";
  document.getElementById("pwd").value = "your_password";
  document.getElementById("chkRemPass").checked = true;
  document.getElementById("loginButton").click();
}


function autoLoginData_3() {
  document.getElementById("usr").value = "user_name";
  document.getElementById("pwd").value = "your_password";
  document.getElementById("chkRemPass").checked = true;
  document.getElementById("loginButton").click();
}


function autoLoginData_4() {
  document.getElementById("usr").value = "user_name";
  document.getElementById("pwd").value = "your_password";
  document.getElementById("chkRemPass").checked = true;
  document.getElementById("loginButton").click();
}


function autoLoginData_5() {
  document.getElementById("usr").value = "user_name";
  document.getElementById("pwd").value = "your_password";
  document.getElementById("chkRemPass").checked = true;
  document.getElementById("loginButton").click();
}


function autoLoginDataZixi() {
  document.getElementById("user").value = "login";
  document.getElementById("pass").value = "password";
  document.getElementById("login-submit").click();
}

