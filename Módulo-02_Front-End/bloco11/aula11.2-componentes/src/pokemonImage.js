import React from 'react';

class Image extends React.Component {
	render() {
		return (
			<div className='img-container'>
				<img src={this.props.src} alt='Imagem do Pokemon' />
			</div>
		);
	}
}

export default Image;
