declare module '*.svg' {
  const value:
    | React.StatelessComponent<React.SVGAttributes<SVGElement>>
    | string
    | DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>>
    | undefined;
  export default value;
}

declare module '*.jpeg' {
  const value: any;
  export default value;
}
