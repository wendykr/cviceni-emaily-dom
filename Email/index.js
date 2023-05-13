export const Email = (props) => {

    const { senderName, subject, time, unread } = props;

    const element = document.createElement('div');
    element.classList.add('email');

    let iconClass = 'opened';
    if (unread) {
        iconClass = 'closed';
    };

    element.innerHTML = `
        <div class="email__head">
            <button class="email__icon email__icon--${iconClass}"></button>
            <div class="email__info">
                <div class="email__sender">${senderName}</div>
                <div class="email__subject">${subject}</div>
            </div>
            <div class="email__time">${time}</div>
        </div>
        <div class="email__body"></div>
    `;

    return element;

}