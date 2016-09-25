;(function(){
	let ImageState = React.createClass({
		getInitialState: function(){
			return { 
				message: 'Hello World',
				disabled: false
			};
		},
		onClick: function(){
			console.log('click event call');
			let messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
			let randomMessage = messages[Math.floor((Math.random() * messages.length))];
			this.setState({
				message: randomMessage
			});
		},
		render: function(){
			return (
				<div>
					<ImageView message={this.state.message} />
					<p><input type="button" onClick={ this.onClick } disabled={this.state.disabled} value="Change Message"/></p>
				</div>
			);
		}
	});

	let ImageView = React.createClass({
		render: function(){
			return(
				<div>First React,  { this.props.message }</div>
			);
		}
	});

	ReactDOM.render(<ImageState />,  document.getElementById('reactApp'));

})();