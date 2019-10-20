import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { IChat } from '../structures/chat';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-conversation',
    templateUrl: './conversation.page.html',
    styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

    constructor(public chat: ChatService) { }

    public messages:any = [];
    ngOnInit() {
        this.chat.getMessages().subscribe(res => {
            console.log(res)
            this.messages = res;
        });
    }

}
