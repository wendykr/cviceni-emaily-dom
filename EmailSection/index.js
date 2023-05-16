import { Email } from '../Email/index.js';

export const EmailSection = (props) => {

    let { heading, emails = [], folder } = props;

    heading = 'Načítám…';
    if (emails !== 'loading') {
        if (folder === 'read') {
            heading = 'Přečtené';
        } else {
            heading = 'Nepřečtené';
        }
    }

    const element = document.createElement('section');
    element.classList.add('inbox');

    element.innerHTML = `
        <h2>${heading}</h2>
        <div class="emails" id="${folder}">
        </div>
    `;

    if (emails === 'loading') {
        fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${folder}`)
        .then((response) => response.json())
        .then((data) => {
            element.replaceWith(
                EmailSection({
                    heading: heading,
                    emails: data.emails,
                    folder: folder,
                    })
            );
        });

    } else {

        const listEmailElm = emails
            .map(oneEmail => Email(
            {
                id: oneEmail.id,
                senderName: oneEmail.sender.name,
                subject: oneEmail.subject,
                time: oneEmail.time,
                unread: oneEmail.unread,
            }));
            element.querySelector('.emails').append(...listEmailElm);
    }

    return element;
}