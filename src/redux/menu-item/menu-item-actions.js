import MenuItemActionTypes from './menu-item-actions-types';

export const updateTriggerPopUpHome = (triggerPopUpHome) => ({
    type: MenuItemActionTypes.TOGGLE_POPUP_CAROUSEL_HOME,
    /*don't need a payload here, just switching boolean, payload is optional*/
    payload: triggerPopUpHome
});
