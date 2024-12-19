import _ from "lodash";

export function Parginate(list, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(list).slice(startIndex).take(pageSize).value();
}
