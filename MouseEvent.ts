...
template:`
  <p>this is template inside Component decorator</p>
  <button (click)="OnClick($event)"></button>
`,
...

export class someComponent{
  OnClick(event){
    /*
      here,event is a MouseEvent object whos `type` is click and `toElement` is button as it is attacde to at button
    */
  }
}
