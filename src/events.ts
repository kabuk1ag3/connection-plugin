import { Connection, Input, Output } from 'rete';

declare module 'rete/types/events' {
    interface EventsTypes {
        connectionpath: {
            points: number[],
            connection: Connection,
            d: string
        },
        connectiondrop: Input | Output
        _connectiondrop: any
        connectionpick: Input | Output
        resetconnection: void
    }
}