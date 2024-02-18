document.getElementById('form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const numberOfParagraphs = document.getElementById('numberOfParagraphs').value;
    const response = await fetch(`/generate?numberOfParagraphs=${numberOfParagraphs}`);
    const data = await response.text();
    document.getElementById('output').innerHTML = data;
});
