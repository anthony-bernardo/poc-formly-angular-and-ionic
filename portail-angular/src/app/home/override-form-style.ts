import fields from '../../../../server/config/fields.json';
import { addWrappers } from '../../utils/addWrappers';

export const overrideFormStyle = () => {
    return ({
        config: addWrappers(fields, [
            { field: 'zip', wrappers: ['full-line-wrapper'] },
            { field: 'street', wrappers: ['full-line-wrapper'] },
            { field: 'locality', wrappers: ['full-line-wrapper'] },
            { field: 'isInOtherState', wrappers: ['green-box-wrapper'] },
        ])
    })
};