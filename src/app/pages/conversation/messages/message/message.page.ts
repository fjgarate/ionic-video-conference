import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../shared/services/shared.service';
import { Message } from '../../../../shared/models/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConversationService } from '../../../../shared/services/conversation.service';
import { Conversation } from '../../../../shared/models/conversation';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  messageForm: FormGroup;
  conversation: Conversation;
  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private convesationSrv: ConversationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.sharedService.currentConversation.subscribe(conversation =>
      this.conversation = conversation);

    this.messageForm = this.formBuilder.group({
      to: [this.conversation.other_participant, Validators.required],
      text: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.messageForm.controls; }
  onSubmit() {
    console.log(this.f.to.value);
    console.log(this.f.text.value);
    console.log(this.conversation.id);

    this.convesationSrv.addMessage(this.conversation.id, this.conversation.other_participant_id, this.f.text.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['dashboard'], {
          });
        },
        error => {
          // this.alertService.error(error);
          // this.loading = false;
          console.log(error);
          this.router.navigate(['message'], {
          });
        });
  }

}
