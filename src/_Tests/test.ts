import { getStructureCompoundedCost } from "../Cost/getStructureCompoundedCost.js"

console.log("Crystal Mine compounded cost up to level 9:")
console.log(getStructureCompoundedCost("crystalMine", 9))

console.log("Metal Mine compounded cost up to level 25:")
console.log(getStructureCompoundedCost("metalMine", 25))
