Teaspoon.configure do |config|
  config.suite do |suite|
    suite.use_framework :qunit
    suite.matcher = "{spec/javascripts,app/assets}/**/*_spec.{js,js.coffee,coffee}"
    suite.helper = "spec_helper"
    suite.stylesheets = ["teaspoon", "teaspoon_custom"]
  end
end