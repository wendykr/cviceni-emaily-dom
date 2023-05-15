import { Email } from '../Email/index.js';

export const EmailSection = (props) => {

    const { heading, emails, folder } = props;

    let icon = 'unread';
    if (folder) {
        icon = 'read';
    };

    const element = document.createElement('section');
    element.classList.add('inbox');

    element.innerHTML = `
        <section class="inbox">
            <h2>${heading}</h2>
            <div class="emails" id="${icon}">
            </div>
        </section>
    `;

    const listEmailElm = emails
        .map(oneEmail => Email(
        {
            senderName: oneEmail.sender.name,
            subject: oneEmail.subject,
            time: oneEmail.time,
            unread: oneEmail.unread,
        }));
        element.querySelector('.emails').append(...listEmailElm);

    return element;
}