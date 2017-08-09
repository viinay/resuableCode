
import { Component } from '@angular/core';

@Component({
	selector:'app.root',
	templeate:`<h1>some template with {{title}} defined inside component AppComponent</h1>`,
	styleUrls:[`some css{};`]
})

export class AppComponent {
	title='some title to show';
}
