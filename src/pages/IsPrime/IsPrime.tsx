import { primeNumbers } from '../../services';
import { inputNumberValidation } from '../../Helpers';
import { ListItems } from '../../components/RenderListItems/RenderListItems';

const defaultFieldValues = {
  quantity: {
    value: '',
    validations: [inputNumberValidation],
  },
};

export const IsPrime = () => (
  <ListItems
    defaultFieldValues={defaultFieldValues}
    initialValueProp={9}
    services={primeNumbers}
    title={'Prime Numbers'}
    withSearch={true}
  />
);
