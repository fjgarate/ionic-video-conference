import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { Message } from '../../../shared/models/message';
import { Conversation } from '../../../shared/models/conversation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  messages: Message[] = [];
  conversation: Conversation;
  constructor(
    private sharedService: SharedService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.sharedService.currentMessage.subscribe(message => this.messages = message)
    this.sharedService.currentConversation.subscribe(conversation => this.messages = conversation.messages);
  }
  createMessage() {
    console.log('create message');
    this.router.navigate(['message'], {
    });
  }
  openMessage(event) {
    console.log('openMessages');
    const target = event.currentTarget;
    console.log(target.lastElementChild.className);
    // target.lastElementChild.classList.remove("b")
  }
}

