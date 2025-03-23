interface NDEFRecord {
    recordType: string;
    mediaType?: string;
    id?: string;
    data?: ArrayBuffer;
  }
  
  interface NDEFMessage {
    records: NDEFRecord[];
  }
  
  interface NDEFReadingEvent extends Event {
    message: NDEFMessage;
  }
  
  interface NDEFReader {
    scan(): Promise<void>;
    onreading: ((event: NDEFReadingEvent) => void) | null;
    onreadingerror: ((event: Event) => void) | null;
  }
  
  declare const NDEFReader: {
    prototype: NDEFReader;
    new (): NDEFReader;
  };