document.querySelectorAll('[data-year]').forEach(function (node) { node.textContent = String(new Date().getFullYear()); });
