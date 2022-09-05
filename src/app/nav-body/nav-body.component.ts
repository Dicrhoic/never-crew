import { Component } from '@angular/core';
import { Router } from '@angular/router';
import characters from '../db/SSRCharacters.json';
declare var require: any;

@Component({
  selector: 'app-nav-body',
  templateUrl: './nav-body.component.html',
  styleUrls: ['./nav-body.component.css'],
})
export class NavBodyComponent {
  characterData: any;
  selectedCharacter: string = '';
  charsArry = []; 

  constructor() {
    this.characterData = characters;
  }

  readFile() {
    console.log();
    var __dirname = './';
    var fileName = __dirname + 'test.xml';
    var fs = require('fs'),
      xml2js = require('xml2js');
    var parser = new xml2js.Parser();
    console.log('index', characters);
    fs.readFile(__dirname + 'nav-body.component.css', function (err, data) {
      if (err) {
        console.log(err);
      }
      if (!fs.exists(fileName)) {
        console.log('File does not exist');
      }
      parser.parseString(data, function (err, result) {
        console.dir(result);
        console.log('Done');
      });
    });
  }

  getCharIndex(value: string) {
    this.charsArry = this.characterData;
    const a = characters;
    this.selectedCharacter = value;
    console.log(this.selectedCharacter);
    console.log(this.characterData);
    let index = this.charsArry.find(x => x.name === value);
  }
}
