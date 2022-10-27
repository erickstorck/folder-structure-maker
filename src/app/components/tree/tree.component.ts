import { Component, Input, OnInit } from '@angular/core';
import { NodeModel } from 'src/node.model';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() folderJson: NodeModel[]

  constructor() { }

  ngOnInit(): void {
  }

  addRoot() {
    // add a new node on root
    this.folderJson.push({
      type: 'folder',
      name: '',
      children: [],
      id: Math.floor(Math.random() * Date.now())
    })
  }

  removeNode(id: number) {
    this.markAsRemoved(this.folderJson, id)
  }

  markAsRemoved(list: NodeModel[], id: number) {
    // recursive function to remove a node from the right place
    if (list.some(node => node.id == id)) {
      list.map(node => {
        if (node.id == id) node.removed = true
      })
    } else {
      list.forEach(subNode => this.markAsRemoved(subNode.children, id))
    }
  }

  appendNode(id: number) {
    this.addNode(this.folderJson, id)
  }

  addNode(list: NodeModel[], id: number) {
    // recursive function to add a new node on the right place
    if (list.some(node => node.id == id)) {
      list.find(node => node.id == id)?.children.push({
        type: 'folder',
        name: '',
        children: [],
        id: Math.floor(Math.random() * Date.now())
      })
    } else {
      list.forEach(subNode => this.addNode(subNode.children, id))
    }
  }

  showJson() {
    return JSON.stringify(this.folderJson, null, '  ')
  }

}
