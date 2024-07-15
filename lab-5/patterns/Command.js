class Command {
  execute() {
    throw new Error('Execute method should be overridden!');
  }
}

class AddElementCommand extends Command {
  constructor(parent, element) {
    super();
    this.parent = parent;
    this.element = element;
  }

  execute() {
    this.parent.addChild(this.element);
  }
}

class RemoveElementCommand extends Command {
  constructor(parent, element) {
    super();
    this.parent = parent;
    this.element = element;
  }

  execute() {
    const index = this.parent.children.indexOf(this.element);
    if (index > -1) {
      this.parent.children.splice(index, 1);
      this.element.onRemoved();
    }
  }
}

module.exports = { Command, AddElementCommand, RemoveElementCommand };
