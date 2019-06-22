import {forbidExtraProps} from 'airbnb-prop-types';
import PropTypes          from 'prop-types';

/**
 * Auto-generated by com.klass.generator.react.prop.type.PropTypeSourceCodeProjectionVisitor
 * at 2019-04-14T13:04:32.858Z
 */
const UserReadProjection = PropTypes.shape(forbidExtraProps({
	userId             : PropTypes.string.isRequired,
	displayName        : PropTypes.string.isRequired,
	providerDisplayName: PropTypes.string,
	email              : PropTypes.string,
	emailVerified      : PropTypes.bool.isRequired,
	photoURL           : PropTypes.string,
	providerId         : PropTypes.string,
}));

export default UserReadProjection;