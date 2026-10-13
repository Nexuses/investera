"use client";

import { Button, FieldDescription, FieldLabel, TextInput, useField, useForm, useFormFields } from "@payloadcms/ui";
import type { TextFieldClientProps } from "payload";
import { useEffect, type MouseEvent } from "react";
import { slugify } from "@/lib/slugify";

type SlugFieldProps = TextFieldClientProps & {
  sourceField: string;
  lockField: string;
};

/** Slug input that follows the source field while locked, and can be unlocked for manual editing. */
export function SlugField({ field, path, readOnly, sourceField, lockField }: SlugFieldProps) {
  const fieldPath = path || field.name;
  const { value, setValue } = useField<string>({ path: fieldPath });
  const { dispatchFields } = useForm();
  const locked = useFormFields(([fields]) => Boolean(fields[lockField]?.value));
  const source = useFormFields(([fields]) => fields[sourceField]?.value as string | undefined);

  useEffect(() => {
    if (!locked) return;
    const next = slugify(source ?? "");
    if (next !== (value ?? "")) setValue(next);
  }, [locked, source, value, setValue]);

  const toggleLock = (event: MouseEvent) => {
    event.preventDefault();
    if (!locked) setValue(slugify(source ?? ""));
    dispatchFields({ type: "UPDATE", path: lockField, value: !locked });
  };

  return (
    <div className="field-type text" style={{ marginBottom: "var(--spacing-field, 1.5rem)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <FieldLabel htmlFor={`field-${fieldPath}`} label={field.label ?? "Slug"} required={field.required} />
        <Button buttonStyle="none" size="small" onClick={toggleLock} disabled={readOnly}>
          {locked ? "Edit" : "Auto-generate"}
        </Button>
      </div>
      <TextInput
        path={fieldPath}
        value={value ?? ""}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/-{2,}/g, "-"))
        }
        readOnly={Boolean(readOnly || locked)}
      />
      <FieldDescription
        path={fieldPath}
        description={
          locked
            ? "Generated from the title. Click Edit to set it manually."
            : "URL: /blog/<slug>. Click Auto-generate to follow the title again."
        }
      />
    </div>
  );
}
