var filename='server/publish/ImagePublisher.js';

Meteor.publish("PUB_IMAGES", function(){
  var self = this;
  var uuid = Meteor.uuid();
  var initializing = true;
  
  console.info('=======> PUB_IMAGES <======', filename);

  var handle = Images.find({}).observe({
    added: function(doc, idx){
      console.info('Publishing the image - ' + JSON.stringify(doc));
      //if(!initializing)
      self.added("pub-images", doc._id, doc);
    },
    removed: function(doc){
      self.removed("pub-images", doc._id);
    },
    changed: function(doc, idx){
      self.changed('pub-images', doc._id, doc);
    }
  });

  console.info('Done initializing the publisher: PUB_IMAGES, uuid: ' + uuid, filename);
  initializing = false;
  self.ready();
  //self.flush();

  self.onStop(function(){
    handle.stop();
  });

});