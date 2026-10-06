import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import type { Coordinates, ResourcesRecord } from "@slk333/lib-ogame";

export function Calculator({ children, calculate }: {
  children: ReactNode;
  calculate: (data: FormData) => unknown;
}) {
  const [result, setResult] = useState<string>();
  const [error, setError] = useState<string>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(undefined);
    setResult(undefined);
    try {
      const data = new FormData(event.currentTarget);
      const value = calculate(data);
      const output = JSON.stringify(value, function (_key, item) {
        return typeof item === "number" && !Number.isFinite(item) ? String(item) : item;
      }, 2);
      setResult(output);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <button type="submit">Calculate</button>
      {error && <p role="alert" className="errorText">{error}</p>}
      {result !== undefined && <pre aria-live="polite"><code>{result}</code></pre>}
    </form>
  );
}

export function NumberField({ name, label, value = 0, min = 0, max, step = 1 }: {
  name: string; label: string; value?: number; min?: number; max?: number; step?: number;
}) {
  return <label>{label}<input name={name} type="number" defaultValue={value} min={min} max={max} step={step} required /></label>;
}

export function SelectField({ name, label, options, displayName, value, onChange }: {
  name: string; label: string; options: readonly string[];
  displayName?: (name: string) => string; value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <label>{label}<select name={name} defaultValue={value} onChange={(event) => onChange?.(event.target.value)}>
      {options.map((option) => <option key={option} value={option}>{displayName ? displayName(option) : option}</option>)}
    </select></label>
  );
}

export function number(data: FormData, name: string): number {
  const value = data.get(name);
  if (typeof value !== "string" || value.trim() === "" || !Number.isFinite(Number(value))) {
    throw new Error(`Enter a valid number for ${name}.`);
  }
  return Number(value);
}

export function ResourceFields({ prefix, label }: { prefix: string; label: string }) {
  return (
    <fieldset><legend>{label}</legend>
      <NumberField name={`${prefix}metal`} label="Metal" value={10000} />
      <NumberField name={`${prefix}crystal`} label="Crystal" value={5000} />
      <NumberField name={`${prefix}deuterium`} label="Deuterium" value={1000} />
    </fieldset>
  );
}

export function readResources(data: FormData, prefix: string): ResourcesRecord {
  return {
    metal: number(data, `${prefix}metal`),
    crystal: number(data, `${prefix}crystal`),
    deuterium: number(data, `${prefix}deuterium`),
  };
}

export function CoordinateFields({ prefix, label }: { prefix: string; label: string }) {
  return (
    <fieldset><legend>{label}</legend>
      <NumberField name={`${prefix}galaxy`} label="Galaxy" value={1} min={1} />
      <NumberField name={`${prefix}solarSystem`} label="System" value={100} min={1} max={499} />
      <NumberField name={`${prefix}planetPosition`} label="Position" value={8} min={1} max={16} />
    </fieldset>
  );
}

export function readCoordinates(data: FormData, prefix: string): Coordinates {
  return {
    galaxy: number(data, `${prefix}galaxy`),
    solarSystem: number(data, `${prefix}solarSystem`),
    planetPosition: number(data, `${prefix}planetPosition`),
  };
}
