import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {
    FileUploader, FileUploaderOptions, FileSelectDirective,
    FileDropDirective
} from 'ng2-file-upload/ng2-file-upload';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";

@NgModule({
	imports: [
	],
	providers: [
	],
	declarations: [AppComponent,
		FileSelectDirective,
		FileDropDirective
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
