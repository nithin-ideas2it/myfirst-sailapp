A.app({
  appName: "Hello World",
  appIcon: "heart",
  menuItems: [
    {
      name: "Gifts",
      icon: "gift",
      entityTypeId: "Gift",
    }
  ],
  entities: function(Fields) {
    return {
      Gift: {
        title: 'Gifts',
        fields: {
          item: Fields.text("Item"),
          date: Fields.date("Giving Date")
        }
      }
    }
  }
});
