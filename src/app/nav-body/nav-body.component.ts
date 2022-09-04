import { Component } from '@angular/core';
import { Router} from '@angular/router';
import characters from '../..db/SSRCharacters.json';
declare var require: any;

@Component({
  selector: 'app-nav-body',
  templateUrl: './nav-body.component.html',
  styleUrls: ['./nav-body.component.css'],
})
export class NavBodyComponent {




  readFile() {
    var __dirname = "../db/";
    var fs = require('fs'),
      xml2js = require('xml2js');
      var parser = new xml2js.Parser();

      fs.readFile(__dirname + 'gachaLog.xml', function(err, data) {
        if(err)
        {
          console.log(err);
        }
          parser.parseString(data, function (err, result) {
              console.dir(result);
              console.log('Done');
          });
      });
  }
  loadCharacterDropdown()
  {
    this.readFile();
  }
}
