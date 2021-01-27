const mongoose = require('mongoose');

mongoose.connect('mongodb://database/lego', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useFindAndModify', false);

const Item = mongoose.model('Item', {
  imageUrl: String, name: String, reviewScore: Number, price: Number,
});

module.exports = Item;
