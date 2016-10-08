var inventory;

(function() {
  inventory = {
    collection: [],
    setDate: function() {
      var now = new Date().toJSON().slice(0, 10);
      $("#order_date").append(now);
    },
    getCachedElement: function() {
      this.template = $("#inventory_item").remove().html();
    },
    init: function() {
      this.getCachedElement();
      this.setDate();
    }
  };

})();

$(inventory.init.bind(inventory));
