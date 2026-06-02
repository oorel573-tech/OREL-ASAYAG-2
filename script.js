const fetchButton = document.getElementById('fetchButton');
const quoteArea = document.getElementById('quoteArea');

fetchButton.addEventListener('click', async () => {
  quoteArea.innerHTML = '<p>טוען ציטוט מהאינטרנט...</p>';

  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) {
      throw new Error('שגיאת רשת');
    }

    const data = await response.json();
    quoteArea.innerHTML = `
      <p class="quote-text">"${data.content}"</p>
      <p class="quote-author">- ${data.author}</p>
    `;
  } catch (error) {
    quoteArea.innerHTML = '<p>קרתה שגיאה בעת קבלת המידע. בדוק את החיבור לרשת ונסה שוב.</p>';
  }
});
