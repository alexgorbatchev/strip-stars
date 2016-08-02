function everyLineStartsWithAStar(str) {
  return str
    .split(/\n/g)
    .reduce(
      (results, line) =>
        results && (line.match(/^\s*\*/) !== null || line.match(/^\s*$/) !== null)
      , true
    );
}

export default function stripStars(str) {
  if (everyLineStartsWithAStar(str)) {
    str = str
      .replace(/^\s*\*\s*$/mg, '')
      .replace(/^\s*\*\s{1}/mg, '')
      ;
  }

  return str;
}
