import PropTypes from 'prop-types';
import {
    StatWrap,
    StatTitle,
    StatList,
    StatItem,
    StatInfo,
} from 'components/Statistics/Statistics.styled'

export const Statistics = ({ title, stats }) => {

    return (
        <StatWrap>

            {title && <StatTitle>{title}</StatTitle>}
            <StatList>
                {stats.map(({ label, percentage, id }) => (
                    < StatItem key={id}>
                        <StatInfo>{label}</StatInfo>
                        <StatInfo>{percentage}%</StatInfo>
                    </StatItem>
                ))

                }
            </StatList >
        </StatWrap >

    );


};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};