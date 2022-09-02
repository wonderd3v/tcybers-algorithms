import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Lists } from '../../components';
import { Alert, Button, Stack } from '@mui/material';
import { FieldsType, useFields } from '../../hooks';
import { principalBoxStyle, formControlStyle, stackStyle, boxBodyStyle } from '../../styles';

type Props = {
  defaultFieldValues: FieldsType;
  services: Function;
  initialValueProp?: number | string | number[];
  title?: string;
  withSearch?: boolean;
  children?: JSX.Element;
  withChildren?: boolean;
  withButtonReset?: boolean;
  withTitle?: boolean;
};

export const ListItems = <T extends Props>({
  defaultFieldValues,
  services,
  initialValueProp,
  title,
  withSearch,
  children,
  withChildren,
  withButtonReset,
  withTitle,
}: T) => {
  const initialStateValue: number[] = services(initialValueProp);
  const [number, setNumber] = useState<number[]>(initialStateValue);
  const { values, errors, reset, handleChange, handleBlur } = useFields(defaultFieldValues);

  const handleSubmit = useMemo(
    () => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      setNumber(services(Number(values.quantity || initialValueProp)));
    },
    [values],
  );

  return (
    <>
      {withSearch ? (
        <Box sx={principalBoxStyle}>
          <FormControl sx={formControlStyle}>
            <InputLabel htmlFor="outlined-adornment-quantity">Quantity</InputLabel>
            <OutlinedInput
              id="outlined-adornment-quantity"
              value={values.quantity || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              label="quantity"
              name="quantity"
            />
            <Stack spacing={2} direction="row" sx={stackStyle}>
              <Button
                variant="outlined"
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)}
              >
                Submit
              </Button>
              <Button variant="outlined" onClick={reset} color="success">
                Reset
              </Button>
            </Stack>
          </FormControl>
        </Box>
      ) : (
        !withButtonReset && (
          <Stack spacing={2} direction="row" sx={stackStyle}>
            <Button variant="outlined" onClick={handleSubmit} color="success">
              Reset
            </Button>
          </Stack>
        )
      )}
      <Box sx={boxBodyStyle}>
        {errors?.quantity ? (
          <Alert
            sx={{
              width: '50%',
            }}
            severity="error"
          >
            {errors?.quantity}
          </Alert>
        ) : (
          <Lists
            withChildren={withChildren}
            items={number}
            withTitle={withTitle}
            title={`${title}: ${number.length}`}
            children={children}
          />
        )}
      </Box>
    </>
  );
};
