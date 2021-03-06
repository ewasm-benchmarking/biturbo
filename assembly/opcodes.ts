export enum Opcodes {
  Stop = 0x00,
  Add = 0x01,
  Mul = 0x02,
  Sub = 0x03,
  Div = 0x04,
  Lt = 0x10,
  Eq = 0x14,
  IsZero = 0x15,
  Not = 0x19,
  CallValue = 0x34,
  CallDataLoad = 0x35,
  CallDataSize = 0x36,
  CodeCopy = 0x39,
  Pop = 0x50,
  MLoad = 0x51,
  MStore = 0x52,
  MStore8 = 0x53,
  SStore = 0x55,
  Jump = 0x56,
  Jumpi = 0x57,
  JumpDest = 0x5b,
  Push1 = 0x60,
  Push2 = 0x61,
  Push3 = 0x62,
  Push4 = 0x63,
  Push29 = 0x7c,
  Dup1 = 0x80,
  Dup2 = 0x81,
  Dup3 = 0x82,
  Swap1 = 0x90,
  Swap2 = 0x91,
  Swap3 = 0x92,
  Return = 0xf3,
  Revert = 0xfd,
  Invalid = 0xfe,
}
