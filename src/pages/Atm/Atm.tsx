import { atm } from '../../services';
import { inputNumberValidation } from '../../Helpers';
import { ListItems } from '../../components/RenderListItems/RenderListItems';

const defaultFieldValues = {
  quantity: {
    value: '',
    validations: [inputNumberValidation],
  },
};

export const Atm = () => (
  <ListItems
    defaultFieldValues={defaultFieldValues}
    initialValueProp={2000}
    services={atm}
    title={'Atm'}
    withSearch={true}
  />
);
