import { h } from 'preact';
import style from './style.less';
import SlideShow from '../shared/slideshow';
import Services from '../shared/services';
import Contact from '../shared/contact'

export default () => {
	return (
		<div class={style.home}>
			<SlideShow/>
			<Services/>
			<Contact/>
		</div>
	);
};
