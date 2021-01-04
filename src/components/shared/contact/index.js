import { h, State, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Contact extends Component {

state = { value: '' };

  onSubmit = e => {
    alert("Submitted a todo");
    e.preventDefault();
  }

  onInput = e => {
    const { value } = e.target;
    this.setState({ value })
  }
	render(_, { value }) {
		return (
			<div class={style.contact}>


				<div class={style.content}>
					<h1>Contact Us</h1>

					<form onSubmit={this.onSubmit}>
						<input type="text" value={value} onInput={this.onInput} />
						<p>You typed this value: {value}</p>
						<button type="submit">Submit</button>
					</form>

				</div>

			</div>
		);
	}
}
