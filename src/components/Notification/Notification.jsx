import PropTypes from 'prop-types';
import { NotifiText } from './Notificafion.styled';

const Notification = ({ messege }) => {
  return <NotifiText>{messege}</NotifiText>;
};

Notification.propTypes = {
  messege: PropTypes.string.isRequired,
};

export default Notification;
