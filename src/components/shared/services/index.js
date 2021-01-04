import { h, Component } from 'preact';
import style from './style.less';

export default class Services extends Component {
	render() {
		return (
			<div class={style.services}>

				<div class={style.content}>

				<h1>Our Services</h1>
					<p>This hehklj lk ejlj eejkj kl eejlk.</p>

					<ul>
						<li>
							<span>&nbsp;</span>
							<h2>Software Development</h2>
							<p>This hehklj lk ejlj eejkj kl eejlk.</p>
						</li>
						<li>
							<span>&nbsp;</span>
							<h2>Cloud Solutions</h2>
							<p>This hehklj lk ejlj eejkj kl eejlk.</p>
						</li>
						<li>
							<span>&nbsp;</span>
							<h2>Support Consulting</h2>
							<p>This hehklj lk ejlj eejkj kl eejlk.</p>
						</li>
					</ul>


				</div>

			</div>
		);
	}
}
