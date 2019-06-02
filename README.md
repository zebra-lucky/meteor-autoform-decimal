zebralucky:autoform-decimal
=========================

`meteor add zebralucky:autoform-decimal`

## Configuration
Adds the `Decimal` type to [autoform](https://github.com/aldeed/meteor-autoform).

### Simple Usage

```js
CollectionSchema = new SimpleSchema({
  dec_val: {
    type: Object,
    blackbox: true,
    autoform: {
      type: "Decimal"
    }
  }
});
```
