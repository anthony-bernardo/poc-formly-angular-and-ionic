import fields from '../../../../server/config/fields.json';
import { addWrappers } from '../../utils/addWrappers';
import { wrappersForFields } from '../app.config';

export const overrideFormStyle = () => {
    return ({
        config: addWrappers(fields, wrappersForFields)
    })
};