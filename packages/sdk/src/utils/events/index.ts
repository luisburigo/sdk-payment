import {EventEmitter} from 'events';
import TypedEventEmitter from "./types";

export type Events = {
    teste2: () => void;
    teste1: (value: string) => void;
}

const emitter = new EventEmitter() as TypedEventEmitter<Events>;

export default emitter;