import Controller from "@ember/controller";

export default Controller.extend({
  init() {
    this._super();
    this.config = {
      columns: [{ title: "Name", width: 2 }, { title: "height", width: 2 }]
    };
    fetch("//localhost:8000/api/some-resource")
      .then(res => res.json())
      .then(users => (this.users = users));
  },
  actions: {
    openUser(e) {
      console.log(e)
    }
  }
});
