import * as React from "react";
import {
  Datagrid,
  Edit,
  EditProps,
  EditButton,
  FieldProps,
  NumberField,
  ReferenceManyField,
  SimpleForm,
  TextInput,
  useTranslate,
} from "react-admin";

import { Action } from "@/graphql/schema";

const ActionTitle = (props: FieldProps<Action>) => {
  const { record } = props;
  const translate = useTranslate();
  return record ? (
    <span>
      {translate("resources.actions.name", { smart_count: 1 })} &quot;
      {record.name}&quot;
    </span>
  ) : null;
};

const ActionEdit = (props: EditProps) => (
  <Edit title={<ActionTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceManyField
        reference="identities"
        target="category_id"
        label="resources.actions.fields.identities"
        perPage={20}
        fullWidth
      >
        <Datagrid>
          <NumberField source="price" options={{ style: "currency", currency: "USD" }} />
          <NumberField source="width" options={{ minimumFractionDigits: 2 }} />
          <NumberField source="height" options={{ minimumFractionDigits: 2 }} />
          <NumberField source="stock" />
          <NumberField source="sales" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);

export default ActionEdit;
