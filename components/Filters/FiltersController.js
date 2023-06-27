import SnapFiltersController from './SnapFiltersController';
import NoFiltersController from './NoFiltersController';
import styles from './Filters.module.css';

function EffectSection({ title, children }) {
  return (
    <section>
      <div className={styles.sectionTitle}>{title}</div>
      <div className={styles.sectionGrid}>{children}</div>
    </section>
  );
}

export default function FiltersController({
  filterData,
  handleFilters,
  children,
}) {
  const filtersComponents = filterData.map((filter) => {
    const expr = filter.type;
    switch (expr) {
      case 'SNAP':
        return (
          <EffectSection title={'Snap camera'} key={'Snap camera'}>
            <SnapFiltersController
              data={filter.data}
              handleFilters={handleFilters}
            />
          </EffectSection>
        );
      default:
        return (
          <EffectSection title={'No effect'} key={'No effect'}>
            <NoFiltersController
              data={filter.data}
              handleFilters={handleFilters}
            ></NoFiltersController>
          </EffectSection>
        );
    }
  });

  return (
    <>
      {filtersComponents}
      {children}
    </>
  );
}
