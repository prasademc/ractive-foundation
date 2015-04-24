Ractive.extend({

	template: RactiveF.templates['ux-page-swipe'],

	data: {
		currentPage: 1
	},

	computed: {
		isOnPage: function () {
			return 'is-onPage' + this.get('currentPage');
		}
	},

	oninit: function () {

		this.on('nextPage', function (e) {
			var nextPage = this.get('currentPage') + 1;
			// FIXME Quick hack for bounds.
			nextPage = nextPage > 5 ? 5 : nextPage;
			this.set('currentPage', nextPage);
			return false;
		});

		this.on('prevPage', function (e) {
			var prevPage = this.get('currentPage') -1 ;
			// FIXME Quick hack for bounds.
			prevPage = prevPage < 1 ? 1 : prevPage;
			this.set('currentPage', prevPage);
			return false;
		});

	}

});