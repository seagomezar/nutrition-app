import React from 'react';
import {
  Datagrid,
  DateField,
  List,
  TextField,
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  Show,
  SimpleShowLayout,
} from 'react-admin';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';

const Separator = () => <Box pt="1em" />;

export const GoalList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="updated_at" />
      <DateField source="created_at" />
    </Datagrid>
  </List>
);

export const GoalEdit = () => (
  <Edit>
    <SimpleForm sx={{ maxWidth: 600 }}>
    <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
     <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
     <TextInput source="name"fullWidth />
      </Box>
      </Box>
    </SimpleForm>
  </Edit>
);
export const GoalCreate = () => (
  <Create>
    <SimpleForm sx={{ maxWidth: 600 }}>
    <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
     <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
     <TextInput source="name"fullWidth />
      </Box>
      </Box>
    </SimpleForm>
  </Create>
);

export const GoalShow = () => (
<Show>
  <SimpleShowLayout sx={{ maxWidth: 500 }}>
    <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
     <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
     <TextField source="name"fullWidth />
      </Box>
      </Box>
  </SimpleShowLayout>
</Show>
);