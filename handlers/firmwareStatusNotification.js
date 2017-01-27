const Promise = require('promise');
const ORM = require('../orm');
var Storage = new ORM(process.env.storage);

module.exports = {
  handle: function(data){
    return new Promise(function(resolve, reject) {
      data.unread = true;

      Storage.save('notifications', data).then(function(){
        resolve({});
      });
    });
  },

  cbHandle: function(data, callback){
    // TODO: Dummy Content
    callback({
      status: 'Accepted'
    })
  }
}
