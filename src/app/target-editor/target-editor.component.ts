import { Component, OnInit, ViewChild, Input ,EventEmitter,Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'target-editor',
  templateUrl: './target-editor.component.html',
  styleUrls: ['./target-editor.component.css']
})
export class TargetEditorComponent  {
 /* @Input() text: any;
  @Output() targetJSONEE: EventEmitter<any> = new EventEmitter();
  @ViewChild('editor') editor;
    // text: string = "";
    // text = InputJSON
    ngAfterViewInit() {
        this.editor.setTheme("xcode");
        this.editor.setMode('tree')
        
        this.editor.getEditor().setOptions({
            // enableBasicAutocompletion: false
            wrap:true
        });
 
        this.editor.getEditor().commands.addCommand({
            name: "showOtherCompletions",
            bindKey: "Ctrl-.",
            exec: function (editor) {
 
            }
        })
    } 
    // ngOnChanges(changes: SimpleChanges) {
    //   // console.log(changes.text);
    // }
    onChange($event){
      this.targetJSONEE.emit(this.text)
    }
*/
}
