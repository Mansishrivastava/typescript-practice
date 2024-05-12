    class TreeNode<T> {
    value: T;
    children: TreeNode<T>[];
    constructor(value: T) {
        this.value = value;
        this.children = [];
    }
    addChild(child: TreeNode<T>): void {
        this.children.push(child);
    }
    printTree(prefix: string = '', isLast: boolean = true): void {
        const connector = isLast ? '└── ' : '├── ';
        console.log(prefix + connector + this.value);
        const newPrefix = prefix + (isLast ? '    ' : '|   ');

        this.children.forEach((child, index) => {
            child.printTree(newPrefix, index === this.children.length - 1);
        });
    }
    }
    let rootNode=new TreeNode("Main Node");
    let childNode1=new TreeNode("child Node 1");
    let childNode2=new TreeNode("child Node 2");
    let subChildNode1=new TreeNode("Sub child 1");
    let subChildNode2=new TreeNode("Sub Child Node 2")

    rootNode.addChild(childNode1);
    rootNode.addChild(childNode2);
    childNode1.addChild(subChildNode1);
    childNode2.addChild(subChildNode2);

    rootNode.printTree();
