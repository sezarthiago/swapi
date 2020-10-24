function dashString(string: string) {
  return string.replace(/ /g, '-');
}

function undashString(string: string) {
  return string.replace(/-/g, ' ');
}

export { dashString, undashString };
