import { Email } from '../Email/index.js';

export const EmailSection = (props) => {

    const { heading, emails, folder } = props;

    let status = 'Načítám…';
    if (emails !== 'loading') {
        status = emails.status;
    }

    let icon = 'unread';
    if (folder) {
        icon = 'read';
    };

    const element = document.createElement('section');
    element.classList.add('inbox');

    element.innerHTML = `
        <h2>${heading}</h2>
        <div class="emails" id="${icon}">
        </div>
    `;

    if (emails === 'loading') {
        fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${icon}`)
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