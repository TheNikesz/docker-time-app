// Import potrzebnego frameworku i modulu
import express from 'express';
import fetch from'node-fetch';

// Stale - port, data i czas uruchomienia serwera i autor
const PORT = 8080;
const DATE = new Date().toLocaleString('pl-PL');
const AUTHOR = 'Blazej Typek';

// Funkcja pobierajaca date i czas na podstawie IP
async function getTimeFromIp(ip) {
  try {
    // Pobieranie danych z API na podstawie IP
    var response = await fetch(`http://ip-api.com/json/${ip}`);
    var data = await response.json();

    // Przygotowanie do zwrocenia odpowiedniej daty i czasu na podstawie strefy czasowej otrzymanej z API
    var timezone = data['timezone'];
    if (timezone == undefined) {
      timezone = "Europe/Warsaw";
    }
    var localDate = new Date().toLocaleString('pl-PL', {timezone});

    // Zwracanie daty i czasu
    return `${localDate}`;
    // Obsluga bledu podczas pobierania danych z API
  } catch (e) {
    console.log(e);
    return 'Pobieranie danych z API nie powiodlo sie.';
  }
}

// Aplikacja
const app = express();

// Zapis w logach - port, data i czas uruchomienia serwera i autor
console.log(`Data, czas uruchomienia: ${DATE}`);
console.log(`Autor: ${AUTHOR}`);
console.log(`Port: ${PORT}`);

app.set('trust proxy', true)
app.use(async (req, res) => {
  // Pobranie odpowiedniej daty i czasu do wyswietlenia na stronie
  var localDate = await getTimeFromIp(req.ip);
  // Wyswietlenie IP, daty i czasu na stronie
  res.send(`<p>IP: ${req.ip}</p><p>Data, czas:  ${localDate}</p>`);
  
});

// Ustawienie nasluchiwania serwera
app.listen(PORT, '0.0.0.0');