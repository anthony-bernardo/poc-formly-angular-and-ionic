import fields from '../../../../server/fields.json';
import { addWrappers } from '../../utils/addWrappers';

export const overrideFormStyle = () => {
    return ({
        config: addWrappers(fields, [
            { field: 'callForm', wrappers: ['panel'] },
            { field: 'firstName', wrappers: ['input-wrapper'] },
            { field: 'lastName', wrappers: ['input-wrapper'] },
            { field: 'isInOtherState', wrappers: ['checkbox-wrapper'] },
        ])
    })
};