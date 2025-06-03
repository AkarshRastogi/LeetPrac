document.addEventListener('DOMContentLoaded', async () => {
  const problemInfo = document.getElementById('problem-info');
  const notLeetcode = document.getElementById('not-leetcode');
  const problemTitle = document.getElementById('problem-title');
  const reminderDate = document.getElementById('reminder-date');
  const setReminderBtn = document.getElementById('set-reminder');
  const status = document.getElementById('status');
  const remindersList = document.getElementById('reminders-list');

  // Format current date and time for datetime-local input
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  
  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
  reminderDate.min = formattedDateTime;
  reminderDate.value = formattedDateTime;
  reminderDate.type = "datetime-local";

  // Load and display recent reminders
  await updateRecentReminders();

  // Get current tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // console.log([tab]);
  if (!tab.url.includes('leetcode.com/problems/')) {
    notLeetcode.style.display = 'block';
    problemInfo.style.display = 'none';
    return;
  }
  if (tab.url.includes('leetcode.com/problems/')) {
    notLeetcode.style.display = 'none';
  }

  // Extract problem info from URL
  const problemName = tab.url.split('/problems/')[1].split('/')[0];
  const formattedName = problemName
    .split('-')
    .map(word => word.toUpperCase())
    .join(' ');

  problemTitle.textContent = formattedName;
  problemInfo.style.display = 'block';

  setReminderBtn.addEventListener('click', async () => {
    const reminderTimestamp = new Date(reminderDate.value).getTime();
    
    // Validate that the selected time is in the future
    if (reminderTimestamp <= Date.now()) {
      showStatus('Please select a future date and time', 'error');
      return;
    }
    
    try {
      await chrome.storage.local.set({
        [problemName]: {
          title: formattedName,
          reminderDate: reminderTimestamp,
          url: tab.url,
          createdAt: Date.now() // Add creation timestamp
        }
      });

      await chrome.alarms.create(problemName, {
        when: reminderTimestamp
      });

      await updateRecentReminders();
      showStatus('Reminder set successfully!', 'success');
    } catch (error) {
      showStatus('Failed to set reminder. Please try again.', 'error');
    }
  });
});

async function updateRecentReminders() {
  const remindersList = document.getElementById('reminders-list');
  const data = await chrome.storage.local.get(null);
  
  // Convert object to array and sort by creation time
  const reminders = Object.entries(data)
    .map(([key, value]) => ({ key, ...value }))
    .filter(reminder => reminder.reminderDate) // Filter out non-reminder items
    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
    .slice(0, 5); // Get only the 5 most recent reminders

  remindersList.innerHTML = reminders.length ? '' : '<p>No reminders set yet</p>';

  reminders.forEach(reminder => {
    const now = Date.now();
    const isExpired = reminder.reminderDate < now;
    const reminderTime = new Date(reminder.reminderDate);
    
    const reminderEl = document.createElement('div');
    reminderEl.className = `reminder-item ${isExpired ? 'expired' : ''}`;
    reminderEl.innerHTML = `
      <div class="title">
        ${reminder.title}
        <span class="status ${isExpired ? 'expired' : 'active'}">
          ${isExpired ? 'Expired' : 'Active'}
        </span>
      </div>
      <div class="time">
        ${reminderTime.toLocaleString()}
      </div>
    `;

    // Make the reminder clickable to open the problem
    reminderEl.style.cursor = 'pointer';
    reminderEl.addEventListener('click', () => {
      chrome.tabs.create({ url: reminder.url });
    });

    remindersList.appendChild(reminderEl);
  });
}

function showStatus(message, type) {
  const status = document.getElementById('status');
  status.textContent = message;
  status.className = type;
  status.style.display = 'block';
  
  setTimeout(() => {
    status.style.display = 'none';
  }, 3000);
}