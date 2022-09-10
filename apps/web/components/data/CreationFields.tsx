import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Field } from "@web/graphql/schema/definition";
import { Model } from "@web/graphql/schema/types";
import { Payload } from "@web/utils/data/reduction";
import { Dispatch } from "react";

export interface CreationFieldsProps<T extends Model, CreationInput extends Partial<T>> {
  dataTuple: [CreationInput, Dispatch<Payload<CreationInput>>];
  fields: { [key in Extract<keyof CreationInput, string>]: Field };
}

export default function CreationFields<T extends Model, CreationInput extends Partial<T>>(
  props: CreationFieldsProps<T, CreationInput>
) {
  const { dataTuple, fields } = props;
  const [data, dispatchData] = dataTuple;

  return (
    <>
      {Object.entries(fields).map(([_fieldName, _field]) => {
        const fieldName = _fieldName as Extract<keyof CreationInput, string>;
        const field = _field as Field;
        return (
          <Box key={fieldName} mt={2}>
            {field.type === "String" ? (
              <TextField
                label={field.label ?? fieldName}
                fullWidth={field.widget?.fullWidth ?? true}
                multiline={field.widget?.multiline ?? false}
                placeholder={field.widget?.placeholder ?? field.label}
                value={data[fieldName] ?? ""}
                onChange={(event) =>
                  dispatchData({
                    field: fieldName,
                    value: event.target.value as unknown as CreationInput[keyof CreationInput],
                  })
                }
              />
            ) : (
              <div>{field.label ?? fieldName}</div>
            )}
          </Box>
        );
      })}
    </>
  );
}
