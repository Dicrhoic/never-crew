import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavBodyComponent } from '../nav-body/nav-body.component';

declare const require;
const xml2js = require('xml2js');

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {

  public xmlItems: any;
  private http: HttpClient;
  @ViewChild(NavBodyComponent, { read: ElementRef }) private child: ElementRef;

  //constructor(private NavBodyComponent: NavBodyComponent) {}

  //ngAfterViewInit() {
    //const element = this.child.nativeElement;
    //this.NavBodyComponent.navElement = this.child.nativeElement;
  //}

  loadXML() {
    /*Read Data*/
    this.http
      .get('assets/users.xml', {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append(
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'
          ),
        responseType: 'text',
      })
      .subscribe((data) => {
        this.parseXML(data).then((data) => {
          this.xmlItems = data;
        });
      });
  }

  parseXML(data) {
    return new Promise((resolve) => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser({
          trim: true,
          explicitArray: true,
        });
      parser.parseString(data, function (err, result) {
        var obj = result.accounts;
        for (k in obj.account) {
          var item = obj.account[k];
          arr.push({
            id: item.id[0],
            name: item.name[0],
            email: item.email[0],
          });
        }
        resolve(arr);
      });
    });
  }

  openNav() {
    if(document.getElementById('tabVerContent') != null)
    {
      document.getElementById('tabVerContent').style.display = 'block';
    }
    else
    {
      console.log("Cannot access data");
    }
  }

  loadLoginForm() {
    document.getElementById('login').style.display = 'block';
  }

  helpPass() {
    window.alert('Message Dichroic on Discord');
  }

  loginAuth() {

  }
}
