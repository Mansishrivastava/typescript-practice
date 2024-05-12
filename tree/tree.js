var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.children = [];
    }
    TreeNode.prototype.addChild = function (child) {
        this.children.push(child);
    };
    TreeNode.prototype.printTree = function (prefix, isLast) {
        var _this = this;
        if (prefix === void 0) { prefix = ''; }
        if (isLast === void 0) { isLast = true; }
        var connector = isLast ? '└── ' : '├── ';
        console.log(prefix + connector + this.value);
        var newPrefix = prefix + (isLast ? '    ' : '|   ');
        this.children.forEach(function (child, index) {
            child.printTree(newPrefix, index === _this.children.length - 1);
        });
    };
    return TreeNode;
}());
var rootNode = new TreeNode("Main Node");
var childNode1 = new TreeNode("child Node 1");
var childNode2 = new TreeNode("child Node 2");
var subChildNode1 = new TreeNode("Sub child 1");
var subChildNode2 = new TreeNode("Sub Child Node 2");
rootNode.addChild(childNode1);
rootNode.addChild(childNode2);
childNode1.addChild(subChildNode1);
childNode2.addChild(subChildNode2);
rootNode.printTree();
