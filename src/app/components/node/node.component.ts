import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NodeModel } from 'src/node.model';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() node: NodeModel
  @Output() removeNode = new EventEmitter<any>()
  @Output() appendNode = new EventEmitter<any>()

  nodeName = ''

  @ViewChild("nodeinput") nodeInputField: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.nodeInputField.nativeElement.focus();
  }

  ngOnInit(): void {
  }

  addNodeName(newName: string) {
    // fill node's type and name
    // if name is empty, delete the node
    if (newName.replace(/\s/g, '') != '') {
      this.node.type = newName.includes('.') ? 'file' : 'folder'
      this.node.name = newName
    } else {
      this.removeNode.emit(this.node.id)
    }
  }

  newNode(id: number) {
    this.appendNode.emit(id)
  }
}
