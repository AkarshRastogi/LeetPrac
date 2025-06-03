chrome.alarms.onAlarm.addListener(async (alarm) => {
  const data = await chrome.storage.local.get(alarm.name);
  const problem = data[alarm.name];

  if (problem) {
    // Create notification with unique ID matching the alarm name
    chrome.notifications.create(alarm.name, {
      type: 'basic',
      iconUrl: 'icon128.png',
      title: 'LeetCode Practice Reminder',
      message: `Time to practice "${problem.title}"! Click to open.`,
      priority: 2,
      // requireInteraction: true, // Keep notification visible until user interacts
      buttons: [{ title: 'Open Problem' }]
    });
  }
});

// Handle both notification clicks and button clicks
chrome.notifications.onClicked.addListener(async (notificationId) => {
  const data = await chrome.storage.local.get(notificationId);
  if (data[notificationId]) {
    chrome.tabs.create({ url: data[notificationId].url });
    chrome.notifications.clear(notificationId);
  }
});

chrome.notifications.onButtonClicked.addListener(async (notificationId, buttonIndex) => {
  if (buttonIndex === 0) {
    const data = await chrome.storage.local.get(notificationId);
    if (data[notificationId]) {
      chrome.tabs.create({ url: data[notificationId].url });
      chrome.notifications.clear(notificationId);
    }
  }
});