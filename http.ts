import { Http,Response,Headers } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

var headerContent = new Headers()
headerContent.append('Content-Type','application/json')

export class ComponentName{
  constructor(private http:Http){}
  
  sendRequest(){
    this.http.get(url)
      .map((res:Response)=>res.json())
      .do((data)=>console.log(data+' looks like this'))
      .subscribe((data)=>console.log(data))
  }
}
