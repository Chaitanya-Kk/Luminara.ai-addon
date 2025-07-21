    const apiKey = "Your_API_KEY_here"; // For testing only

    async function fetchGemini(prompt) {
      const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 2048 }
        })
      });
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "No valid response.";
    }

    function appendMessage(text, cls) {
      const formatted = text.replace(/\n/g, "<br>");
      const div = document.createElement('div');
      div.innerHTML = `<p class="${cls}">${formatted}</p>`;
      document.getElementById('chat-history').appendChild(div);
      document.getElementById('chat-history').scrollTop = document.getElementById('chat-history').scrollHeight;
    }

    async function sendMessage() {
      const input = document.getElementById('message-input');
      const message = input.value.trim();
      if (!message) return;

      appendMessage(`<strong>You:</strong> ${message}`, 'user-message');
      appendMessage('Loading...', 'loading-message');

      try {
        const reply = await fetchGemini(message);
        appendMessage(`<strong>Gemini:</strong> ${reply}`, 'ai-message');
      } catch (err) {
        appendMessage(`<strong>Error:</strong> ${err.message}`, 'error-message');
      } finally {
        document.querySelector('.loading-message')?.remove();
        input.value = '';
      }
    }

    async function getDesignLink() {
      const input = document.getElementById('message-input');
      const query = encodeURIComponent(input.value.trim());

      if (!query) {
        document.getElementById('design-link').textContent = 'Please enter a design type.';
        return;
      }

      const pinterestSearchUrl = `https://www.pinterest.com/search/pins/?q=${query}`;
      document.getElementById('design-link').innerHTML = `<a href="${pinterestSearchUrl}" target="_blank">${pinterestSearchUrl}</a>`;
      appendMessage(`<strong>Gemini:</strong> You can explore designs for "${input.value}" using the above Pinterest link.`, 'ai-message');
    }

    async function getCanvasInstructions() {
      const input = document.getElementById('message-input');
      const prompt = `Give me step-by-step creative and detailed instructions to design a "${input.value}" using Adobe Express. 
Include ideas for placement of text, images, colors, fonts, spacing, shapes, and any other creative elements. Make it visually appealing.`;
      try {
        appendMessage('Loading design instructions...', 'loading-message');
        const instructions = await fetchGemini(prompt);
        appendMessage(`<strong>Canvas Instructions:</strong><br>${instructions}`, 'ai-message');
      } catch (err) {
        appendMessage(`<strong>Error:</strong> ${err.message}`, 'error-message');
      } finally {
        document.querySelector('.loading-message')?.remove();
      }
    }

    document.getElementById('message-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') sendMessage();
    });
 
