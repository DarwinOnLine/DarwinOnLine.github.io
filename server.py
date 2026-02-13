#!/usr/bin/env python3
"""
Simple HTTP server with custom 404 page support
Usage: python3 server.py [port]
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Try to serve the requested file
        path = self.translate_path(self.path)

        # If file doesn't exist and it's not a static file request
        if not os.path.exists(path) and not self.path.startswith('/assets/'):
            # Serve custom 404 page
            self.send_response(404)
            self.send_header('Content-type', 'text/html')
            self.end_headers()

            # Read and serve 404.html
            try:
                with open('404.html', 'rb') as f:
                    self.wfile.write(f.read())
            except FileNotFoundError:
                self.wfile.write(b'<h1>404 Not Found</h1>')
            return

        # Otherwise, serve normally
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"Server running at http://localhost:{PORT}/")
    print("Press Ctrl+C to stop")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
