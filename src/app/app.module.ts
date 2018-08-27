import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { JeditorComponent } from './jeditor/jeditor.component';
import { JeditorTreeComponent } from './jeditor-tree/jeditor-tree.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    JeditorComponent,
    JeditorTreeComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgJsonEditorModule,
    HttpClientModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
