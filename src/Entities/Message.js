export class Message {
    constructor(sender, recipient, text) {
        this.sender = sender;
        this.recipient = recipient;
        this.text = text;
        this.timestamp = new Date();
    }
}

