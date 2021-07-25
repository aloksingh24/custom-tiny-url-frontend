import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomTinyUrlResponse } from './model/tinyurl';
import { TinyurlService } from './tinyurl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  customTinyUrls: Array<CustomTinyUrlResponse> = [];
  title = 'custom-tiny-url-frontend';
  error: boolean = false;
  errorMessage: string;
  createUrlForm:FormGroup;
  constructor(private tinyUrlService: TinyurlService, private router: Router){
    this.createUrlForm = new FormGroup({
      url: new FormControl()
    })
   
  }
  ngOnInit(): void {
    this.getAllUrlInfo();
  }

  getAllUrlInfo(){
    this.tinyUrlService.getAllGeneratedUrl().subscribe(res=>{
      this.customTinyUrls = res;
      console.log(this.customTinyUrls);
    })
  }

  genrateShortUrl(){
    console.log(this.createUrlForm.value);
    this.tinyUrlService.createUrl(this.createUrlForm.value.url).subscribe(res=>{
      this.customTinyUrls.push(res);
      this.createUrlForm.reset();
      this.error = false;
      this.errorMessage = "";
    },
    (error=>{
      this.error = true;
      this.errorMessage = error.error.errorMessage;
    })
    )
  }
 

  trackByFn(index, item) {
    return item.hashedUrl;
  }

}
