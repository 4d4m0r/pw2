const http = require('http');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const server = http.createServer(async (req, res) => {
    const { url } = req;
    if (url === '/' || url === '/index.html') {
        try {
            const html = await fs.readFile(path.join(__dirname, 'public', 'index.html'));
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Erro: ${error.message}`);
        }
    } else if (url === '/style.css') {
        try {
            const css = await fs.readFile(path.join(__dirname, 'public', 'style.css'));
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(css);
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Erro: ${error.message}`);
        }
    } else if (url === '/script.js') {
        try {
            const js = await fs.readFile(path.join(__dirname, 'public', 'script.js'));
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(js);
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Erro: ${error.message}`);
        }
    } else if (url.startsWith('/generate')) {
        const queryParams = new URLSearchParams(req.url.split('?')[1]);
        const numberOfParagraphs = parseInt(queryParams.get('numberOfParagraphs')) || 1;
        const loremIpsum = generateLoremIpsum(numberOfParagraphs);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(loremIpsum);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

function generateLoremIpsum(numberOfParagraphs) {
    const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return Array.from({ length: numberOfParagraphs }, () => loremIpsumText).join('\n\n');
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
