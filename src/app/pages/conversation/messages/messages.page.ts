import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { Message } from '../../../shared/models/message';
import { Conversation } from '../../../shared/models/conversation';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from '../../../shared/models/user';
import { ConversationService } from '../../../shared/services/conversation.service';

import { AuthenticationService } from '../../../shared/services/authentication.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  messages: Message[] = [];
  messages3: Message[] = [];
  conversation3: Conversation;

  conversation: Conversation;
  constructor(
    private authenticationService: AuthenticationService,
    private sharedService: SharedService,
    private router: Router,
    private convesationSrv: ConversationService,

  ) { 
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(
      user => {
        this.currentUser = user;
      }
    );
  }

  ngOnInit() {
    // this.sharedService.currentMessage.subscribe(message => this.messages = message)
    this.sharedService.currentConversation.subscribe(conversation => {
      this.conversation3 = conversation;
      this.messages = conversation.messages;
      this.messages3 = this.conversation3.messages
      .filter((item) => item.author !== this.currentUser.firstName + ' ' + this.currentUser.lastName)
      .filter((item) => item.read = true);
    });
  }

  updateConver(){
    this.convesationSrv.updateConversation(this.conversation.id, this.conversation3)
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

