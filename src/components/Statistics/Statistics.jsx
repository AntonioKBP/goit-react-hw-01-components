import PropTypes from 'prop-types';

import {
  Section,
  SectionTitle,
  SectionList,
  SectionItem,
  ItemLabel,
  ItemPercentage,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      <SectionList>
        {stats.map(({ id, label, percentage }) => (
          <SectionItem key={id} backgroundColor={getRandomHexColor()}>
            <ItemLabel>{label}</ItemLabel>
            <ItemPercentage>{percentage}%</ItemPercentage>
          </SectionItem>
        ))}
      </SectionList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

// [
//   { id: 'id-1', label: '.docx', percentage: 22 },
//   { id: 'id-2', label: '.pdf', percentage: 4 },
//   { id: 'id-3', label: '.mp3', percentage: 17 },
//   { id: 'id-4', label: '.psd', percentage: 47 },
//   { id: 'id-5', label: '.pdf', percentage: 10 },
// ];
