/* =========================
	EVALUATIONS
	========================== */

Router.route('/evals-index', {
	template: 'evalsIndex',
	name: 'evals.index',
	data: function(){
		return {
			view: {
				title: i18n.t('Evaluation for Rodulfo "El Chamo" Prieto on: Proyecto Grid System')
			}
		}
	}
});

Router.route('/eval-new', {
	template: 'evalNew',
	name: 'eval.new',
	data: function(){
		return {
			view: {
				title: i18n.t('Create new evaluation rubric')
			}
		}
	}
});