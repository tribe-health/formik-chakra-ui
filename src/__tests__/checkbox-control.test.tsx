import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { CheckboxControl } from '../form-checkbox';

test('CheckboxControl Renders Correctly', () => {
  const { asFragment, getByRole } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: false }}>
      <Form>
        <ChakraProvider>
          <CheckboxControl name="test" value="test-value">
            Test Label
          </CheckboxControl>
        </ChakraProvider>
      </Form>
    </Formik>
  );

  getByRole('checkbox', { name: /test label/i });
  expect(asFragment()).toMatchSnapshot();
});
