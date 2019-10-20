import { Component } from '@angular/core';
import { ChatService} from '../services/chat.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private usersOnline : any[];
  constructor(private chatService: ChatService) {
    this.getUsersOnline();
  }
  getUsersOnline(){
    
    this.chatService.getUsersOnline().subscribe((res:any)=>{
      this.usersOnline= res.data;
      console.log(res.data);
    },(error)=>{
      console.log(error);
    });
  }


}
