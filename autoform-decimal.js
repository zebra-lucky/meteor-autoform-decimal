AutoForm.addInputType('Decimal', {
  template: 'afInputDecimal',
  valueIn: function(val) {
	if (Decimal.isDecimal(val)) {
	  return val.toFixed();
	} else {
	  return val;
	}
  },
  valueOut: function() {
	try {
	  return Decimal(this.val());
	} catch {
	  return null;
	}
  }
});
