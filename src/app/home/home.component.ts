import { Component } from '@angular/core';
import { MessageService } from '../message.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    constructor(private messageService: MessageService) { }

    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage('Message from Home Component to App Component!');
    }

    clearMessages(): void {
        // clear messages
        this.messageService.clearMessages();
    }
}
