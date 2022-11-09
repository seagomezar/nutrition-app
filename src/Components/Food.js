import React from 'react';
import {
  Datagrid,
  DateField,
  List,
  NumberField,
  TextField,
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  Create,
} from 'react-admin';

export const FoodList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="calories" />
      <NumberField source="chos" />
      <DateField source="created_at" />
      <TextField source="description" />
      <NumberField source="fat" />
      <TextField source="measure_unit" />
      <NumberField source="protein" />
      <NumberField source="quantity" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);

export const FoodEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="calories" />
      <NumberInput source="chos" />
      <DateInput source="created_at" />
      <TextInput source="description" />
      <NumberInput source="fat" />
      <TextInput source="measure_unit" />
      <NumberInput source="protein" />
      <NumberInput source="quantity" />
    </SimpleForm>
  </Edit>
);
export const FoodCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="calories" />
      <NumberInput source="chos" />
      <DateInput source="created_at" />
      <TextInput source="description" />
      <NumberInput source="fat" />
      <TextInput source="measure_unit" />
      <NumberInput source="protein" />
      <NumberInput source="quantity" />
    </SimpleForm>
  </Create>
);