import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NodeModel } from 'src/node.model';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, OnChanges {

  @Input() folderStructure: NodeModel[];
  @Output() addNode = new EventEmitter<any>();
  @Output() removeNode = new EventEmitter<any>();

  showInput: boolean = false
  newValue: string = ''

  id = ''
  name = ''

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('tree changes: ', changes)
    // console.log('folder structure: ', this.folderStructure)
  }

  toggleInput(id: string, name: string) {
    this.id = id
    this.name = name
    this.showInput = !this.showInput
    this.newValue = ''

    // if (this.showInput == false) console.log('folderBase', this.folderBase)
  }

}
