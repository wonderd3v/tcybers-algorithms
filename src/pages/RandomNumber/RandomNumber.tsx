import { randomNumber } from '../../services';
import { inputNumberValidation } from '../../Helpers';
import { ListItems } from '../../components/RenderListItems/RenderListItems';

const defaultFieldValues = {
  quantity: {
    value: '',
    validations: [inputNumberValidation],
  },
};

export const RandomNumber = () => (
  <ListItems
    defaultFieldValues={defaultFieldValues}
    initialValueProp={5}
    services={randomNumber}
    title={'Random Numbers'}
    withSearch={true}
  />
);
