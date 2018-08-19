import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { JeditorComponent } from './jeditor/jeditor.component';
import { JeditorTreeComponent } from './jeditor-tree/jeditor-tree.component';
@NgModule({
  declarations: [
    AppComponent,
    JeditorComponent,
    JeditorTreeComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgJsonEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
