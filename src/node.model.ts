export class NodeModel {
    type: string;
    name: string;
    children: NodeModel[];
    id: number;
    removed?: boolean;
}