import { EmailSection } from './EmailSection/index.js';

const appElm = document.querySelector('#app');
const h1Elm = document.createElement('h1');
h1Elm.textContent = 'Příchozí pošta';
appElm.append(h1Elm);

appElm.append(
  EmailSection(
    {
      heading: "Nepřečtené",
      emails: 'loading',
      folder: 'unread',
    }),
  EmailSection(
    { 
      heading: "Přečtené",
      emails: 'loading',
      folder: 'read',
    }),
);