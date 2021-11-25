export function greeter(person?: string): string {
  return `Hello ${person || 'World'}`
}

console.log(greeter())
