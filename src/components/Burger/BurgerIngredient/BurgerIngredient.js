import React from 'react';
import { styles } from './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch(props.type){
        case('bread-bottom'):
            ingredient = <div className={styles.BreaadBottom}></div>;
            break;
        case('bread-top'):
            ingredient = (
                <div className="{className.BreadTop}">
                    <div className="{className.Seeds1}"></div>
                    <div className="{className.Seeds2}"></div>
                </div>
            );
            break;
        case('meat'):
                ingredient = <div className="{styles.Meat}"></div>
        break;
        case('cheese'):
            ingredient = <div className="{styles.cheese}"></div>
        break;
        case('bacon'):
            ingredient = <div className="{styles.bacon}"></div>
        break;
        case('salad'):
            ingredient = <div className="{styles.salad}"></div>
        break;
        default:
                ingredient = null;
    }

    return ingredient;
}

export default burgerIngredient;