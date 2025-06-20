// "Quand je vois un import sur un fichier .jpg, ça le considère itcomme une chaîne (string)."

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
