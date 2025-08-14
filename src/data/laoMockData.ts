import { WordDefinition } from '../types/dictionary';

export const laoMockData: Record<string, WordDefinition> = {
  'ສະບາຍດີ': {
    word: 'ສະບາຍດີ',
    phonetic: '/sa.baːj diː/',
    phonetics: [
      {
        text: '/sa.baːj diː/',
        audio: ''
      }
    ],
    meanings: [
      {
        partOfSpeech: 'ຄຳທັກທາຍ (Greeting)',
        definitions: [
          {
            definition: 'ຄຳທັກທາຍທີ່ໃຊ້ເວລາພົບກັນ ແປວ່າ "ສະບາຍດີ" ຫຼື "ສະບາຍດີບໍ?"',
            example: 'ສະບາຍດີ, ເຈົ້າເປັນແນວໃດແດ່?'
          }
        ],
        synonyms: ['ສະບາຍດີບໍ', 'ຫາຍດີ']
      }
    ]
  },
  'ຂອບໃຈ': {
    word: 'ຂອບໃຈ',
    phonetic: '/kʰɔ̀ːp t͡ɕaj/',
    phonetics: [
      {
        text: '/kʰɔ̀ːp t͡ɕaj/',
        audio: ''
      }
    ],
    meanings: [
      {
        partOfSpeech: 'ຄຳຂອບໃຈ (Expression of gratitude)',
        definitions: [
          {
            definition: 'ການສະແດງຄວາມຂອບໃຈ, ການຂອບຄຸນ',
            example: 'ຂອບໃຈຫຼາຍໆ ສຳລັບຄວາມຊ່ວຍເຫຼືອ'
          }
        ],
        synonyms: ['ຂອບໃຈຫຼາຍ', 'ຂອບຄຸນ']
      }
    ]
  },
  'ຮັກ': {
    word: 'ຮັກ',
    phonetic: '/hak/',
    phonetics: [
      {
        text: '/hak/',
        audio: ''
      }
    ],
    meanings: [
      {
        partOfSpeech: 'ກິລິຍາ (Verb)',
        definitions: [
          {
            definition: 'ມີຄວາມຮູ້ສຶກທີ່ດີຕໍ່ບຸກຄົນ ຫຼື ສິ່ງໃດສິ່ງນຶ່ງ',
            example: 'ຂ້ອຍຮັກແມ່ຂອງຂ້ອຍຫຼາຍ'
          },
          {
            definition: 'ຄວາມຮູ້ສຶກທີ່ມີຕໍ່ຄູ່ຮັກ',
            example: 'ເຂົາຮັກນາງຫຼາຍ'
          }
        ],
        synonyms: ['ຮັກແພງ', 'ຮັກໃຄ່'],
        antonyms: ['ກຽດ', 'ຊັງ']
      },
      {
        partOfSpeech: 'ຄຳນາມ (Noun)',
        definitions: [
          {
            definition: 'ຄວາມຮູ້ສຶກຮັກ, ຄວາມຮັກ',
            example: 'ຄວາມຮັກຂອງແມ່ແມ່ນບໍ່ມີວັນສິ້ນສຸດ'
          }
        ]
      }
    ]
  },
  'ເຮືອນ': {
    word: 'ເຮືອນ',
    phonetic: '/hɯan/',
    phonetics: [
      {
        text: '/hɯan/',
        audio: ''
      }
    ],
    meanings: [
      {
        partOfSpeech: 'ຄຳນາມ (Noun)',
        definitions: [
          {
            definition: 'ສິ່ງປຸກສ້າງທີ່ໃຊ້ສຳລັບຢູ່ອາໄສ',
            example: 'ເຮືອນຂອງຂ້ອຍຢູ່ໃກ້ໂຮງຮຽນ'
          },
          {
            definition: 'ຄອບຄົວ, ຄົວເຮືອນ',
            example: 'ເຮືອນຂອງເຂົາມີສະມາຊິກຫຼາຍຄົນ'
          }
        ],
        synonyms: ['ບ້ານ', 'ທີ່ຢູ່ອາໄສ']
      }
    ]
  },
  'ອາຫານ': {
    word: 'ອາຫານ',
    phonetic: '/ʔaː.haːn/',
    phonetics: [
      {
        text: '/ʔaː.haːn/',
        audio: ''
      }
    ],
    meanings: [
      {
        partOfSpeech: 'ຄຳນາມ (Noun)',
        definitions: [
          {
            definition: 'ສິ່ງທີ່ກິນໄດ້, ເຄື່ອງກິນ',
            example: 'ອາຫານລາວແມ່ນອາຫານທີ່ອຸດົມໄປດ້ວຍລົດຊາດ'
          }
        ],
        synonyms: ['ເຄື່ອງກິນ', 'ອາຫານການກິນ']
      }
    ]
  },
  'ນ້ຳ': {
    word: 'ນ້ຳ',
    phonetic: '/nam/',
    phonetics: [
      {
        text: '/nam/',
        audio: ''
      }
    ],
    meanings: [
      {
        partOfSpeech: 'ຄຳນາມ (Noun)',
        definitions: [
          {
            definition: 'ຂອງແຫຼວທີ່ໃສ, ບໍ່ມີສີ, ບໍ່ມີກິ່ນ, ໃຊ້ດື່ມໄດ້',
            example: 'ນ້ຳແມ່ນສິ່ງຈຳເປັນສຳລັບຊີວິດ'
          },
          {
            definition: 'ນ້ຳໝາກໄມ້ ຫຼື ເຄື່ອງດື່ມອື່ນໆ',
            example: 'ນ້ຳໝາກນາວແມ່ນເຄື່ອງດື່ມທີ່ນິຍົມ'
          }
        ],
        synonyms: ['ນ້ຳດື່ມ']
      }
    ]
  },
  'ໂຮງຮຽນ': {
    word: 'ໂຮງຮຽນ',
    phonetic: '/hoːŋ hian/',
    phonetics: [
      {
        text: '/hoːŋ hian/',
        audio: ''
      }
    ],
    meanings: [
      {
        partOfSpeech: 'ຄຳນາມ (Noun)',
        definitions: [
          {
            definition: 'ສະຖານທີ່ສຳລັບການສຶກສາ, ການຮຽນ',
            example: 'ເດັກນ້ອຍໄປໂຮງຮຽນທຸກມື້'
          }
        ],
        synonyms: ['ສະຖານສຶກສາ', 'ວິທະຍາໄລ']
      }
    ]
  },
  'ໝູ': {
    word: 'ໝູ',
    phonetic: '/muː/',
    phonetics: [
      {
        text: '/muː/',
        audio: ''
      }
    ],
    meanings: [
      {
        partOfSpeech: 'ຄຳນາມ (Noun)',
        definitions: [
          {
            definition: 'ສັດລ້ຽງຊະນິດນຶ່ງທີ່ມີຮ່າງກາຍໃຫຍ່, ມີຫາງງໍ',
            example: 'ໝູແມ່ນສັດລ້ຽງທີ່ສຳຄັນໃນການກະສິກຳ'
          }
        ]
      }
    ]
  },
  'ແມວ': {
    word: 'ແມວ',
    phonetic: '/mɛːw/',
    phonetics: [
      {
        text: '/mɛːw/',
        audio: ''
      }
    ],
    meanings: [
      {
        partOfSpeech: 'ຄຳນາມ (Noun)',
        definitions: [
          {
            definition: 'ສັດລ້ຽງຂະໜາດນ້ອຍ, ມີຂົນນຸ້ມ, ມັກຈັບໜູ',
            example: 'ແມວຂອງຂ້ອຍຊື່ວ່າ ນ້ອງ'
          }
        ]
      }
    ]
  },
  'ໝາ': {
    word: 'ໝາ',
    phonetic: '/maː/',
    phonetics: [
      {
        text: '/maː/',
        audio: ''
      }
    ],
    meanings: [
      {
        partOfSpeech: 'ຄຳນາມ (Noun)',
        definitions: [
          {
            definition: 'ສັດລ້ຽງທີ່ຊື່ສັດ, ເປັນເພື່ອນຂອງມະນຸດ',
            example: 'ໝາເປັນສັດທີ່ຊື່ສັດທີ່ສຸດ'
          }
        ]
      }
    ]
  },
  "ກວນ": {
    "word": "ກວນ",
    "phonetic": "/kuːaːn/",
    "phonetics": [
      {
        "text": "/kuːaːn/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ກິລິຍາ (Verb)",
        "definitions": [
          {
            "definition": "ຄົນໃຫ້ເຂົ້າກັນดี, ເອົາໄມ້พายคนไปมาในกระทะที่มีของเหลว.",
            "example": "ແມ່ກຳລັງກວນຂະໜົມ."
          },
          {
            "definition": "ລົບກວນ, ເຮັດໃຫ້ເກີດຄວາມລຳຄານ.",
            "example": "ຢ່າມາເວົ້າກວນใจຂ້ອຍ."
          }
        ],
        "synonyms": ["ຄົນ (stir)", "ລົບກວນ (bother)"],
        "antonyms": []
      }
    ]
  },
  "ກວ້າງ": {
    "word": "ກວ້າງ",
    "phonetic": "/kwâːŋ/",
    "phonetics": [
      {
        "text": "/kwâːŋ/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳຄຸນນາມ (Adjective)",
        "definitions": [
          {
            "definition": "ມີໄລຍະຫ່າງຈາກຂອບໜຶ່ງຫາອີກຂອບໜຶ່ງຫຼາຍ.",
            "example": "ແມ່ນໍ້າຂອງແມ່ນແມ່ນໍ້າที่ກວ້າງຫຼາຍ."
          }
        ],
        "synonyms": ["ກວ້າງຂວາງ"],
        "antonyms": ["ແຄບ"]
      }
    ]
  },
  "ກວາດ": {
    "word": "ກວາດ",
    "phonetic": "/kwàːt/",
    "phonetics": [
      {
        "text": "/kwàːt/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ກິລິຍາ (Verb)",
        "definitions": [
          {
            "definition": "ທຳຄວາມສະອາດພື້ນດ້ວຍຟອຍ.",
            "example": "ລາວກຳລັງກວາດເຮືອນ."
          },
          {
            "definition": "ເຕົ້າໂຮມຄົນຫຼືສິ່ງຂອງຈຳນວນຫຼາຍໄປບ່ອນດຽວກັນ.",
            "example": "ຕຳຫຼວດກວາດລ້າງຜູ້ຄ້າຢາเสพติด."
          }
        ],
        "synonyms": ["ກວາດລ້າງ"],
        "antonyms": []
      }
    ]
  },
  "ກອງ": {
    "word": "ກອງ",
    "phonetic": "/kɔːŋ/",
    "phonetics": [
      {
        "text": "/kɔːŋ/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ສິ່ງທີ່รวมกันเป็นกลุ่มก้อน.",
            "example": "ມີກອງຟືນຢູ່ຫຼັງເຮືອນ."
          },
          {
            "definition": "ກຸ່ມຄົນທີ່รวมตัวกันเพื่อทำกิจกรรมอย่างใดอย่างหนึ่ง.",
            "example": "ກອງທະຫານກຽມພ້ອມອອກຮົບ."
          },
          {
            "definition": "ເຄື່ອງດົນຕີປະເພດຕີ.",
            "example": "ລາວຕີກອງເກັ່ງຫຼາຍ."
          }
        ],
        "synonyms": ["ກຸ່ມ", "ໝວດ", "ໝູ່"],
        "antonyms": []
      },
      {
        "partOfSpeech": "ກິລິຍາ (Verb)",
        "definitions": [
          {
            "definition": "ເຕົ້າໂຮມໃຫ້ເປັນກຸ່ມກ້ອນ.",
            "example": "ເຂົາເຈົ້າກອງເຂົ້າໄວ້ໃນລານບ້ານ."
          }
        ],
        "synonyms": ["ໂຮມ", "ສຸມ"],
        "antonyms": ["ກະຈาย"]
      }
    ]
  },
  "ກ່ອງ": {
    "word": "ກ່ອງ",
    "phonetic": "/kɔ̀ːŋ/",
    "phonetics": [
      {
        "text": "/kɔ̀ːŋ/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ພາຊະນະສຳລັບໃສ່ສິ່ງຂອງ, ສ່ວນຫຼາຍເຮັດດ້ວຍເຈ້ຍແຂງ, ໄມ້ ຫຼື ພລາສຕິກ.",
            "example": "ລາວເອົາຂອງຂວັນໃສ່ໃນກ່ອງ."
          }
        ],
        "synonyms": ["ຫີບ"],
        "antonyms": []
      }
    ]
  },
  "ກ້ອງ": {
    "word": "ກ້ອງ",
    "phonetic": "/kɔ̂ːŋ/",
    "phonetics": [
      {
        "text": "/kɔ̂ːŋ/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ເຄື່ອງມືສຳລັບຖ່າຍຮູບ.",
            "example": "ລາວຊື້ກ້ອງໃໝ່ເພື່ອຖ່າຍຮູບທຳມະຊາດ."
          },
          {
            "definition": "ເຄື່ອງມືສຳລັບສ່ອງເບິ່ງສິ່ງທີ່ຢູ່ໄກ ຫຼື ສິ່ງທີ່ນ້ອຍຫຼາຍ.",
            "example": "ກ້ອງສ່ອງທາງໄກ, ກ້ອງຈຸລະທັດ."
          }
        ],
        "synonyms": [],
        "antonyms": []
      },
      {
        "partOfSpeech": "ຄຳບຸພະບົດ (Preposition)",
        "definitions": [
          {
            "definition": "ຢູ່ຕ່ຳກວ່າ, ຢູ່ດ້ານລຸ່ມ.",
            "example": "ປຶ້ມວາງຢູ່ກ້ອງໂຕະ."
          }
        ],
        "synonyms": ["ລຸ່ມ", "ໃຕ້"],
        "antonyms": ["ເທິງ"]
      }
    ]
  },
  "ກອດ": {
    "word": "ກອດ",
    "phonetic": "/kɔ̀ːt/",
    "phonetics": [
      {
        "text": "/kɔ̀ːt/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ກິລິຍາ (Verb)",
        "definitions": [
          {
            "definition": "ໃຊ້แขนโอบรัดด้วยความรักหรือความเอ็นดู.",
            "example": "ແມ່ກອດລູກສາວນ້ອຍ."
          }
        ],
        "synonyms": ["ໂອບກອດ"],
        "antonyms": []
      }
    ]
  },
  "ກ່ອນ": {
    "word": "ກ່ອນ",
    "phonetic": "/kɔ̀ːn/",
    "phonetics": [
      {
        "text": "/kɔ̀ːn/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳວິເສດ (Adverb) / ຄຳບຸພະບົດ (Preposition)",
        "definitions": [
          {
            "definition": "ໃນເວລາที่ล่วงมาแล้ว, ตรงข้ามกับ 'ຫຼັງ'.",
            "example": "ຂ້ອຍຈະກິນເຂົ້າກ່ອນໄປໂຮງຮຽນ."
          }
        ],
        "synonyms": ["ກ່ອນໜ້າ"],
        "antonyms": ["ຫຼັງ", "ຕາມຫຼັງ"]
      }
    ]
  },
  "ກ້ອນ": {
    "word": "ກ້ອນ",
    "phonetic": "/kɔ̂ːn/",
    "phonetics": [
      {
        "text": "/kɔ̂ːn/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ສິ່ງທີ່รวมตัวกันเป็นก้อน.",
            "example": "ລາວເກັບກ້ອນຫີນມາຈາກແຄມນໍ້າ."
          }
        ],
        "synonyms": [],
        "antonyms": []
      },
      {
        "partOfSpeech": "ຄຳລັກສະນະນາມ (Classifier)",
        "definitions": [
          {
            "definition": "ໃຊ້เรียกสิ่งที่มีลักษณะเป็นก้อน.",
            "example": "ເຂົ້າໜົມ 2 ກ້ອນ."
          }
        ]
      }
    ]
  },
  "ກອບ": {
    "word": "ກອບ",
    "phonetic": "/kɔ̀ːp/",
    "phonetics": [
      {
        "text": "/kɔ̀ːp/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ສິ່ງທີ່ເຮັດເປັນຂອບล้อมรอบรูปภาพหรือสิ่งอื่น.",
            "example": "ກອບຮູບນີ້ເຮັດດ້ວຍໄມ້สัก."
          }
        ],
        "synonyms": ["ຂອບ"],
        "antonyms": []
      },
      {
        "partOfSpeech": "ຄຳຄຸນນາມ (Adjective)",
        "definitions": [
          {
            "definition": "ลักษณะที่เปราะ, หักง่ายเมื่อเคี้ยว.",
            "example": "ຂະໜົມປັງນີ້ກອບຫຼາຍ."
          }
        ],
        "synonyms": [],
        "antonyms": ["ໜຽວ"]
      },
      {
        "partOfSpeech": "ກິລິຍາ (Verb)",
        "definitions": [
          {
            "definition": "ເຕົ້າໂຮມ, รวบรวม.",
            "example": "ລາວກອບເອົາດິນຊາຍໃສ່ຖົງ."
          }
        ],
        "synonyms": ["ໂກຍ", "ເກັບ"],
        "antonyms": []
      }
    ]
  },
  "ໄຟ": {
    "word": "ໄຟ",
    "phonetic": "/faj/",
    "phonetics": [
      {
        "text": "/faj/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ພະລັງງານຄວາມຮ້ອນ, ແສງສະຫວ່າງ",
            "example": "ໄຟເຜາໄດ້"
          }
        ],
        "synonyms": ["ໄຟເຜາ", "ໄຟສະຫວ່າງ"],
        "antonyms": []
      }
    ]
  },
  "ດິນ": {
    "word": "ດິນ",
    "phonetic": "/din/",
    "phonetics": [
      {
        "text": "/din/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ພື້ນດິນ, ດິນຟ້າ",
            "example": "ດິນຟ້າເຊີນກັນ"
          }
        ],
        "synonyms": ["ພື້ນດິນ", "ດິນຟ້າ"],
        "antonyms": []
      }
    ]
  },
  "ລາວ": {
    "word": "ລາວ",
    "phonetic": "/laːw/",
    "phonetics": [
      {
        "text": "/laːw/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ພາສາລາວ, ຄົນລາວ",
            "example": "ພວກເຮົາເວົ້າລາວ"
          }
        ],
        "synonyms": ["ພາສາລາວ"],
        "antonyms": []
      }
    ]
  },
  "ພູ": {
    "word": "ພູ",
    "phonetic": "/pʰuː/",
    "phonetics": [
      {
        "text": "/pʰuː/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ພູສູງ, ພູເຂົາ",
            "example": "ພູໃນປ່າ"
          }
        ],
        "synonyms": ["ພູເຂົາ", "ພູສູງ"],
        "antonyms": []
      }
    ]
  },
  "ທະເລ": {
    "word": "ທະເລ",
    "phonetic": "/tʰa.leː/",
    "phonetics": [
      {
        "text": "/tʰa.leː/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ນ້ຳໃຫຍ່, ທະເລ",
            "example": "ທະເລຫຼິ້ນໄປໄດ້"
          }
        ],
        "synonyms": ["ນ້ຳໃຫຍ່", "ທະເລ"],
        "antonyms": []
      }
    ]
  },
  "ຟ້າ": {
    "word": "ຟ້າ",
    "phonetic": "/faː/",
    "phonetics": [
      {
        "text": "/faː/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ອາກາດ, ທ້ອງຟ້າ",
            "example": "ຟ້າສີຟ້າ"
          }
        ],
        "synonyms": ["ອາກາດ", "ທ້ອງຟ້າ"],
        "antonyms": []
      }
    ]
  },
  "ເດືອນ": {
    "word": "ເດືອນ",
    "phonetic": "/dɯːan/",
    "phonetics": [
      {
        "text": "/dɯːan/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ດາວດຽວ, ເດືອນ",
            "example": "ເດືອນສວ່າງ"
          }
        ],
        "synonyms": ["ດາວດຽວ"],
        "antonyms": []
      }
    ]
  },
  "ດາວ": {
    "word": "ດາວ",
    "phonetic": "/daːw/",
    "phonetics": [
      {
        "text": "/daːw/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ເຄື່ອງສວ່າງກ່ອນຟ້າ, ດາວ",
            "example": "ດາວກຳລັງສວ່າງ"
          }
        ],
        "synonyms": ["ເຄື່ອງສວ່າງ"],
        "antonyms": []
      }
    ]
  },
  "ອາທິດ": {
    "word": "ອາທິດ",
    "phonetic": "/ʔaː.tʰit/",
    "phonetics": [
      {
        "text": "/ʔaː.tʰit/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ແສງຕາເວັນ, ອາທິດ",
            "example": "ອາທິດສວ່າງວັນ"
          }
        ],
        "synonyms": ["ແສງຕາເວັນ", "ຕາເວັນ"],
        "antonyms": []
      }
    ]
  },
  "ລົດ": {
    "word": "ລົດ",
    "phonetic": "/lot/",
    "phonetics": [
      {
        "text": "/lot/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ຍານພາຫະນະ, ລົດ",
            "example": "ລົດເຂົ້າບ້ານ"
          }
        ],
        "synonyms": ["ຍານພາຫະນະ", "ລົດ"],
        "antonyms": []
      }
    ]
  },
  "ມື": {
    "word": "ມື",
    "phonetic": "/mɯː/",
    "phonetics": [
      {
        "text": "/mɯː/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ສ່ວນຮ່າງກາຍ, ມື",
            "example": "ມືຂອງຂ້ອຍ"
          }
        ],
        "synonyms": ["ມື"],
        "antonyms": []
      }
    ]
  },
  "ຕາ": {
    "word": "ຕາ",
    "phonetic": "/taː/",
    "phonetics": [
      {
        "text": "/taː/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ອົງປະກອບການເຫັນ, ຕາ",
            "example": "ຕາສວ່າງ"
          }
        ],
        "synonyms": ["ຕາ"],
        "antonyms": []
      }
    ]
  },
  "ຫົວ": {
    "word": "ຫົວ",
    "phonetic": "/hǔa/",
    "phonetics": [
      {
        "text": "/hǔa/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ສ່ວນຫົວ, ຫົວ",
            "example": "ຫົວຂອງຂ້ອຍປວດ"
          }
        ],
        "synonyms": ["ຫົວ"],
        "antonyms": []
      }
    ]
  },
  "ທາງ": {
    "word": "ທາງ",
    "phonetic": "/tʰaːŋ/",
    "phonetics": [
      {
        "text": "/tʰaːŋ/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳນາມ (Noun)",
        "definitions": [
          {
            "definition": "ທາງໄປຫາ, ທາງ",
            "example": "ທາງກັບບ້ານ"
          }
        ],
        "synonyms": ["ທາງ", "ທາງໄປ"],
        "antonyms": []
      }
    ]
  },
  "ພວກເຮົາ": {
    "word": "ພວກເຮົາ",
    "phonetic": "/pʰuak.haw/",
    "phonetics": [
      {
        "text": "/pʰuak.haw/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ຄຳສັມພັນ (Pronoun)",
        "definitions": [
          {
            "definition": "ພວກເຮົາ, ພວກຂອງຂ້ອຍ",
            "example": "ພວກເຮົາໄປດີດີ"
          }
        ],
        "synonyms": ["ພວກຂອງຂ້ອຍ"],
        "antonyms": []
      }
    ]
  },
  "ກິນ": {
    "word": "ກິນ",
    "phonetic": "/kin/",
    "phonetics": [
      {
        "text": "/kin/",
        "audio": ""
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "ກິລິຍາ (Verb)",
        "definitions": [
          {
            "definition": "ເອົາອາຫານເຂົ້າປາກ, ກິນອາຫານ",
            "example": "ຂ້ອຍກິນເຂົ້າທຸກມື້"
          },
          {
            "definition": "ກິນຢາ, ກິນຢາປິ່ນປົວ",
            "example": "ລາວກິນຢາຫຼັງຈາກກິນເຂົ້າ"
          }
        ],
        "synonyms": ["ກິນອາຫານ", "ກິນເຂົ້າ"],
        "antonyms": ["ອົດ", "ບໍ່ກິນ"]
      }
    ]
  }
};

export const getRandomLaoWord = (): { word: string; definition: WordDefinition } => {
  const words = Object.keys(laoMockData);
  const randomWord = words[Math.floor(Math.random() * words.length)];
  return {
    word: randomWord,
    definition: laoMockData[randomWord]
  };
};

export const searchLaoWord = (query: string): WordDefinition | null => {
  const normalizedQuery = query.trim().toLowerCase();
  
  // Direct match
  if (laoMockData[query]) {
    return laoMockData[query];
  }
  
  // Partial match
  const partialMatch = Object.keys(laoMockData).find(word => 
    word.includes(normalizedQuery) || normalizedQuery.includes(word)
  );
  
  if (partialMatch) {
    return laoMockData[partialMatch];
  }
  
  return null;
};

export const wordExists = (query: string): boolean => {
  const normalizedQuery = query.trim().toLowerCase();
  
  // Direct match
  if (laoMockData[query]) {
    return true;
  }
  
  // Partial match
  const partialMatch = Object.keys(laoMockData).find(word => 
    word.includes(normalizedQuery) || normalizedQuery.includes(word)
  );
  
  return partialMatch !== undefined;
};