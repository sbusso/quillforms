/**
 * Internal Dependencies
 */
import Info from './info';
import Methods from './methods';

interface Props {
	data: any;
}

const PaymentModal: React.FC< Props > = ( { data } ) => {
	return (
		<div className="renderer-core-payment-modal">
			<Info data={ data } />
			<hr />
			{ Object.keys( data.payments.methods ).length > 0 ? (
				<Methods data={ data } />
			) : (
				<div>
					No available payment methods. Please contact the
					administrator.
				</div>
			) }
		</div>
	);
};

export default PaymentModal;
