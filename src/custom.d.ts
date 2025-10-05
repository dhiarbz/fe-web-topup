declare module '*.css';

// Untuk impor CSS Modules
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}