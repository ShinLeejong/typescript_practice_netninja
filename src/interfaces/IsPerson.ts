export interface IsPerson { // Don't have to use constructor
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}