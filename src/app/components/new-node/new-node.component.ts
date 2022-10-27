import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from 'src/node.model';

@Component({
  selector: 'new-node',
  templateUrl: './new-node.component.html',
  styleUrls: ['./new-node.component.scss']
})
export class NewNodeComponent implements OnInit {

  @Input() folderStructure: NodeModel[];
  @Input() father: string;
  @Output() deleteComponent = new EventEmitter<any>();

  newValue: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  newNode(name: string): void {
    if (name) {
      if (this.father == 'root') {
        this.folderStructure.push(this.nodeGenerator(name))
      } else {
        const node = this.folderStructure.find(node => node.name == this.father)
        if (node) Object.keys(node).includes('children') ? node['children']?.push(this.nodeGenerator(name)) : node['children'] = [this.nodeGenerator(name)]
      }
    }
    this.deleteComponent.emit();
  }

  nodeGenerator(name: string): NodeModel {
    return {
      "type": name.includes('.') ? "file" : "folder",
      "name": name,
      "id": `${Math.floor(Math.random() * Date.now())}`,
      "children": []
    }
  }
}
