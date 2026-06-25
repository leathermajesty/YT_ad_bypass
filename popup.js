document.getElementById("addTime").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  if (!tab.url.includes("youtube.com/watch")) {
    alert("This is not a YouTube video.");
    return;
  }

  const url = new URL(tab.url);

  // Don't add it twice
  if (!url.searchParams.has("t")) {
    url.searchParams.set("t", "0");
  }

  chrome.tabs.update(tab.id, {
    url: url.toString(),
  });
});