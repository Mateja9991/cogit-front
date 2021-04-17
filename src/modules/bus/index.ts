export type EventName = 'test'

export default {
  listeners: {} as Record<EventName, Function[]>,
  addEventListener<T = any>(
    event: EventName,
    callback: (data: { event: EventName; payload: T }) => void,
  ) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  },
  removeEventListener<T = any>(
    event: EventName,
    callback: (data: { event: EventName; payload: T }) => void,
  ) {
    this.listeners[event] = this.listeners[event].filter(
      (cb) => cb !== callback,
    );
  },
  broadcastEvent<T = any>(event: EventName, payload?: T) {
    if (this.listeners[event])
      this.listeners[event].forEach((cb) => cb({ payload, event }));
  },
  addMultiEventListener<T = any>(
    events: EventName[],
    callback: (data: { event: EventName; payload: T }) => void,
  ) {
    events.forEach((event) => {
      if (!this.listeners[event]) this.listeners[event] = [];
      this.listeners[event].push(callback);
    });
  },
  removeMultiEventListener<T = any>(
    events: EventName[],
    callback: (data: { event: EventName; payload: T }) => void,
  ) {
    events.forEach((event) => {
      this.listeners[event] = this.listeners[event].filter(
        (cb) => cb !== callback,
      );
    });
  },
};
