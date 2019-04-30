import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Message } from '../models/message';
import { Conversation } from '../models/conversation';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject<Message[]>([]);
  currentMessage = this.messageSource.asObservable();

  private conversationSource = new BehaviorSubject<Conversation>(null);
  currentConversation = this.conversationSource.asObservable();
  constructor() { }

  changeMessages(messages: Message[]) {
    this.messageSource.next(messages);
  }
  changeConversation(conversation: Conversation) {
    this.conversationSource.next(conversation);
  }
}
