# LeetPrac
LeetPrac is a Chrome extension that lets you set reminders to revisit LeetCode problems at a chosen date and time. The popup displays the current date and time before setting the reminder. Reminders are stored and trigger notifications when due, helping you stay on track with your LeetCode practice.

# LeetReminder

## Overview

**LeetReminder** is a Chrome extension designed to help you schedule reminders for revisiting LeetCode problems. It allows you to set a specific date and time to practice a problem again, displaying the current date and time (e.g., 2025-06-04T02:42 IST) before setting the reminder. When the reminder is due, a notification appears with an option to reopen the problem.

## Features

- **Set Reminders**: Schedule reminders for LeetCode problems by selecting a future date and time in the popup.
- **Current Date and Time Display**: View the current date and time (e.g., 2025-06-04T02:42 IST) in the popup for reference.
- **Recent Reminders**: See a list of up to 5 recent reminders, marked as "Active" or "Expired," with clickable links to reopen problems.
- **Notifications**: Receive a notification when a reminder is due, with a button to open the problem directly.
- **User-Friendly Interface**: Clean popup design with success/error messages and styled reminders list.

## Installation

1. **Clone or Download**:
   - Clone this repository or download the files to your local machine.
2. **Add Icons**:
   - The extension requires an icon file (`icon128.png`) as specified in `manifest.json`. Use the provided icon (a stylized "LC" logo with black, orange, and gray colors) or replace it with your own 128x128 PNG file named `icon128.png`.
3. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right.
   - Click "Load unpacked" and select the folder containing the extension files.
4. **Verify**:
   - The **LeetReminder** extension should appear in your Chrome extensions list with the provided icon.

## File Structure

- `manifest.json`: Defines the extension's configuration, permissions (`storage`, `alarms`, `notifications`), and scripts.
- `popup.html`: The popup interface where users set reminders and view recent ones.
- `popup.js`: Handles the popup logic, including displaying the current date and time, setting reminders, and updating the recent reminders list.
- `background.js`: Manages alarms and notifications, opening problem URLs when notifications are clicked.
- `styles.css`: Styles the popup UI, including buttons, input fields, and the reminders list.
- `icon128.png`: The extension icon (a stylized "LC" logo in black, orange, and gray).

## Usage

1. **Open the Popup**:
   - Click the **LeetReminder** icon in Chrome's toolbar to open the popup.
2. **Set a Reminder**:
   - Navigate to a LeetCode problem page (e.g., `https://leetcode.com/problems/two-sum/`).
   - The popup will display the problem title (e.g., "TWO SUM") and the current date and time (e.g., 2025-06-04T02:42 IST).
   - Select a future date and time using the datetime picker (defaults to the current time).
   - Click "Set Reminder" to schedule the reminder.
3. **View Recent Reminders**:
   - The popup lists up to 5 recent reminders, showing the problem title, reminder time, and status ("Active" or "Expired").
   - Click a reminder to reopen the problem in a new tab.
4. **Receive Notifications**:
   - When a reminder is due, a notification appears with the problem title and an "Open Problem" button.
   - Click the notification or button to open the problem URL.

## Screenshots
