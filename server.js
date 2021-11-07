import express from 'express';
import fetch from'node-fetch';

// Constants
const PORT = 8080;
const DATE = new Date().toLocaleString('pl-PL');
const AUTHOR = 'Blazej Typek';

// Functions
async function getTimeFromIp(ip) {
  try {
    var response = await fetch(`http://ip-api.com/json/${ip}`);
    var data = await response.json();
    
    var timezone = data['timezone'];
    if (timezone == undefined) {
      timezone = "Europe/Warsaw";
    }
    var localDate = new Date().toLocaleString('pl-PL', {timezone});

    return `${localDate}`;
  } catch (e) {
    console.log(e);
    return 'Pobieranie danych z API nie powiodlo sie.';
  }
}

// App
const app = express();

console.log(`Data, czas uruchomienia: ${DATE}`);
console.log(`Autor: ${AUTHOR}`);
console.log(`Port: ${PORT}`);

app.set('trust proxy', true)
app.use(async (req, res) => {
  var localDate = await getTimeFromIp(req.ip);
  res.send(`<p>IP: ${req.ip}</p><p>Data, czas:  ${localDate}</p>`);
  
});

app.listen(PORT, '0.0.0.0');