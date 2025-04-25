# Fisheye Menu - Usability Heuristics

This project implements a fisheye menu for Nielsen's 10 usability heuristics as required for the BIT 2305 Group-based Assignment (Jan-Apr 2025).

## Project Overview

The fisheye menu displays all 10 usability heuristics at once. When a user hovers over or clicks on a menu item, it becomes larger compared to the other items and displays more details about that specific usability heuristic.

## Features

- Interactive fisheye effect that enlarges the selected menu item
- Detailed descriptions of all 10 usability heuristics
- Responsive design that works on both desktop and mobile devices
- Keyboard navigation for accessibility
- Clean, professional visual design

## File Structure

- `index.html` - Main HTML structure of the page
- `styles.css` - All styling for the page and the fisheye menu
- `script.js` - JavaScript functionality for interactions
- `README.md` - This documentation file

## How to Use

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Hover over or click on any of the menu items (UH#1 through UH#10) to see the fisheye effect and detailed information

## Implementation Details

### HTML
The HTML structure includes a header, the fisheye menu with 10 items, an instructions section, and a footer. Each menu item contains both a label (UH#1 through UH#10) and content that becomes visible when the item is active.

### CSS
The CSS provides styling for the fisheye effect using flex properties and transitions. When a menu item is hovered over or clicked, it expands while the other items remain visible but smaller.

### JavaScript
The JavaScript handles the click events, adds keyboard navigation for accessibility, and manages the active states of the menu items.

## Accessibility
This implementation includes keyboard navigation to ensure the menu is accessible to all users:
- Tab to focus on menu items
- Arrow keys to navigate between items
- Enter or Space to activate an item

## Group Members
[Add your group members' names here]

## Submission Date
Wednesday, 23rd April 2025