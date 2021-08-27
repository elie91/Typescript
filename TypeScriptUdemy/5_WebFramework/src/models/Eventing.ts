
type Callback = () => void;

export class Eventing {

    public events: { [key: string]: Callback[] } = {};

    /**
     * Register an event
     * @param eventName 
     * @param callback 
     */
    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    /**
     * Trigger an event
     * Run all callbacks registered for this event
     * @param eventName 
     * @returns 
     */
    trigger(eventName: string): void {
        const handlers = this.events[eventName];
        if (!handlers || handlers.length === 0) {
            return;
        }
        handlers.forEach(callback => callback());
    }
}