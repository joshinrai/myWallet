/* eslint-disable @typescript-eslint/no-explicit-any */
import Web3 from 'web3';

const decodeLogData: any = [
  [
    {
      type: "string",
      name: "myString",
    },
    {
      type: "uint256",
      name: "myNumber",
      indexed: true,
    },
    {
      type: "uint8",
      name: "mySmallNumber",
      indexed: true,
    },
  ],
  "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000748656c6c6f252100000000000000000000000000000000000000000000000000",
  [
    "0x000000000000000000000000000000000000000000000000000000000000f310",
    "0x0000000000000000000000000000000000000000000000000000000000000010",
  ],
];

const decodeParameterData: any = [
  "uint256",
  "0x0000000000000000000000000000000000000000000000000000000000000010",
];

const decodeParametersData: any = [
  ["string", "uint256"],
  "0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000ea000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000",
];

const decodeParametersObjData: any = [
  [
    {
      type: "string",
      name: "myString",
    },
    {
      type: "uint256",
      name: "myNumber",
    },
  ],
  "0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000ea000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000",
];

const decodeParametersWithData: any = [];

const encodeEventSignatureData: any = {
  name: "myEvent",
  type: "event",
  inputs: [
    {
      type: "uint256",
      name: "myNumber",
    },
    {
      type: "bytes32",
      name: "myBytes",
    },
  ],
};

const encodeEventSignatureIndexedData = {
  inputs: [
    {
      indexed: true,
      name: "from",
      type: "address",
    },
    {
      indexed: true,
      name: "to",
      type: "address",
    },
    {
      indexed: false,
      name: "value",
      type: "uint256",
    },
  ],
  name: "Transfer",
  type: "event",
};

const encodeFunctionCallData: any = [
  {
    name: "myMethod",
    type: "function",
    inputs: [
      {
        type: "uint256",
        name: "myNumber",
      },
      {
        type: "string",
        name: "myString",
      },
    ],
  },
  ["2345675643", "Hello!%"]
];

const encodeFunctionCallOutputData: any = [
  {
    name: "balanceOf",
    type: "function",
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  ["0x1234567890123456789012345678901234567890"]
];

const encodeFunctionSignatureData = {
  name: "myMethod",
  type: "function",
  inputs: [
    {
      type: "uint256",
      name: "myNumber",
    },
    {
      type: "string",
      name: "myString",
    },
  ],
};

const encodeParameterData = [
  {
    ParentStruct: {
      propertyOne: "uint256",
      propertyTwo: "uint256",
      childStruct: {
        propertyOne: "uint256",
        propertyTwo: "uint256",
      },
    },
  },
  {
    propertyOne: 42,
    propertyTwo: 56,
    childStruct: {
      propertyOne: 45,
      propertyTwo: 78,
    },
  }
];

const encodeParametersData = [
  ["uint256", "string"],
  ["2345675643", "Hello!%"],
];

const decryptData = [
  {
    version: 3,
    id: 'c0cb0a94-4702-4492-b6e6-eb2ac404344a',
    address: 'cda9a91875fc35c8ac1320e098e584495d66e47c',
    crypto: {
      ciphertext: 'cb3e13e3281ff3861a3f0257fad4c9a51b0eb046f9c7821825c46b210f040b8f',
      cipherparams: { iv: 'bfb43120ae00e9de110f8325143a2709' },
      cipher: 'aes-128-ctr',
      kdf: 'scrypt',
      kdfparams: {
        n: 8192,
        r: 8,
        p: 1,
        dklen: 32,
        salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd'
      },
      mac: 'efbf6d3409f37c0084a79d5fdf9a6f5d97d11447517ef1ea8374f51e581b7efd'
    }
  },
  '123',
];

const encryptData: any = [
  '0x67f476289210e3bef3c1c75e4de993ff0a00663df00def84e73aa7411eac18a6',
  '123',
  {
    n: 8192,
    iv: Web3.utils.hexToBytes('0xbfb43120ae00e9de110f8325143a2709'),
    salt: Web3.utils.hexToBytes('0x210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd'),
	}
];

const encryptKdfData: any = [
  '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
  '123',
  {
    iv: 'bfb43120ae00e9de110f8325143a2709',
    salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
    c: 262144,
    kdf: 'pbkdf2',
  }
];

const walletDecryptData = [
  {
    version: 3,
    id: '83191a81-aaca-451f-b63d-0c5f3b849289',
    address: '06f702337909c06c82b09b7a22f0a2f0855d1f68',
    crypto: {
      ciphertext: '7d34deae112841fba86e3e6cf08f5398dda323a8e4d29332621534e2c4069e8d',
      cipherparams: {
        iv: '497f4d26997a84d570778eae874b2333' },
        cipher: 'aes-128-ctr',
        kdf: 'scrypt',
        kdfparams: {
          dklen: 32,
          salt: '208dd732a27aa4803bb760228dff18515d5313fd085bbce60594a3919ae2d88d',
          n: 262144,
          r: 8,
          p: 1
        },
      mac: '0062a853de302513c57bfe3108ab493733034bf3cb313326f42cf26ea2619cf9' }
    },
    {
      version: 3,
      id: '7d6b91fa-3611-407b-b16b-396efb28f97e',
      address: 'b5d89661b59a9af0b34f58d19138baa2de48baaf',
      crypto: {
        ciphertext: 'cb9712d1982ff89f571fa5dbef447f14b7e5f142232bd2a913aac833730eeb43',
        cipherparams: { iv: '8cccb91cb84e435437f7282ec2ffd2db' },
        cipher: 'aes-128-ctr',
        kdf: 'scrypt',
        kdfparams: {
          dklen: 32,
          salt: '08ba6736363c5586434cd5b895e6fe41ea7db4785bd9b901dedce77a1514e8b8',
          n: 262144,
          r: 8,
          p: 1
        },
        mac: 'd2eb068b37e2df55f56fa97a2bf4f55e072bef0dd703bfd917717d9dc54510f0'
      }
    }
  ];

export default {
  decodeLogData,
  decodeParameterData,
  decodeParametersData,
  decodeParametersObjData,
  decodeParametersWithData,
  encodeEventSignatureData,
  encodeEventSignatureIndexedData,
  encodeFunctionCallData,
  encodeFunctionCallOutputData,
  encodeFunctionSignatureData,
  encodeParameterData,
  encodeParametersData,
  decryptData,
  encryptData,
  encryptKdfData,
  walletDecryptData,
};
