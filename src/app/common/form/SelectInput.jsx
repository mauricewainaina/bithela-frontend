import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Select.module.css'

const SelectInput = ({ name, value, error, info, onChange, options }) => {
    const selectOptions = options.map(option => (
        <option key={option.label} value={option.value}>
             {option.label}
        </option>
    ))
    return (
        <div className="form-group">
            <select
                className={`${'form-control form-control-md'} ${styles.Select_Input}`}
                name={name}
                value={value}
                onChange={onChange}
            >
                {selectOptions}
            </select>
            {info && <small className="form-text text-muted">{info}</small>}
            {error && (<div className="invalid-feedback">{error}</div>)}

        </div>
    )
}

// SelectInput.propTypes = {
//     name: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     info: PropTypes.string,
//     error: PropTypes.string,
//     onChange: PropTypes.func.isRequired,
//     options: PropTypes.array.isRequired
// }

export default SelectInput