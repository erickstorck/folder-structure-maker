import { Component, OnInit } from '@angular/core';
import baseFolderStructure from '../folder-structure.json';
import { NodeModel } from '../node.model';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'folder-structure-maker';

  folderJson: NodeModel[] = []

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    ['file', 'folder'].forEach(e => this.matIconRegistry.addSvgIcon(e, this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${e}.svg`)))
  }

  ngOnInit(): void {
    // load test json
    // this.folderJson = baseFolderStructure
  }
}
