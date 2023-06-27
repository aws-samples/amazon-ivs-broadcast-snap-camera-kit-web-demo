import styles from './Filters.module.css';
import classNames from 'classnames/bind';
import FiltersController from './FiltersController';

export default function FiltersPane({
  filterPaneOpen,
  handleFilters,
  lenses,
  cameraKitSession,
  selectedFilter,
  setSelectedFilter,
  setFilterEnabled,
  filterEnabled,
}) {
  const cx = classNames.bind(styles);
  const className = cx({
    container: true,
    'container--open': filterPaneOpen,
  });

  const noFiltersData = {
    type: 'NONE',
    data: {
      filterEnabled,
      setFilterEnabled,
      selectedFilter,
      setSelectedFilter,
      id: 'ivs:disabled',
      value: 'disabled',
    },
  };

  const snapFiltersData = {
    type: 'SNAP',
    data: {
      lenses,
      cameraKitSession,
      selectedFilter,
      setSelectedFilter,
      setFilterEnabled,
      filterEnabled,
    },
  };

  const allFiltersData = [noFiltersData, snapFiltersData];

  return (
    <div className={className}>
      <FiltersController
        filterData={allFiltersData}
        handleFilters={handleFilters}
      ></FiltersController>
    </div>
  );
}
