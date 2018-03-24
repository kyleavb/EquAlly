import React from 'react';

export default function({name, numberOfUsers}) {

	return (
		<div className="chat-header">
			<div className="user-info">
				
				<div className="status">
					<div className="indicator"></div>
					<span>{numberOfUsers ? numberOfUsers : null}</span>
				</div>
			</div>
			
		</div>
	);

}
