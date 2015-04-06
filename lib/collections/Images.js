/******  Published image collection  ******/
ImagesPub =  new Mongo.Collection('pub-images');

var createSquareThumb = function(fileObj, readStream, writeStream) {
  var size = '96';
  gm(readStream).autoOrient().resize(size, size + '^').gravity('Center').extent(size, size).stream('PNG').pipe(writeStream);
};

thumbStore_1 = new FS.Store.GridFS("thumbs_1", { transformWrite: createSquareThumb });

Images = new FS.Collection("images", {
    stores: [
      thumbStore_1,
      new FS.Store.GridFS("images"),
      new FS.Store.GridFS("thumbs", {
        transformWrite: function(fileObj, readStream, writeStream) {
          // Transform the image into a 10x10px thumbnail
          gm(readStream, fileObj.name()).resize('40', '40').stream().pipe(writeStream);
        }
      })
    ],
    filter: {
      allow: {
        contentTypes: ['image/*'] //allow only images in this FS.Collection
      }
    }
});

Images.allow({
 insert: function(userId, doc){
 	return true;//return doc && Meteor.userId && userId == doc.userId;
 },
 update: function(userId, doc){
 	return true;//return doc && Meteor.userId && userId == doc.userId;
 },
 remove: function(userId, doc){
 	return true;//return doc && Meteor.userId && userId == doc.userId;
 },
 download: function(userId, doc){
 	return true;//return doc && Meteor.userId && userId == doc.userId;
 }
});