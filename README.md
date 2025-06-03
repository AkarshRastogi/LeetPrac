# LeetPrac
LeetPrac is a Chrome extension that lets you set reminders to revisit LeetCode problems at a chosen date and time. The popup displays the current date and time before setting the reminder. Reminders are stored and trigger notifications when due, helping you stay on track with your LeetCode practice.

# LeetReminder

## Overview

**LeetPrac** is a Chrome extension designed to help you schedule reminders for revisiting LeetCode problems. It allows you to set a specific date and time to practice a problem again, displaying the current date and time before setting the reminder. When the reminder is due, a notification appears with an option to reopen the problem.

## Features

- **Set Reminders**: Schedule reminders for LeetCode problems by selecting a future date and time in the popup.
- **Current Date and Time Display**: View the current date and time (e.g., 2025-06-04T02:42 IST) in the popup for reference.
- **Recent Reminders**: See a list of up to 5 recent reminders, marked as "Active" or "Expired," with clickable links to reopen problems.
- **Notifications**: Receive a notification when a reminder is due, with a button to open the problem directly.
- **User-Friendly Interface**: Clean popup design with success/error messages and styled reminders list.

## Installation

1. **Clone or Download**:
   - Clone this repository or download the files to your local machine.

2. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right.
   - Click "Load unpacked" and select the folder containing the extension files.
3. **Verify**:
   - The **LeetPrac** extension should appear in your Chrome extensions list with the provided icon.

## File Structure

- `manifest.json`: Defines the extension's configuration, permissions (`storage`, `alarms`, `notifications`), and scripts.
- `popup.html`: The popup interface where users set reminders and view recent ones.
- `popup.js`: Handles the popup logic, including displaying the current date and time, setting reminders, and updating the recent reminders list.
- `background.js`: Manages alarms and notifications, opening problem URLs when notifications are clicked.
- `styles.css`: Styles the popup UI, including buttons, input fields, and the reminders list.
- `icon128.png`: The extension icon 

## Usage

1. **Open the Popup**:
   - Click the **LeetReminder** icon in Chrome's toolbar to open the popup.
2. **Set a Reminder**:
   - Navigate to a LeetCode problem page (e.g., `https://leetcode.com/problems/two-sum/`).
   - The popup will display the problem title (e.g., "TWO SUM") and the current date and time
   - Select a future date and time using the datetime picker (defaults to the current time).
   - Click "Set Reminder" to schedule the reminder.
3. **View Recent Reminders**:
   - The popup lists up to 5 recent reminders, showing the problem title, reminder time, and status ("Active" or "Expired").
   - Click a reminder to reopen the problem in a new tab.
4. **Receive Notifications**:
   - When a reminder is due, a desktop notification appears with the problem title and an "Open Problem" button.
   - Click the notification or button to open the problem in your browser.

## Screenshots
![When extension is used on any website other LeetCode](https://raw.githubusercontent.com/AkarshRastogi/LeetPrac/main/img/extension_not_on_LC.png)
![When extension is used on LeetCode](https://raw.githubusercontent.com/AkarshRastogi/LeetPrac/main/img/extension_on_LC.png)
![Reminder Setup](https://raw.githubusercontent.com/AkarshRastogi/LeetPrac/main/img/reminder_setup.png)