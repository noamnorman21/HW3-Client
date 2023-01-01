import React from 'react';

export default function Ingredients(props) {
    const checkBoxChange = (e) => {
        if (e.target.checked) {
            props.checkBoxChange(props.name, true);
        } else {
            props.checkBoxChange(props.name, false);
        }
    }
    return (
        <div style={styles.ingredientCss} className='col-md-3'>
            {props.showCheckBox && <label style={styles.labelStyles}>Add to Recipe <input style={styles.checkboxStyles} onChange={checkBoxChange} type='checkbox' title='Add to Recipe' /></label>}
            <h2>{props.name}</h2>
            <img style={styles.imgCss} src={props.image} alt={props.name} />
            <p style={styles.pCss}>Calories: {props.calories}</p>
        </div>
    );
}

const styles = {
    ingredientCss: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #333',
        borderRadius: '13px',
        margin: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        backgroundColor: '#f5f5f5',
        color: '#333',
        padding: '1rem',
    },
    imgCss: {
        width: '100%',
        height: 200,
        borderRadius: '13px',
        margin: '0 auto',
    },
    pCss: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        margin: '1rem 0',
    },
    labelStyles: {
        display: 'flex',
        alignItems: 'center',
    },
    checkboxStyles: {
        marginLeft: '0.5rem',
    }
}