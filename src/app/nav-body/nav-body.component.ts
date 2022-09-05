import { Component } from '@angular/core';
import { Router } from '@angular/router';
import characters from '../db/SSRCharacters.json';
declare var require: any;
let characterNumber = 0;

interface CharacterDetail {
  series: string;
  name: string;
  element: string;
  image: string;
}

@Component({
  selector: 'app-nav-body',
  templateUrl: './nav-body.component.html',
  styleUrls: ['./nav-body.component.css'],
})
export class NavBodyComponent {

  imageHolder: HTMLImageElement;
  selectedOption: string;
  printedOption: string;
  characterData: any;
  selectedCharacter: string = '';
  chars: CharacterDetail[] = characters.character;

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

  getCharIndex(value: any) {
    this.selectedCharacter = value;
    console.log("Selected character " + this.selectedCharacter);
    console.log(this.characterData);
    console.log(Array.isArray(this.chars));
    let index = this.chars.find(x => x.name === value);
    console.log(index);
  }

  addCharacterToWall(value: any)
  {
    let index = this.chars.find(x => x.name === value);
    let image = index.image;
    console.log(index);
    console.log("Selected char is " + value);
    //var character = characterList.get(index);
    var myDiv = document.getElementById('characterWall');
    var characterArt = document.createElement('img');
    characterArt.setAttribute('src', image);
    var idName = "char " + characterNumber.toString();
    //console.log(idName);
    characterArt.addEventListener('click', function e (event) {
      console.log('image clicked');
      console.log(event.target);
      const el = event.target as HTMLInputElement
      console.log(el.getAttribute('id'));
      var a = document.getElementById(el.getAttribute('id'));
      a.remove();
      console.log("Removed image");
    });
    characterArt.setAttribute('width', "150");
    characterArt.setAttribute('width', "86");
    characterArt.setAttribute("id", idName);
    myDiv.append(characterArt);
    console.log("Created image" + idName);
    characterNumber++;
  }

  deleteCharArt(event)
  {
    console.log('image clicked');
    console.log(event.target);
    const el = event.target as HTMLInputElement
    console.log(el.getAttribute('id'));  

  }

  writeOutput()
  {
    var user, date, crystals;
    var charList = [];
    var imgSrcs = [];

    user = document.getElementById('nName') as HTMLInputElement;
    date = document.getElementById('gachatime') as HTMLInputElement;
    crystals = document.getElementById('crystalsUsed') as HTMLInputElement;
    console.log(user?.value);
    console.log(date?.value);
    console.log(crystals?.value);
    var imgs = document.getElementsByTagName("img");
  

    for (var i = 0; i < imgs.length; i++) {
      if(i > 0)
      { 
        imgSrcs.push(imgs[i].src);
      }     
    }
  }
}
