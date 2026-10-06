import { getMetalMineProduction, getCrystalMineProduction, getDeuteriumSynthesizerProduction } from "@slk333/lib-ogame";
import { Calculator, NumberField, number } from "../components";

function calculate(data: FormData) {
  const modifiers = {
    economySpeed: number(data, "economy"),
    plasmaTechnology: number(data, "plasma"),
    planetMaxTemp: number(data, "temperature"),
  };
  const perSecond = {
    metal: getMetalMineProduction(number(data, "metal"), modifiers),
    crystal: getCrystalMineProduction(number(data, "crystal"), modifiers),
    deuterium: getDeuteriumSynthesizerProduction(number(data, "deuterium"), modifiers),
  };
  return {
    perSecond,
    perHour: {
      metal: Math.round(perSecond.metal * 3600),
      crystal: Math.round(perSecond.crystal * 3600),
      deuterium: Math.round(perSecond.deuterium * 3600),
    },
    perDay: {
      metal: Math.round(perSecond.metal * 86400),
      crystal: Math.round(perSecond.crystal * 86400),
      deuterium: Math.round(perSecond.deuterium * 86400),
    },
  };
}

export function Production() {
  return <>
    <p>Mine output excludes base income.</p>
    <Calculator calculate={calculate}>
      <NumberField name="metal" label="Metal Mine" value={1} />
      <NumberField name="crystal" label="Crystal Mine" value={1} />
      <NumberField name="deuterium" label="Deuterium Synthesizer" value={1} />
      <details>
        <summary>Production modifiers</summary>
        <div>
          <NumberField name="economy" label="Economy speed (×)" value={1} min={1} />
          <NumberField name="plasma" label="Plasma Technology" />
          <NumberField name="temperature" label="Maximum temperature (°C)" min={-200} max={200} />
        </div>
      </details>
    </Calculator>
  </>;
}
