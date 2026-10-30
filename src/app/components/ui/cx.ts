// Concatène des classes en ignorant les valeurs falsy.
export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
