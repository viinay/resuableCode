import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } form '@angular/forms';
import { HttpModule } form '@angular/http';

//user defined component
import { AppComponent } from './app.component';

@NgModule({
	imports:[
		HttpModule,
		FormsModule,
		BrowserModule
	],
	declarations:[
		AppComponent
	],
	providers:[],
	bootstrap:[AppComponent] //bootstrap the component check angularComponent
})

export class AppModule { }
