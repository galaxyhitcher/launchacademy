function createInvoice(services) {
  services = services || {};
  var invoice = {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total: function() {
      return invoice.phone + invoice.internet;
    },
    decrementAmount: function(amt) {
      var that = this;
      if (amt > 0 && that.phone > amt) {
        that.phone -= amt;
      } else if (amt > 0 && services.internet > amt) {
        that.internet -= amt;
      } else {
        amt -= that.phone;
        that.phone = 0;
        that.internet -= amt;
      }
    },
    addPayment: function(payment) {
      this.phone -= payment.phone;
      this.internet -= payment.internet;
      if (payment.amount) {
        this.decrementAmount(payment.amount);
      }
    },
    addPayments: function(payments) {
      var that = this;
      payments.forEach(function(payment) {
        that.addPayment(payment);
      });
    },
    amountDue: function() {
      return this.total();
    }
  };

  return invoice;
}

function invoiceTotal(invoices) {
  var total = 0;
  for (var i = 0; i < invoices.length; i++) {
    total += invoices[i].total();
  }

  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
 internet: 6500
}));

invoices.push(createInvoice({
 phone: 2000
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));
console.log(invoiceTotal(invoices)); // 31000

function createPayment(services) {
  services = services || {};
  var paid = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,
    total: function() {
      return paid.phone + paid.internet + paid.amount;
    },
  };

  return paid;
}

function paymentTotal(payments) {
  var total = 0;
  for (var i = 0; i < payments.length; i++) {
    total += payments[i].total();
  }

  return total;
}

var payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500
}));

payments.push(createPayment({
  phone: 2000
}));

payments.push(createPayment({
  phone: 1000, internet: 4500
}));

payments.push(createPayment({
  amount: 10000
}));

console.log(paymentTotal(payments));      // 24000

var invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

var payment1 = createPayment({
  amount: 2000,
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

var payment3 = createPayment({
  phone: 1000
});
console.log(invoice.amountDue());       // this should return 0

invoice.addPayment(payment1)
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
