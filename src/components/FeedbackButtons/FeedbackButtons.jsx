import PropTypes from 'prop-types';
import { ButtonBox, BtnElement } from './FeedbackButtons.styled';

const FeedbackBtn = ({ options, onGetFeedback }) => {
  return (
    <ButtonBox>
      {options.map(option => (
        <BtnElement
          key={option}
          type="button"
          onClick={() => onGetFeedback(`${option}`)}
        >
          <svg width="20" height="20">
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/icons.svg#icon-${option}`}
            />
          </svg>
          {option}
        </BtnElement>
      ))}
    </ButtonBox>
  );
};

FeedbackBtn.ProtoTypes = {
  options: PropTypes.array.isRequired,
  onGetFeedback: PropTypes.func.isRequired,
};

export default FeedbackBtn;
