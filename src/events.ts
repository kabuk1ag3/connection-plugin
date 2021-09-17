import { Connection, Input, Output } from 'rete';

declare module 'rete/types/events' {
    interface EventsTypes {
        connectionpath: {
            points: number[],
            connection: Connection,
            d: string
        },
        connectiondrop: Input | Output
        connectiondropelement: any // 自作イベント
        connectionpick: Input | Output
        resetconnection: void
    }
}