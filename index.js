import { EmailSection } from './EmailSection/index.js';

const appElm = document.querySelector('#app');
const h1Elm = document.createElement('h1');
h1Elm.textContent = 'Příchozí pošta';
appElm.append(h1Elm);

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
  .then((response) => response.json())
  .then((data) => 
    appElm.append(
      EmailSection(
        {
          heading: "Nepřečtené",
          emails: data.emails,
          folder: data.emails.unread
        })));

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
  .then((response) => response.json())
  .then((data) => 
    appElm.append(
      EmailSection(
        {
          heading: "Přečtené",
          emails: data.emails,
          folder: data.emails.unread
        })));