import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return fetch("//localhost:8000/api/some-resource")
      .then(res => res.json())
      .then(users => ({
        users,
        config: {
          columns: [{ title: "Name", width: 2 }, { title: "height", width: 2 }]
        }
      }));
  }
});
