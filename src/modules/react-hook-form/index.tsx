import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ReactHookModule() {
  const params = useParams();

  let count = 0;
  count++;

  const { register, control, handleSubmit, setValue } = useForm<FormInputs>({
    defaultValues: {
      data: [...Array(450)].map(() => ({ name: "", count: 0 })),
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "data",
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  useEffect(() => {
    if (params?.id) {
      setValue(
        "data",
        [...Array(450)].map((_, i) => ({ name: `Abdul ${i}`, count: i + 1 })),
      );
    }
  }, [params]);

  return (
    <div className="parent">
      <span className="render-count">Render Count: {count}</span>
      <form onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <div key={field.id}>
            <input {...register(`data.${index}.name`)} placeholder="Name" />
            <input {...register(`data.${index}.count`)} placeholder="Count" />
          </div>
        ))}
      </form>
    </div>
  );
}
