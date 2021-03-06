import React from "react";

const Single = (props) => {
	return (
		<li className='col  s12 l3 m4'>
			<div className='card'>
				<div className='card-image'>
					<img src={props.item.urlPhoto} alt={props.item.prenom} />
					<span className='card-title'>
						{props.item.prenom} {props.item.nom} -{" "}
						{props.item.compagnie}
					</span>
				</div>
				<div className='card-content'>
					<span className='card-title'>{props.item.email} </span>
					<div className='row'>
						<blockquote>
							<h5>{props.item.notes}</h5>
						</blockquote>
					</div>
				</div>
				<div className='card-action'>
					<button
						className='btn waves-effect waves-light deep-purple lighten-2'
						type='submit'
					>
						Supprimer
					</button>
				</div>
			</div>
		</li>
	);
};

export default Single;
