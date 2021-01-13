import React from "react";
import Input from "./Input";

class Form extends React.Component {
	render() {
		return (
			<div className='row blue lighten-5'>
				<form className='col s12'>
					<div className='row'>
						<Input id='prenom' content='Prenom' />
						<Input id='nom' content='Nom' />
					</div>
					<div className='row'>
						<Input id='email' content='Mail' />
						<Input id='compagnie' content='Société' />
					</div>
					<div className='row'>
						<Input id='note' content='Notes' />
						<div className='input-field col s4'>
							<button
								className='btn waves-effect waves-light deep-purple lighten-2'
								type='submit'
							>
								Ajouter
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Form;
