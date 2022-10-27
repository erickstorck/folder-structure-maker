import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import baseFolderStructure from '../folder-structure.json';
import { NodeModel } from '../node.model';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'folder-structure-maker';
  folderStructure: NodeModel[]
  showInput: boolean = false
  newValue: string = ''

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    ['file', 'folder'].forEach(e => this.matIconRegistry.addSvgIcon(e, this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${e}.svg`)))
  }

  ngOnInit() {
    this.folderStructure = baseFolderStructure
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ', changes)
  }

  addNode(id: string = '2') {
    console.log('add', id)
  }

  removeNode(id: string = '1') {
    console.log('remove', id)
  }

  toggleInput() {
    this.showInput = !this.showInput
    this.newValue = ''
    if (this.showInput == false) console.log('folder structure: ', this.folderStructure)
  }
}
