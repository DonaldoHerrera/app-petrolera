import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { IChat } from '../structures/chat';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private api = new Api();
    private collection: AngularFirestoreCollection<IChat>;
    private messages: Observable<IChat[]>;
    constructor(private http: HttpClient, private afs: AngularFirestore) {
        this.setCollection();
    }

    setCollection() {
        this.collection = this.afs.collection<IChat>('messages');
        this.messages = this.collection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    getMessages() {
        return this.messages;
    }

    getUsersOnline() {
        console.log(this.api.getUrlUsersOnline())
        return this.http.get(this.api.getUrlUsersOnline());
    }
}
