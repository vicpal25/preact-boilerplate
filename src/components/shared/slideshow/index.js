import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class SlideShow extends Component {
	render() {
		return (
			<div class={style.slideshow}>

				<div class={style.flyout}>

					<h1>Software Consulting Services</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices lectus vel metus efficitur tincidunt. Etiam eu ante nunc. Curabitur sed arcu vitae dui fermentum porttitor. Phasellus vel imperdiet ex, vitae fringilla lectus. Proin gravida malesuada bibendum. Duis non ultrices ante. </p>
				</div>

			</div>
		);
	}
}
