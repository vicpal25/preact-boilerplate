import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>

				<div class={style.logo}>
					REACT ADAPT
				</div>

				<nav>
					<Link href="/">Home</Link>
					<Link href="/services">Services</Link>
				</nav>
			</header>
		);
	}
}
