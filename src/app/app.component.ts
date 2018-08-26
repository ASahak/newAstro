import { Component } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import {ReversePipe} from 'ngx-pipes';
//nerqevi errori hamara
import * as firebase from 'firebase';
//nerqevi errori hamara
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReversePipe]
})
export class AppComponent {
  title = 'app'
  
// Old:
//const date = snapshot.get(‘created_at’);
// New:
//const timestamp = snapshot.get(‘created_at’);
//const date = timestamp.toDate();
  
    constructor(
      private reversePipe: ReversePipe, 
      public db: AngularFirestore
    ) {
        this.reversePipe.transform('foo');
        const settings = { timestampsInSnapshots: true };
        db.app.firestore().settings(settings);
        
    }

 
//verevi errori hamara
}
