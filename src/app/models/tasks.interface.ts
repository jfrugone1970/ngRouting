export enum LEVELS  {
  "INFO",
  "URGENT",
  "BLOCKING"
}

export interface Itask {
   title: string;
   description: string;
   completed: boolean;
   level: LEVELS


}
