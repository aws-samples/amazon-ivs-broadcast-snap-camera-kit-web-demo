import FilterButton from './FilterButton';

export default function SnapFiltersController({
  data: {
    lenses,
    cameraKitSession,
    selectedFilter,
    setSelectedFilter,
    setFilterEnabled,
    filterEnabled,
  },
  handleFilters,
}) {
  const handleFilterButtonClick = ({ id }) => {
    if (!filterEnabled) {
      setFilterEnabled(true);
      handleFilters();
    }

    const filter = lenses.filter((lens) => lens.id === id)[0];
    console.log(id);
    setSelectedFilter(filter);
    cameraKitSession.applyLens(filter);
  };

  return (
    <>
      {lenses.map(({ id, name, iconUrl }) => (
        <FilterButton
          icon={iconUrl}
          name={name}
          id={id}
          onClick={handleFilterButtonClick}
          tooltipContent={`${name}`}
          selected={id === selectedFilter.id}
        ></FilterButton>
      ))}
    </>
  );
}
