# YouTube t=0 Extension

A simple Chrome extension that appends `t=0` to the current YouTube video's URL with a single click.

## Features

- Adds `t=0` to the current YouTube video URL.
- Prevents adding the parameter multiple times.
- Lightweight and easy to use.
- Built using Manifest V3.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/<your-username>/youtube-t0-extension.git
```

2. Open Chrome and go to:

```
chrome://extensions
```

3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the project folder.

## Usage

1. Open any YouTube video.
2. Click the extension icon.
3. Click **Add t=0**.
4. The URL will be updated to include `t=0`.

### Example

Before:

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

After:

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=0
```

## Project Structure

```
youtube-t0-extension/
├── manifest.json
├── popup.html
└── popup.js
```

## Tech Stack

- HTML
- CSS
- JavaScript
- Chrome Extensions API (Manifest V3)

## License

This project is licensed under the MIT License.
