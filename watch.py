import time
import threading
from http.server import HTTPServer, SimpleHTTPRequestHandler
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
from main import Portfolio

portfolio = Portfolio()

# ==========================
# Функция авто-сборки
# ==========================
def build_portfolio():
    context = {key: portfolio.load_config_file(key) for key in portfolio.config_files}
    portfolio.render_template("index.j2", "index.html", context)
    print("[INFO] index.html обновлен.")

# ==========================
# Watchdog handler
# ==========================
class PortfolioHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.src_path.endswith((".yml", ".j2")):
            print(f"[INFO] {event.src_path} изменен, пересобираем...")
            build_portfolio()

# ==========================
# HTTP сервер
# ==========================
def start_server():
    server_address = ("", 8000)  # localhost:8000
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print("[INFO] HTTP сервер запущен: http://localhost:8000")
    httpd.serve_forever()

# ==========================
# Основная функция
# ==========================
if __name__ == "__main__":
    # начальная сборка
    build_portfolio()

    # запуск HTTP сервера в отдельном потоке
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()

    # запуск наблюдателя за файлами
    event_handler = PortfolioHandler()
    observer = Observer()
    observer.schedule(event_handler, path=".", recursive=True)
    observer.start()
    print("[INFO] Слежение за изменениями запущено. CTRL+C для выхода.")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
