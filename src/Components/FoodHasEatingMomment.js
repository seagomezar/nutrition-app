import React from 'react';
import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  Create,
} from 'react-admin';

export const FoodHasEatingMomentList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="created_at" />
      <ReferenceField
        source="eating_moment_id"
        reference="eating_moments"
      />
      <ReferenceField source="food_id" reference="food" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);

export const FoodHasEatingMomentEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput
        source="eating_moment_id"
        reference="eating_moments"
      />
      <ReferenceInput source="food_id" reference="food" />
    </SimpleForm>
  </Edit>
);
export const FoodHasEatingMomentCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput
        source="eating_moment_id"
        reference="eating_moments"
      />
      <ReferenceInput source="food_id" reference="food" />
    </SimpleForm>
  </Create>
);