import { coincidence } from '../../services';
import { inputNumberValidation } from '../../Helpers';
import { ListItems } from '../../components/RenderListItems/RenderListItems';

const defaultFieldValues = {
  quantity: {
    value: '',
    validations: [inputNumberValidation],
  },
};

export const Coincidence = () => (
  <ListItems
    defaultFieldValues={defaultFieldValues}
    initialValueProp={5}
    services={coincidence}
    title={'Coincidences'}
    withSearch={false}
  />
);
