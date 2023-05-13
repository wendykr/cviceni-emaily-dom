import { Email } from './Email/index.js';

const renderSection = (emails, element) => {

  const listItemElm = emails.map((item => Email(item)));
  element.append(...listItemElm);
};

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
  .then((response) => response.json())
  .then((data) => renderSection(data.emails, document.getElementById('unread')));

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
  .then((response) => response.json())
  .then((data) => renderSection(data.emails, document.getElementById('read')));