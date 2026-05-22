<h1 align="center">Personal Portfolio</h1>

<p align="center">
  <img src="https://img.shields.io/badge/python-3.10+-blue.svg" alt="Python 3.10+">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License MIT">
  <img src="https://img.shields.io/badge/version-0.2.0-orange.svg" alt="Version 0.2.0">
</p>

<p align="center">
  A fully responsive, single-page personal portfolio website built with HTML, CSS, JavaScript, and Python (Jinja2 templating).
</p>

---

## Tech Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| **Templates** | [Jinja2](https://jinja.palletsprojects.com/) |
| **Config**    | YAML                                           |
| **Styling**   | CSS3                                           |
| **Scripting** | Vanilla JavaScript                             |
| **Build**     | Python + Makefile                              |
| **Linting**   | Ruff                                           |
| **Testing**   | Pytest                                         |

## Project Structure

```
.
├── config/          # YAML configuration files
├── src/
│   ├── css/         # Stylesheets
│   ├── images/      # Icons and assets
│   ├── jinja/       # Jinja2 templates (pages, partials)
│   └── js/          # Client-side JavaScript
├── main.py          # Build entry point
├── watch.py         # File watcher for local development
├── Makefile         # Common task shortcuts
└── pyproject.toml   # Project metadata and dependencies
```

## Getting Started

### Prerequisites

- Python 3.10 or later
- [Poetry](https://python-poetry.org/docs/#installation)

### Setup

```bash
# Install dependencies
poetry install --with=dev

# Activate the virtual environment
poetry shell

# Start the file watcher (auto-rebuilds on changes)
python3 watch.py
```

Or use the Makefile:

```bash
make setup    # Full setup + launch watcher
make watch    # Run watcher (if already set up)
```

### Build

Run the build script to generate the static `index.html`:

```bash
python3 main.py
```

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
