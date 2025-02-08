import Select from 'react-select';

// import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';

const SelectRates = ({ baseCurrency }) => {
  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        className={styles.select}
        classNamePrefix="react-select"
        isSearchable
      />
    </div>
  );
};

export default SelectRates;
