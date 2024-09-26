export class User {
    constructor(id, username, email, group) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.group = group;
        this.messages = []; // Сообщения, отправленные и полученные пользователем
    }

    sendMessage(recipient, text) {
        const message = {
            sender: this.username,
            recipient: recipient.username,
            text: text,
            timestamp: new Date(),
        };
        this.messages.push(message);
        recipient.receiveMessage(message);
    }

    receiveMessage(message) {
        this.messages.push(message);
    }
}