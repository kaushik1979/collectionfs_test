Router.map(function(){
	this.route('images_x', {
		template: 'images',
		path: '/images',
		waitOn: function(){
			Meteor.subscribe('PUB_IMAGES');
		},
		onAfterAction: function(){
			//TODO
		}
	});

	this.route('images_y', {
		template: 'images',
		path: '/',
		waitOn: function(){
			Meteor.subscribe('PUB_IMAGES');
		},
		onAfterAction: function(){
			//TODO
		}
	});
});