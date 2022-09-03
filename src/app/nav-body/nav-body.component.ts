import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-nav-body',
  templateUrl: './nav-body.component.html',
  styleUrls: ['./nav-body.component.css'],
})
export class NavBodyComponent {
  readFile() {
    var fs = require('fs'),
      xml2js = require('xml2js');

    var parser = new xml2js.Parser();
    fs.readFile('/db/SSRCharacters.xml', function (err, data) {
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
