  // counter starts at 0
  Session.setDefault("counter", 0);
 
  Template.images.helpers({
    randImg: function() {
      Meteor.subscribe('PUB_IMAGES');
      return ImagesPub.findOne();
    },
    imgs: function() {

      Meteor.subscribe('PUB_IMAGES');
      return ImagesPub.find();

      // return Images.find();
    }
  });
 
  Template.uploadForm.events({
    'change .myFileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
          var newFile = new FS.File(file);
          Images.insert(newFile, function (err, fileObj) {
            //If !err, we have inserted new doc with ID fileObj._id, and
            //kicked off the data upload using HTTP
          });
        });
      }
  })
