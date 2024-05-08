import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { NumericFormat } from "react-number-format";
import { SellPrice } from "./components/SellPrice";

export default function ReactHookControlledModule() {
  const params = useParams();

  const rendersNo = useRef<number>(0);
  rendersNo.current = rendersNo.current + 1;

  const methods = useForm<FormInputs>({
    defaultValues: {
      data: [...Array(450)].map(() => ({ name: "", count: 0 })),
    },
  });
  const { control, handleSubmit, setValue } = methods;

  const { fields } = useFieldArray({
    control,
    name: "data",
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  useEffect(() => {
    if (params?.id) {
      setValue(
        "data",
        [...Array(450)].map((_, i) => ({
          name: `Abdul ${i}`,
          count: i + 1001,
        })),
      );
    }
  }, [params]);

  return (
    <div className="parent">
      <span className="render-count">Render Count: {rendersNo.current}</span>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Count</th>
                  <th>Sell Price</th>
                </tr>
              </thead>
              <tbody>
                {fields.map((field, index) => (
                  <tr key={field.id}>
                    <td>
                      <Controller
                        control={control}
                        name={`data.${index}.name`}
                        render={({ field }) => <input {...field} />}
                      />
                    </td>
                    <td>
                      <Controller
                        control={control}
                        name={`data.${index}.count`}
                        render={({ field: { value, onChange } }) => (
                          <NumericFormat
                            id={`count-${field.id}`}
                            value={value}
                            onValueChange={(values) => onChange(values.value)}
                            allowLeadingZeros={false}
                            prefix=""
                            decimalSeparator="."
                            thousandSeparator=","
                          />
                        )}
                      />
                    </td>
                    <td>
                      <SellPrice id={field.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
