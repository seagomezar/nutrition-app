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
    ReferenceInput,
} from 'react-admin';
import Box from '@mui/material/Box';

const Separator = () => <Box pt="1em" />;

export const PrescribedFoodList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="plan_id"reference ="plan" />
            <TextField source="food_id"reference ="food" />
            <TextField source="eating_moment_time" />
            <TextField source="eating_moment_name" />
            <TextField source="prescribed_quantity" />
            <DateField source="updated_at" />
            <DateField source="created_at" />
        </Datagrid>
    </List>
);

export const PrescribedFoodEdit = () => (
    <Edit>
        <SimpleForm sx={{ maxWidth: 600 }}>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextField source="plan_id"reference ="plan" fullWidth />
                </Box>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextField source="food_id"reference ="food"fullWidth />
                </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField source="eating_moment_time" fullWidth />
                </Box>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField source="eating_moment_name" fullWidth />
                </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField source="prescribed_quantity" fullWidth />
                </Box>
            </Box>
        </SimpleForm>
    </Edit>
);
export const PrescribedFoodCreate = () => (
    <Create>
        <SimpleForm sx={{ maxWidth: 600 }}>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField source="plan_id"reference ="plan" fullWidth />
                </Box>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField source="food_id"reference ="food"fullWidth />
                </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField source="eating_moment_time" fullWidth />
                </Box>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField source="eating_moment_name" fullWidth />
                </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField source="prescribed_quantity" fullWidth />
                </Box>
            </Box>
        </SimpleForm>
    </Create>
);