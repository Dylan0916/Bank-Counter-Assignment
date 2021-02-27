type ExecuteCallback = (number: number) => void;

export interface QueueContent {
  index: number;
  execute: ExecuteCallback;
}
