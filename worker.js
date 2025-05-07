// Import the raw contents of your HTML file as a string
import html from "./index.html";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Only serve the HTML on “/”
    if (url.pathname === "/") {
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=UTF-8" }
      });
    }

    // All other paths  →  404
    return new Response("Not found", { status: 404 });
  }
};
