// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
Accounts.ApplicationAdapter = DS.ActiveModelAdapter.extend({

});
