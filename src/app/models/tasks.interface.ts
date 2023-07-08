export enum LEVELS  {
  "INFO",
  "URGENT",
  "BLOCKING"
}

export interface Itask {
   id: number;
   title: string;
   description: string;
   completed: boolean;
   level: LEVELS


}
