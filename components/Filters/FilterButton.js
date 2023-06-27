import Tooltip from '../Tooltip';
import Button from '../Button';
import Icon from '../Icon';
import classNames from 'classnames';

import styles from './Filters.module.css';

export default function FilterButton({
  id,
  icon,
  name,
  selected,
  tooltipContent,
  onClick,
  children,
}) {
  const cx = classNames.bind(styles);
  const className = cx({
    filterButton: true,
    'filterButton--selected': selected,
  });

  const handleClick = () => {
    onClick({ id });
  };
  return (
    <div className={className}>
      <Tooltip content={tooltipContent} hAlign='left'>
        <Button
          type={selected ? 'filter-selected' : 'filter'}
          style='radius'
          onClick={handleClick}
          alt={`Button for filter: ${name}`}
        >
          {icon ? (
            <img
              src={icon}
              alt={`Icon for filter: ${name}`}
              width='32'
              height='32'
            ></img>
          ) : (
            <></>
          )}
          {children}
        </Button>
      </Tooltip>
    </div>
  );
}
