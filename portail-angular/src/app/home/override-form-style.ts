import fields from '../../../../server/fields.json';
import { addWrappers } from '../../utils/addWrappers';

export const overrideFormStyle = () => {
    return ({
        config: addWrappers(fields, [
            { field: 'callForm', wrappers: ['panel-wrapper'] },
            { field: 'firstName', wrappers: ['full-line-wrapper'] },
            { field: 'lastName', wrappers: ['full-line-wrapper'] },
            { field: 'isInOtherState', wrappers: ['green-box-wrapper'] },
        ])
    })
};