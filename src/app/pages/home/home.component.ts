import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import {
	FaIconLibrary,
	FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { IonicModule } from '@ionic/angular';
import { ChitChatModule } from 'chit-chat';

@Component({
	selector: 'chitchat-home',
	standalone: true,
	imports: [
		CommonModule,
		IonicModule,
		FontAwesomeModule,
		PickerComponent,
		ChitChatModule,
	],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	constructor(private iconLibrary: FaIconLibrary) {
		this.iconLibrary.addIcons(faPhone);
	}
}
