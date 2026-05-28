export const questions = [
  {
    "id": "ch9-01",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 1,
    "prompt": "Suppose s is a string with the value \"java\". What will be assigned to x if you execute the following code?\n\nchar x = s.charAt(4);",
    "options": [
      {
        "letter": "a",
        "text": "'a'"
      },
      {
        "letter": "b",
        "text": "'v'"
      },
      {
        "letter": "c",
        "text": "Nothing will be assigned to x, because the execution causes the runtime error StringIndexOutofBoundsException."
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch9-02",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 2,
    "prompt": "Which of the following statements is preferred to create a string \"Welcome to Java\"?",
    "options": [
      {
        "letter": "a",
        "text": "String s = \"Welcome to Java\";"
      },
      {
        "letter": "b",
        "text": "String s = new String(\"Welcome to Java\");"
      },
      {
        "letter": "c",
        "text": "String s; s = \"Welcome to Java\";"
      },
      {
        "letter": "d",
        "text": "String s; s = new String(\"Welcome to Java\");"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch9-03",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 3,
    "prompt": "What is the output of the following code?\n\npublic class Test\n  {\n  public static void main(String[] args)\n  {\n    String s1 = \"Welcome to Java!\";\n    String s2 = s1;\n\n    if (s1 == s2)\n      System.out.println(\"s1 and s2 reference to the same String object\");\n    else\n      System.out.println(\"s1 and s2 reference to different String objects\");\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "s1 and s2 reference to the same String object"
      },
      {
        "letter": "b",
        "text": "s1 and s2 reference to different String objects"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch9-04",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 4,
    "prompt": "What is the output of the following code?\n\npublic class Test\n  {\n  \n  public static void main(String[] args)\n  {\n    String s1 = \"Welcome to Java!\";\n    String s2 = \"Welcome to Java!\";\n\n    if (s1 == s2)\n      System.out.println(\"s1 and s2 reference to the same String object\");\n    else\n      System.out.println(\"s1 and s2 reference to different String objects\");\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "s1 and s2 reference to the same String object"
      },
      {
        "letter": "b",
        "text": "s1 and s2 reference to different String objects"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch9-05",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 5,
    "prompt": "What is the output of the following code?\n\npublic class Test\n{\n  public static void main(String[] args)\n  {\n    String s1 = new String(\"Welcome to Java!\");\n    String s2 = new String(\"Welcome to Java!\");\n\n    if (s1 == s2)\n      System.out.println(\"s1 and s2 reference to the same String object\");\n    else\n      System.out.println(\"s1 and s2 reference to different String objects\");\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "s1 and s2 reference to the same String object"
      },
      {
        "letter": "b",
        "text": "s1 and s2 reference to different String objects"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch9-06",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 6,
    "prompt": "Suppose s1 and s2 are two strings. What is the result of the following code?\n\n    s1.equals(s2) == s2.equals(s1)",
    "options": [
      {
        "letter": "a",
        "text": "true"
      },
      {
        "letter": "b",
        "text": "false"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch9-07",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 7,
    "prompt": "What is the output of the following code?\n\npublic class Test\n{\n  public static void main(String[] args)\n  {\n    String s1 = new String(\"Welcome to Java!\");\n    String s2 = new String(\"Welcome to Java!\");\n\n    if (s1.equals(s2))\n      System.out.println(\"s1 and s2 have the same contents\");\n    else\n      System.out.println(\"s1 and s2 have different contents\");\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "s1 and s2 have the same contents"
      },
      {
        "letter": "b",
        "text": "s1 and s2 have different contents"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch9-08",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 8,
    "prompt": "What is the output of the following code?\n\npublic class Test\n{ \n  public static void main(String[] args)\n  {\n    String s1 = new String(\"Welcome to Java!\");\n    String s2 = s1.toUpperCase();\n\n    if (s1 == s2)\n      System.out.println(\"s1 and s2 reference to the same String object\");\n    else if (s1.equals(s2))\n      System.out.println(\"s1 and s2 have the same contents\");\n    else\n      System.out.println(\"s1 and s2 have different contents\");\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "s1 and s2 reference to the same String object"
      },
      {
        "letter": "b",
        "text": "s1 and s2 have the same contents"
      },
      {
        "letter": "c",
        "text": "s1 and s2 have different contents"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch9-09",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 9,
    "prompt": "What is the output of the following code?\n\npublic class Test\n{  \n  public static void main(String[] args)\n  {\n    String s1 = new String(\"Welcome to Java\");\n    String s2 = s1;\n\n    s1 += \"and Welcome to HTML\";\n\n    if (s1 == s2)\n      System.out.println(\"s1 and s2 reference to the same String object\");\n    else\n      System.out.println(\"s1 and s2 reference to different String objects\");\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "s1 and s2 reference to the same String object"
      },
      {
        "letter": "b",
        "text": "s1 and s2 reference to different String objects"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch9-10",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 10,
    "prompt": "Suppose s1 and s2 are two strings. Which of the following statements or expressions are incorrect?",
    "options": [
      {
        "letter": "a",
        "text": "String s = new String(\"new string\");"
      },
      {
        "letter": "b",
        "text": "String s3 = s1 + s2"
      },
      {
        "letter": "c",
        "text": "s1 >= s2"
      },
      {
        "letter": "d",
        "text": "int i = s1.length"
      },
      {
        "letter": "e",
        "text": "s1.charAt(0) = '5'"
      }
    ],
    "correct": [
      "c",
      "d",
      "e"
    ]
  },
  {
    "id": "ch9-11",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 11,
    "prompt": "Suppose s1 and s2 are two strings. Which of the following statements or expressions is incorrect?",
    "options": [
      {
        "letter": "a",
        "text": "String s3 = s1 - s2;"
      },
      {
        "letter": "b",
        "text": "boolean b = s1.compareTo(s2);"
      },
      {
        "letter": "c",
        "text": "char c = s1[0];"
      },
      {
        "letter": "d",
        "text": "char c = s1.charAt(s1.length());"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch9-12",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 12,
    "prompt": "\"abc\".compareTo(\"aba\") returns ___________.",
    "options": [
      {
        "letter": "a",
        "text": "1"
      },
      {
        "letter": "b",
        "text": "2"
      },
      {
        "letter": "c",
        "text": "-1"
      },
      {
        "letter": "d",
        "text": "-2"
      },
      {
        "letter": "e",
        "text": "0"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch9-13",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 13,
    "prompt": "\"AbA\".compareToIgnoreCase(\"abC\") returns ___________.",
    "options": [
      {
        "letter": "a",
        "text": "1"
      },
      {
        "letter": "b",
        "text": "2"
      },
      {
        "letter": "c",
        "text": "-1"
      },
      {
        "letter": "d",
        "text": "-2"
      },
      {
        "letter": "e",
        "text": "0"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch9-14",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 14,
    "prompt": "____________________ returns true.",
    "options": [
      {
        "letter": "a",
        "text": "\"peter\".compareToIgnoreCase(\"Peter\")"
      },
      {
        "letter": "b",
        "text": "\"peter\".compareToIgnoreCase(\"peter\")"
      },
      {
        "letter": "c",
        "text": "\"peter\".equalsIgnoreCase(\"Peter\")"
      },
      {
        "letter": "d",
        "text": "\"peter\".equalsIgnoreCase(\"peter\")"
      },
      {
        "letter": "e",
        "text": "\"peter\".equals(\"peter\")"
      }
    ],
    "correct": [
      "c",
      "d",
      "e"
    ]
  },
  {
    "id": "ch9-15",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 15,
    "prompt": "What is the output of the following code?\n\nString s = \"University\";\ns.replace(\"i\", \"ABC\");\nSystem.out.println(s);",
    "options": [
      {
        "letter": "a",
        "text": "UnABCversity"
      },
      {
        "letter": "b",
        "text": "UnABCversABCty"
      },
      {
        "letter": "c",
        "text": "UniversABCty"
      },
      {
        "letter": "d",
        "text": "University"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch9-16",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 16,
    "prompt": "What is the return value of \"SELECT\".substring(0, 5)?",
    "options": [
      {
        "letter": "a",
        "text": "\"SELECT\""
      },
      {
        "letter": "b",
        "text": "\"SELEC\""
      },
      {
        "letter": "c",
        "text": "\"SELE\""
      },
      {
        "letter": "d",
        "text": "\"ELECT\""
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch9-17",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 17,
    "prompt": "What is the return value of \"SELECT\".substring(4, 4)?",
    "options": [
      {
        "letter": "a",
        "text": "an empty string"
      },
      {
        "letter": "b",
        "text": "C"
      },
      {
        "letter": "c",
        "text": "T"
      },
      {
        "letter": "d",
        "text": "E"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch9-18",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 18,
    "prompt": "Analyze the following code.\n\nclass Test\n{  \n  public static void main(String[] args) \n  {\n    String s;\n    System.out.println(\"s is \" + s);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "The program has a compilation error because s is not initialized, but it is referenced in the println statement."
      },
      {
        "letter": "b",
        "text": "The program has a runtime error because s is not initialized, but it is referenced in the println statement."
      },
      {
        "letter": "c",
        "text": "The program has a runtime error because s is null in the println statement."
      },
      {
        "letter": "d",
        "text": "The program compiles and runs fine."
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch9-19",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 19,
    "prompt": "To check if a string s contains the prefix \"Java\", you may write",
    "options": [
      {
        "letter": "a",
        "text": "if (s.startsWith(\"Java\")) ..."
      },
      {
        "letter": "b",
        "text": "if (s.indexOf(\"Java\") == 0) ..."
      },
      {
        "letter": "c",
        "text": "if (s.substring(0, 4).equals(\"Java\")) ..."
      },
      {
        "letter": "d",
        "text": "if (s.charAt(0) == 'J' && s.charAt(1) == 'a' && s.charAt(2) == 'v' && s.charAt(3) == 'a') ..."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch9-20",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 20,
    "prompt": "To check if a string s contains the suffix \"Java\", you may write",
    "options": [
      {
        "letter": "a",
        "text": "if (s.endsWith(\"Java\")) ..."
      },
      {
        "letter": "b",
        "text": "if (s.lastIndexOf(\"Java\") >= 0) ..."
      },
      {
        "letter": "c",
        "text": "if (s.substring(s.length() - 4).equals(\"Java\")) ..."
      },
      {
        "letter": "d",
        "text": "if (s.substring(s.length() - 5).equals(\"Java\")) ..."
      },
      {
        "letter": "e",
        "text": "if (s.charAt(s.length() - 4) == 'J' && s.charAt(s.length() - 3) == 'a' && s.charAt(s.length() - 2) == 'v' && s.charAt(s.length() - 1) == 'a') ..."
      }
    ],
    "correct": [
      "a",
      "c",
      "e"
    ]
  },
  {
    "id": "ch9-21",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 21,
    "prompt": "Which of the following is the correct statement to return JAVA?",
    "options": [
      {
        "letter": "a",
        "text": "toUpperCase(\"Java\")"
      },
      {
        "letter": "b",
        "text": "\"Java\".toUpperCase(\"Java\")"
      },
      {
        "letter": "c",
        "text": "\"Java\".toUpperCase()"
      },
      {
        "letter": "d",
        "text": "String.toUpperCase(\"Java\")"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch9-22",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 22,
    "prompt": "Which of the following is the correct statement to return a string from an array a of characters?",
    "options": [
      {
        "letter": "a",
        "text": "toString(a)"
      },
      {
        "letter": "b",
        "text": "new String(a)"
      },
      {
        "letter": "c",
        "text": "convertToString(a)"
      },
      {
        "letter": "d",
        "text": "String.toString(a)"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch9-23",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 23,
    "prompt": "Assume s is \"   abc  \", the method __________ returns a new string \"abc\".",
    "options": [
      {
        "letter": "a",
        "text": "s.trim(s)"
      },
      {
        "letter": "b",
        "text": "trim(s)"
      },
      {
        "letter": "c",
        "text": "String.trim(s)"
      },
      {
        "letter": "d",
        "text": "s.trim()"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch9-24",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 24,
    "prompt": "Assume s is \"ABCABC\", the method __________ returns a new string \"aBCaBC\".",
    "options": [
      {
        "letter": "a",
        "text": "s.toLowerCase(s)"
      },
      {
        "letter": "b",
        "text": "s.toLowerCase()"
      },
      {
        "letter": "c",
        "text": "s.replace('A', 'a')"
      },
      {
        "letter": "d",
        "text": "s.replace('a', 'A')"
      },
      {
        "letter": "e",
        "text": "s.replace(\"ABCABC\", \"aBCaBC\")"
      }
    ],
    "correct": [
      "c",
      "e"
    ]
  },
  {
    "id": "ch9-25",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 25,
    "prompt": "Assume s is \"ABCABC\", the method __________ returns an array of characters.",
    "options": [
      {
        "letter": "a",
        "text": "toChars(s)"
      },
      {
        "letter": "b",
        "text": "s.toCharArray()"
      },
      {
        "letter": "c",
        "text": "String.toChars()"
      },
      {
        "letter": "d",
        "text": "String.toCharArray()"
      },
      {
        "letter": "e",
        "text": "s.toChars()"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch9-26",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 26,
    "prompt": "__________ returns a string.",
    "options": [
      {
        "letter": "a",
        "text": "String.valueOf(123)"
      },
      {
        "letter": "b",
        "text": "String.valueOf(12.53)"
      },
      {
        "letter": "c",
        "text": "String.valueOf(false)"
      },
      {
        "letter": "d",
        "text": "String.valueOf(new char[]{'a', 'b', 'c'})"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch9-27",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 27,
    "prompt": "The following program displays __________.\n\npublic class Test\n{  \n  public static void main(String[] args)\n  {\n    String s = \"Java\";\n    StringBuilder buffer = new StringBuilder(s);\n    change(s);\n    System.out.println(s);\n  }\n  private static void change(String s)\n  {\n    s = s + \" and HTML\";\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "Java"
      },
      {
        "letter": "b",
        "text": "Java and HTML"
      },
      {
        "letter": "c",
        "text": "and HTML"
      },
      {
        "letter": "d",
        "text": "nothing is displayed"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch9-28",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 28,
    "prompt": "What is displayed by the following statement?\n        System.out.println(\"Java is neat\".replaceAll(\"is\", \"AAA\"));",
    "options": [
      {
        "letter": "a",
        "text": "JavaAAAneat"
      },
      {
        "letter": "b",
        "text": "JavaAAA neat"
      },
      {
        "letter": "c",
        "text": "Java AAA neat"
      },
      {
        "letter": "d",
        "text": "Java AAAneat"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch9-29",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 29,
    "prompt": "What is displayed by the following code?\n  public static void main(String[] args)\n  {\n    String[] tokens = \"Welcome to Java\".split(\"o\");\n    for (int i = 0; i < tokens.length; i++)\n    {\n      System.out.print(tokens[i] + \" \");\n    }\n  }",
    "options": [
      {
        "letter": "a",
        "text": "Welcome to Java"
      },
      {
        "letter": "b",
        "text": "Welc me to Java"
      },
      {
        "letter": "c",
        "text": "Welc me t  Java"
      },
      {
        "letter": "d",
        "text": "Welcome t  Java"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch9-30",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 29,
    "prompt": "What is displayed by the following code?\n    System.out.print(\"Hi, ABC, good\".matches(\"ABC \") + \" \");\n    System.out.println(\"Hi, ABC, good\".matches(\".*ABC.*\"));",
    "options": [
      {
        "letter": "a",
        "text": "false fasle"
      },
      {
        "letter": "b",
        "text": "true fasle"
      },
      {
        "letter": "c",
        "text": "true true"
      },
      {
        "letter": "d",
        "text": "false true"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch9-31",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 29,
    "prompt": "What is displayed by the following code?\n    System.out.print(\"A,B;C\".replaceAll(\",;\", \"#\") + \" \");\n    System.out.println(\"A,B;C\".replaceAll(\"[,;]\", \"#\"));",
    "options": [
      {
        "letter": "a",
        "text": "A B C A#B#C"
      },
      {
        "letter": "b",
        "text": "A#B#C A#B#C"
      },
      {
        "letter": "c",
        "text": "A,B;C A#B#C"
      },
      {
        "letter": "d",
        "text": "A B C A B C"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch9-32",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 29,
    "prompt": "What is displayed by the following code?\n\n    String[] tokens = \"A,B;C;D\".split(\"[,;]\");\n    for (int i = 0; i < tokens.length; i++)\n      System.out.print(tokens[i] +  \" \");",
    "options": [
      {
        "letter": "a",
        "text": "A,B;C;D"
      },
      {
        "letter": "b",
        "text": "A B C D"
      },
      {
        "letter": "c",
        "text": "A B C;D"
      },
      {
        "letter": "d",
        "text": "A B;C;D"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch9-33",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 30,
    "prompt": "Which of following is not a correct method in Character?",
    "options": [
      {
        "letter": "a",
        "text": "isLetterOrDigit(char)"
      },
      {
        "letter": "b",
        "text": "isLetter(char)"
      },
      {
        "letter": "c",
        "text": "isDigit()"
      },
      {
        "letter": "d",
        "text": "toLowerCase(char)"
      },
      {
        "letter": "e",
        "text": "toUpperCase()"
      }
    ],
    "correct": [
      "c",
      "e"
    ]
  },
  {
    "id": "ch9-34",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 31,
    "prompt": "Suppose Character x = new Character('a'), __________________ returns true.",
    "options": [
      {
        "letter": "a",
        "text": "x.equals(new Character('a'))"
      },
      {
        "letter": "b",
        "text": "x.compareToIgnoreCase('A')"
      },
      {
        "letter": "c",
        "text": "x.equalsIgnoreCase('A')"
      },
      {
        "letter": "d",
        "text": "x.equals('a')"
      },
      {
        "letter": "e",
        "text": "x.equals(\"a\")"
      }
    ],
    "correct": [
      "a",
      "d"
    ]
  },
  {
    "id": "ch9-35",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 32,
    "prompt": "Analyze the following code.\n\nclass Test\n{\n  public static void main(String[] args) \n  {\n    StringBuilder strBuf = new StringBuilder(4);\n    strBuf.append(\"ABCDE\");\n    System.out.println(\"What's strBuf.charAt(5)? \" + strBuf.charAt(5));\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "The program has a compilation error because you cannot specify initial capacity in the StringBuilder constructor."
      },
      {
        "letter": "b",
        "text": "The program has a runtime error because because the buffer's capacity is 4, but five characters \"ABCDE\" are appended into the buffer."
      },
      {
        "letter": "c",
        "text": "The program has a runtime error because the length of the string in the buffer is 5 after \"ABCDE\" is appended into the buffer. Therefore, strBuf.charAt(5) is out of range."
      },
      {
        "letter": "d",
        "text": "The program compiles and runs fine."
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch9-36",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 33,
    "prompt": "Which of the following is true?",
    "options": [
      {
        "letter": "a",
        "text": "You can add characters into a string buffer."
      },
      {
        "letter": "b",
        "text": "You can delete characters into a string buffer."
      },
      {
        "letter": "c",
        "text": "You can reverse the characters in a string buffer."
      },
      {
        "letter": "d",
        "text": "The capacity of a string buffer can be automatically adjusted."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch9-37",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 34,
    "prompt": "_________ returns the last character in a StringBuilder variable named strBuf?",
    "options": [
      {
        "letter": "a",
        "text": "strBuf.charAt(strBuf.length() - 1)"
      },
      {
        "letter": "b",
        "text": "strBuf.charAt(strBuf.capacity() - 1)"
      },
      {
        "letter": "c",
        "text": "StringBuilder.charAt(strBuf.length() - 1)"
      },
      {
        "letter": "d",
        "text": "StringBuilder.charAt(strBuf.capacity() - 1)"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch9-38",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 35,
    "prompt": "Assume StringBuilder strBuf is \"ABCDEFG\", after invoking _________, strBuf contains \"AEFG\".",
    "options": [
      {
        "letter": "a",
        "text": "strBuf.delete(0, 3)"
      },
      {
        "letter": "b",
        "text": "strBuf.delete(1, 3)"
      },
      {
        "letter": "c",
        "text": "strBuf.delete(1, 4)"
      },
      {
        "letter": "d",
        "text": "strBuf.delete(2, 4)"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch9-39",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 36,
    "prompt": "Assume StringBuilder strBuf is \"ABCDEFG\", after invoking _________, strBuf contains \"ABCRRRRDEFG\".",
    "options": [
      {
        "letter": "a",
        "text": "strBuf.insert(1, \"RRRR\")"
      },
      {
        "letter": "b",
        "text": "strBuf.insert(2, \"RRRR\")"
      },
      {
        "letter": "c",
        "text": "strBuf.insert(3, \"RRRR\")"
      },
      {
        "letter": "d",
        "text": "strBuf.insert(4, \"RRRR\")"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch9-40",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 37,
    "prompt": "Assume StringBuilder strBuf is \"ABCCEFC\", after invoking _________, strBuf contains \"ABTTEFT\".",
    "options": [
      {
        "letter": "a",
        "text": "strBuf.replace('C', 'T')"
      },
      {
        "letter": "b",
        "text": "strBuf.replace(\"C\", \"T\")"
      },
      {
        "letter": "c",
        "text": "strBuf.replace(\"CC\", \"TT\")"
      },
      {
        "letter": "d",
        "text": "strBuf.replace('C', \"TT\")"
      },
      {
        "letter": "e",
        "text": "strBuf.replace(2, 7, \"TTEFT\")"
      }
    ],
    "correct": [
      "e"
    ]
  },
  {
    "id": "ch9-41",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 38,
    "prompt": "The StringBuilder methods _____________ not only change the contents of a string buffer, but also returns a reference to the string buffer.",
    "options": [
      {
        "letter": "a",
        "text": "delete"
      },
      {
        "letter": "b",
        "text": "append"
      },
      {
        "letter": "c",
        "text": "insert"
      },
      {
        "letter": "d",
        "text": "reverse"
      },
      {
        "letter": "e",
        "text": "replace"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "id": "ch9-42",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 39,
    "prompt": "The following program displays __________.\n\npublic class Test\n{\n  public static void main(String[] args)\n  {\n    String s = \"Java\";\n    StringBuilder buffer = new StringBuilder(s);\n    change(buffer);\n    System.out.println(buffer);\n  }\n  private static void change(StringBuilder buffer)\n  {\n\n    buffer.append(\" and HTML\");\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "Java"
      },
      {
        "letter": "b",
        "text": "Java and HTML"
      },
      {
        "letter": "c",
        "text": "and HTML"
      },
      {
        "letter": "d",
        "text": "nothing is displayed"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch9-43",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 40,
    "prompt": "How can you get the word \"abc\" in the main method from the following call?\n\njava Test \"+\" 3 \"abc\" 2",
    "options": [
      {
        "letter": "a",
        "text": "args[0]"
      },
      {
        "letter": "b",
        "text": "args[1]"
      },
      {
        "letter": "c",
        "text": "args[2]"
      },
      {
        "letter": "d",
        "text": "args[3]"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch9-44",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 41,
    "prompt": "Given the following program:\n\npublic class Test\n{\n  public static void main(String[] args)\n  {\n    for (int i = 0; i < args.length; i++)\n  \t{\n      System.out.print(args[i] + \" \");\n    }\n  }\n}\n\nWhat is the output, if you run the program using \n\njava Test 1 2 3",
    "options": [
      {
        "letter": "a",
        "text": "3"
      },
      {
        "letter": "b",
        "text": "1"
      },
      {
        "letter": "c",
        "text": "1 2 3"
      },
      {
        "letter": "d",
        "text": "1 2"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch9-45",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 42,
    "prompt": "Which code fragment would correctly identify the number of arguments passed via the command line to a Java application, excluding the name of the class that is being invoked?",
    "options": [
      {
        "letter": "a",
        "text": "int count = args.length;"
      },
      {
        "letter": "b",
        "text": "int count = args.length - 1;"
      },
      {
        "letter": "c",
        "text": "int count = 0; while (args[count] != null) count ++;"
      },
      {
        "letter": "d",
        "text": "int count=0; while (!(args[count].equals(\"\"))) count ++;"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch9-46",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 43,
    "prompt": "Which correctly creates an array of five empty Strings?",
    "options": [
      {
        "letter": "a",
        "text": "String[] a = new String [5];"
      },
      {
        "letter": "b",
        "text": "String[] a = {\"\", \"\", \"\", \"\", \"\"};"
      },
      {
        "letter": "c",
        "text": "String[5] a;"
      },
      {
        "letter": "d",
        "text": "String[ ] a = new String [5]; for (int i = 0; i < 5; a[i++] = null);"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch9-47",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 44,
    "prompt": "Identify the problems in the following code.\n                \npublic class Test\n{\n  public static void main(String argv[])\n  {\n    System.out.println(\"argv.length is \" + argv.length);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "The program has a compile error because String argv[] is wrong and it should be replaced by String[] args."
      },
      {
        "letter": "b",
        "text": "The program has a compile error because String args[] is wrong and it should be replaced by String args[]."
      },
      {
        "letter": "c",
        "text": "If you run this program without passing any arguments, the program would have a runtime error because argv is null."
      },
      {
        "letter": "d",
        "text": "If you run this program without passing any arguments, the program would display argv.length is 0."
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch9-48",
    "chapter": 9,
    "chapterTitle": "Chapter 9 Strings",
    "section": "",
    "sourceNumber": 45,
    "prompt": "Which of the following is the correct header of the main method?",
    "options": [
      {
        "letter": "a",
        "text": "public static void main(String[] args)"
      },
      {
        "letter": "b",
        "text": "public static void main(String args[])"
      },
      {
        "letter": "c",
        "text": "public static void main(String[] x)"
      },
      {
        "letter": "d",
        "text": "public static void main(String x[])"
      },
      {
        "letter": "e",
        "text": "static void main(String[] args)"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch12-01",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.2 Swing vs. AWT",
    "sourceNumber": 1,
    "prompt": "Swing components that don't rely on native GUI are referred to as ___________.",
    "options": [
      {
        "letter": "a",
        "text": "lightweight components"
      },
      {
        "letter": "b",
        "text": "heavyweight components"
      },
      {
        "letter": "c",
        "text": "GUI components"
      },
      {
        "letter": "d",
        "text": "non-GUI components"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-02",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.2 Swing vs. AWT",
    "sourceNumber": 2,
    "prompt": "__________ are referred to as heavyweight components.",
    "options": [
      {
        "letter": "a",
        "text": "AWT components"
      },
      {
        "letter": "b",
        "text": "Swing components"
      },
      {
        "letter": "c",
        "text": "GUI components"
      },
      {
        "letter": "d",
        "text": "Non-GUI components"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-03",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.3 The Java GUI API",
    "sourceNumber": 3,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "To distinguish new Swing component classes from their AWT counterparts, Swing GUI component classes are named with a prefix J."
      },
      {
        "letter": "b",
        "text": "All Swing GUI components are lightweight."
      },
      {
        "letter": "c",
        "text": "A user interface object such as (button, list) can appear in one container."
      },
      {
        "letter": "d",
        "text": "A container such as JFrame is also a component."
      },
      {
        "letter": "e",
        "text": "Every instance of Component can be added to a container."
      }
    ],
    "correct": [
      "a",
      "c",
      "d"
    ]
  },
  {
    "id": "ch12-04",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.3 The Java GUI API",
    "sourceNumber": 4,
    "prompt": "Which of the following classes is a heavyweight component?",
    "options": [
      {
        "letter": "a",
        "text": "JButton"
      },
      {
        "letter": "b",
        "text": "JTextField"
      },
      {
        "letter": "c",
        "text": "JPanel"
      },
      {
        "letter": "d",
        "text": "JFrame"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch12-05",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.3 The Java GUI API",
    "sourceNumber": 5,
    "prompt": "Which component cannot be added to a container?",
    "options": [
      {
        "letter": "a",
        "text": "JPanel"
      },
      {
        "letter": "b",
        "text": "JButton"
      },
      {
        "letter": "c",
        "text": "JFrame"
      },
      {
        "letter": "d",
        "text": "JComponent"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-06",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.3 The Java GUI API",
    "sourceNumber": 6,
    "prompt": "Which of the following are subclasses of java.awt.Component?",
    "options": [
      {
        "letter": "a",
        "text": "Container classes"
      },
      {
        "letter": "b",
        "text": "Swing user interface classes"
      },
      {
        "letter": "c",
        "text": "Helper classes such as Color and Font"
      },
      {
        "letter": "d",
        "text": "Layout managers"
      }
    ],
    "correct": [
      "a",
      "b"
    ]
  },
  {
    "id": "ch12-07",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.3 The Java GUI API",
    "sourceNumber": 7,
    "prompt": "What is best to describe the relationship between a container and a SWing GUI object in the container?",
    "options": [
      {
        "letter": "a",
        "text": "Association"
      },
      {
        "letter": "b",
        "text": "Aggregation"
      },
      {
        "letter": "c",
        "text": "Composition"
      },
      {
        "letter": "d",
        "text": "Inheritance"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-08",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.3 The Java GUI API",
    "sourceNumber": 8,
    "prompt": "What is best to describe the relationship between a container and a layout manager?",
    "options": [
      {
        "letter": "a",
        "text": "Association"
      },
      {
        "letter": "b",
        "text": "Aggregation"
      },
      {
        "letter": "c",
        "text": "Composition"
      },
      {
        "letter": "d",
        "text": "Inheritance"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch12-09",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.3 The Java GUI API",
    "sourceNumber": 9,
    "prompt": "What is best to describe the relationship between JComponent and JButton?",
    "options": [
      {
        "letter": "a",
        "text": "Association"
      },
      {
        "letter": "b",
        "text": "Aggregation"
      },
      {
        "letter": "c",
        "text": "Composition"
      },
      {
        "letter": "d",
        "text": "Inheritance"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch12-10",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.3 The Java GUI API",
    "sourceNumber": 10,
    "prompt": "What is best to describe the relationship between Component and Color?",
    "options": [
      {
        "letter": "a",
        "text": "Association"
      },
      {
        "letter": "b",
        "text": "Aggregation"
      },
      {
        "letter": "c",
        "text": "Composition"
      },
      {
        "letter": "d",
        "text": "Inheritance"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-11",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.3 The Java GUI API",
    "sourceNumber": 11,
    "prompt": "What is best to describe the relationship between Component and Font?",
    "options": [
      {
        "letter": "a",
        "text": "Association"
      },
      {
        "letter": "b",
        "text": "Aggregation"
      },
      {
        "letter": "c",
        "text": "Composition"
      },
      {
        "letter": "d",
        "text": "Inheritance"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-12",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.3 The Java GUI API",
    "sourceNumber": 12,
    "prompt": "Which of the following classes are in the java.awt package?",
    "options": [
      {
        "letter": "a",
        "text": "Color"
      },
      {
        "letter": "b",
        "text": "Font"
      },
      {
        "letter": "c",
        "text": "Component"
      },
      {
        "letter": "d",
        "text": "JFrame"
      },
      {
        "letter": "e",
        "text": "JComponent"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ]
  },
  {
    "id": "ch12-13",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.4 Frames",
    "sourceNumber": 13,
    "prompt": "Analyze the following code.\n\nimport java.awt.*;\nimport javax.swing.*;\n\npublic class Test  {\n  public static void main(String[] args) {\n    Component c = new JButton(\"OK\");\n    JFrame frame = new JFrame(\"My Frame\");\n    frame.add(c);\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setVisible(true);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "You cannot assign a JButton to a variable of java.awt.Component."
      },
      {
        "letter": "b",
        "text": "You can only add c to a container because c's type is Component."
      },
      {
        "letter": "c",
        "text": "You cannot add a Swing component directly to a JFrame using add(c) prior to JDK 1.4, but it is OK in JDK 1.5."
      },
      {
        "letter": "d",
        "text": "You cannot create a JFrame using new JFrame(\"My Frame\")."
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-14",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.4 Frames",
    "sourceNumber": 14,
    "prompt": "The correct order of the following three statements is ___________.\n\n1. frame.setLocationRelativeTo(null);\n2. frame.setSize(100, 200);\n3. frame.setVisible(true);",
    "options": [
      {
        "letter": "a",
        "text": "1 2 3"
      },
      {
        "letter": "b",
        "text": "1 3 2"
      },
      {
        "letter": "c",
        "text": "2 1 3"
      },
      {
        "letter": "d",
        "text": "3 2 1"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-15",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.4 Frames",
    "sourceNumber": 15,
    "prompt": "Analyze the following code.\n\nimport java.awt.*;\nimport javax.swing.*;\n\npublic class Test  {\n  public static void main(String[] args) {\n    JFrame frame = new JFrame(\"My Frame\");\n    frame.add(new JButton(\"OK\"));\n    frame.add(new JButton(\"Cancel\"));\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setSize(200, 200);\n    frame.setVisible(true);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "Only button OK is displayed."
      },
      {
        "letter": "b",
        "text": "Only button Cancel is displayed."
      },
      {
        "letter": "c",
        "text": "Both button OK and button Cancel are displayed and button OK is displayed on the left side of button OK."
      },
      {
        "letter": "d",
        "text": "Both button OK and button Cancel are displayed and button OK is displayed on the right side of button OK."
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch12-16",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.4 Frames",
    "sourceNumber": 16,
    "prompt": "How many frames are displayed?\n\nimport javax.swing.*;\n\npublic class Test  {\n  public static void main(String[] args) {\n    JFrame f1 = new JFrame(\"My Frame\");\n    JFrame f2 = f1;\n    JFrame f3 = f2;\n    f1.setVisible(true);\n    f2.setVisible(true);\n    f3.setVisible(true);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "1."
      },
      {
        "letter": "b",
        "text": "2."
      },
      {
        "letter": "c",
        "text": "3."
      },
      {
        "letter": "d",
        "text": "0."
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-17",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.4 Frames",
    "sourceNumber": 17,
    "prompt": "How many frames are displayed?\n\nimport javax.swing.*;\n\npublic class Test extends JFrame {\n  public static void main(String[] args) {\n    JFrame f1 = new Test();\n    JFrame f2 = new Test();\n    JFrame f3 = new Test();\n    f1.setVisible(true);\n    f2.setVisible(true);\n    f3.setVisible(true);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "1."
      },
      {
        "letter": "b",
        "text": "2."
      },
      {
        "letter": "c",
        "text": "3."
      },
      {
        "letter": "d",
        "text": "0."
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-18",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.4 Frames",
    "sourceNumber": 18,
    "prompt": "Which of the following statements is for terminating the program when closing the frame?",
    "options": [
      {
        "letter": "a",
        "text": "frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)"
      },
      {
        "letter": "b",
        "text": "frame.setDefaultCloseOperation(null)"
      },
      {
        "letter": "c",
        "text": "frame.setDefaultCloseOperation(JFrame.STOP_ON_CLOSE)"
      },
      {
        "letter": "d",
        "text": "frame.setDefaultCloseOperation(JFrame.TERMINATE_ON_CLOSE)"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-19",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.4 Frames",
    "sourceNumber": 19,
    "prompt": "Which of the following statements is for placing the frame's upper left corner to (200, 100)?",
    "options": [
      {
        "letter": "a",
        "text": "frame.setLocation(100, 100)"
      },
      {
        "letter": "b",
        "text": "frame.setLocation(100, 200)"
      },
      {
        "letter": "c",
        "text": "frame.setLocation(200, 100)"
      },
      {
        "letter": "d",
        "text": "frame.setLocation(200, 200)"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-20",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.4 Frames",
    "sourceNumber": 24,
    "prompt": "Analyze the following code:\n\nimport javax.swing.*;\n\npublic class Test1 extends JFrame {\n  public Test1() {\n    JButton jbt1 = new JButton(\"OK\");\n    add(jbt1);\n    jbt1 = new JButton(\"Not OK\");\n  }\n  \n  public static void main(String[] args) {\n    JFrame frame = new Test1();\n    frame.setSize(300, 300);\n    frame.setLocationRelativeTo(null);\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setVisible(true);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "The program displays nothing."
      },
      {
        "letter": "b",
        "text": "The program displays a button with text OK."
      },
      {
        "letter": "c",
        "text": "The program displays a button with text Not OK."
      },
      {
        "letter": "d",
        "text": "The program displays a button with text OK and another buttoj with text Not OK."
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch12-21",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.5 Layout Managers",
    "sourceNumber": 20,
    "prompt": "What layout manager should you use so that every component occupies the same size in the container?",
    "options": [
      {
        "letter": "a",
        "text": "a FlowLayout"
      },
      {
        "letter": "b",
        "text": "a GridLayout"
      },
      {
        "letter": "c",
        "text": "a BorderLayout"
      },
      {
        "letter": "d",
        "text": "any layout"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch12-22",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.5 Layout Managers",
    "sourceNumber": 21,
    "prompt": "What should you use to position a Button within an application Frame so that the size of the Button is NOT affected by the Frame size?",
    "options": [
      {
        "letter": "a",
        "text": "a FlowLayout"
      },
      {
        "letter": "b",
        "text": "a GridLayout"
      },
      {
        "letter": "c",
        "text": "the center area of a BorderLayout"
      },
      {
        "letter": "d",
        "text": "the East or West area of a BorderLayout"
      },
      {
        "letter": "e",
        "text": "the North or South area of a BorderLayout"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-23",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.5 Layout Managers",
    "sourceNumber": 22,
    "prompt": "Suppose a JFrame uses the GridLayout(2, 2). If you add six buttons to the frame, how many columns are displayed?",
    "options": [
      {
        "letter": "a",
        "text": "1"
      },
      {
        "letter": "b",
        "text": "2"
      },
      {
        "letter": "c",
        "text": "3"
      },
      {
        "letter": "d",
        "text": "4"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-24",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.5 Layout Managers",
    "sourceNumber": 23,
    "prompt": "Suppose a JFrame uses the GridLayout(0, 2). If you add six buttons to the frame, how many columns are displayed?",
    "options": [
      {
        "letter": "a",
        "text": "1"
      },
      {
        "letter": "b",
        "text": "2"
      },
      {
        "letter": "c",
        "text": "3"
      },
      {
        "letter": "d",
        "text": "4"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch12-25",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.5 Layout Managers",
    "sourceNumber": 24,
    "prompt": "Suppose a JFrame uses the GridLayout(2, 0). If you add six buttons to the frame, how many columns are displayed?",
    "options": [
      {
        "letter": "a",
        "text": "1"
      },
      {
        "letter": "b",
        "text": "2"
      },
      {
        "letter": "c",
        "text": "3"
      },
      {
        "letter": "d",
        "text": "4"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-26",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.5 Layout Managers",
    "sourceNumber": 25,
    "prompt": "To set a FlowLayout in panel jp, you can use the method __________.",
    "options": [
      {
        "letter": "a",
        "text": "jp.setLayout(new FlowLayout());"
      },
      {
        "letter": "b",
        "text": "jp.setLayout(new FlowLayout(FlowLayout.CENTER));"
      },
      {
        "letter": "c",
        "text": "jp.setLayout(new FlowLayout(FlowLayout.center));"
      },
      {
        "letter": "d",
        "text": "jp.setLayout(FlowLayout());"
      }
    ],
    "correct": [
      "a",
      "b"
    ]
  },
  {
    "id": "ch12-27",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.5 Layout Managers",
    "sourceNumber": 26,
    "prompt": "The default layout out of a contentPane in a JFrame is __________.",
    "options": [
      {
        "letter": "a",
        "text": "FlowLayout"
      },
      {
        "letter": "b",
        "text": "GridLayout"
      },
      {
        "letter": "c",
        "text": "BorderLayout"
      },
      {
        "letter": "d",
        "text": "None"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-28",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.6 Using Panels as Sub-Containers",
    "sourceNumber": 33,
    "prompt": "The default layout out of a JPanel is __________.",
    "options": [
      {
        "letter": "a",
        "text": "FlowLayout"
      },
      {
        "letter": "b",
        "text": "GridLayout"
      },
      {
        "letter": "c",
        "text": "BorderLayout"
      },
      {
        "letter": "d",
        "text": "None"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-29",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.6 Using Panels as Sub-Containers",
    "sourceNumber": 34,
    "prompt": "To create a JPanel of the BorderLayout, use ______________.",
    "options": [
      {
        "letter": "a",
        "text": "JPanel p = new JPanel()"
      },
      {
        "letter": "b",
        "text": "JPanel p = new JPanel(BorderLayout());"
      },
      {
        "letter": "c",
        "text": "JPanel p = new JPanel(new BorderLayout());"
      },
      {
        "letter": "d",
        "text": "JPanel p = new JPanel().setLayout(new BorderLayout());"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-30",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.6 Using Panels as Sub-Containers",
    "sourceNumber": 35,
    "prompt": "To add a component c to a JPanel p, use _________.",
    "options": [
      {
        "letter": "a",
        "text": "p.add(c)"
      },
      {
        "letter": "b",
        "text": "p.getContentPane(c)"
      },
      {
        "letter": "c",
        "text": "p.insert(c)"
      },
      {
        "letter": "d",
        "text": "p.append(c)"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-31",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.7 The Color Class",
    "sourceNumber": 27,
    "prompt": "_____________ creates a color object.",
    "options": [
      {
        "letter": "a",
        "text": "new Color(0, 0, 0)"
      },
      {
        "letter": "b",
        "text": "new Color(0, 266, 0)"
      },
      {
        "letter": "c",
        "text": "new Color(255, 255, 255)"
      },
      {
        "letter": "d",
        "text": "new Color(1, 2, 3)"
      }
    ],
    "correct": [
      "a",
      "c",
      "d"
    ]
  },
  {
    "id": "ch12-32",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.7 The Color Class",
    "sourceNumber": 28,
    "prompt": "The method __________ sets the background color to yellow in JFrame f.",
    "options": [
      {
        "letter": "a",
        "text": "setBackground(Color.yellow)"
      },
      {
        "letter": "b",
        "text": "f.setBackground(Color.YELLOW)"
      },
      {
        "letter": "c",
        "text": "f.setBackground(Color.yellow)"
      },
      {
        "letter": "d",
        "text": "setBackground(Color.YELLOW)"
      },
      {
        "letter": "e",
        "text": "f.setBackGround(Color.yellow)"
      }
    ],
    "correct": [
      "b",
      "c"
    ]
  },
  {
    "id": "ch12-33",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.7 The Color Class",
    "sourceNumber": 29,
    "prompt": "The method __________ sets the foreground color to yellow in JFrame f.",
    "options": [
      {
        "letter": "a",
        "text": "setForeground(Color.yellow)"
      },
      {
        "letter": "b",
        "text": "f.setForeground(Color.YELLOW)"
      },
      {
        "letter": "c",
        "text": "f.setForeground(Color.yellow)"
      },
      {
        "letter": "d",
        "text": "setForeground(Color.YELLOW)"
      },
      {
        "letter": "e",
        "text": "f.setForeGround(Color.yellow)"
      }
    ],
    "correct": [
      "b",
      "c"
    ]
  },
  {
    "id": "ch12-34",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.7 The Color Class",
    "sourceNumber": 30,
    "prompt": "Which color is the darkest?",
    "options": [
      {
        "letter": "a",
        "text": "new Color(0, 0, 0)"
      },
      {
        "letter": "b",
        "text": "new Color(10, 0, 0)"
      },
      {
        "letter": "c",
        "text": "new Color(20, 0, 0)"
      },
      {
        "letter": "d",
        "text": "new Color(30, 0, 0)"
      },
      {
        "letter": "e",
        "text": "f.setForeGround(Color.yellow)"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-35",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.8 The Font Class",
    "sourceNumber": 31,
    "prompt": "The method __________ sets the font (Helvetica, 20-point bold) in component C.",
    "options": [
      {
        "letter": "a",
        "text": "c.setFont(new Font(\"Helvetica\", Font.bold, 20))"
      },
      {
        "letter": "b",
        "text": "c.setFont(new Font(\"helvetica\", BOLD, 20))"
      },
      {
        "letter": "c",
        "text": "c.setFont(Font(\"Helvetica\", Font.BOLD, 20))"
      },
      {
        "letter": "d",
        "text": "c.setFont(new Font(\"Helvetica\", Font.BOLD, 20))"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch12-36",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.8 The Font Class",
    "sourceNumber": 32,
    "prompt": "To specify a font to be bold and italic, use the font style value _________",
    "options": [
      {
        "letter": "a",
        "text": "Font.PLAIN"
      },
      {
        "letter": "b",
        "text": "Font.BOLD"
      },
      {
        "letter": "c",
        "text": "Font.ITALIC"
      },
      {
        "letter": "d",
        "text": "Font.BOLD + Font.ITALIC"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch12-37",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.9 Common Features of Swing GUI Components",
    "sourceNumber": 36,
    "prompt": "Can you use the setBackground method to set a back ground color for _____?",
    "options": [
      {
        "letter": "a",
        "text": "Component"
      },
      {
        "letter": "b",
        "text": "Container"
      },
      {
        "letter": "c",
        "text": "JComponent"
      },
      {
        "letter": "d",
        "text": "JButton"
      },
      {
        "letter": "e",
        "text": "JLabel"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "id": "ch12-38",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.9 Common Features of Swing GUI Components",
    "sourceNumber": 37,
    "prompt": "Can you use the getWidth method to get a width for _____?",
    "options": [
      {
        "letter": "a",
        "text": "Component"
      },
      {
        "letter": "b",
        "text": "Container"
      },
      {
        "letter": "c",
        "text": "JComponent"
      },
      {
        "letter": "d",
        "text": "JButton"
      },
      {
        "letter": "e",
        "text": "JLabel"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "id": "ch12-39",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.9 Common Features of Swing GUI Components",
    "sourceNumber": 38,
    "prompt": "Can you use the setBorder method to set a border for _____?",
    "options": [
      {
        "letter": "a",
        "text": "Component"
      },
      {
        "letter": "b",
        "text": "Container"
      },
      {
        "letter": "c",
        "text": "JComponent"
      },
      {
        "letter": "d",
        "text": "JButton"
      },
      {
        "letter": "e",
        "text": "JLabel"
      }
    ],
    "correct": [
      "c",
      "d",
      "e"
    ]
  },
  {
    "id": "ch12-40",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.9 Common Features of Swing GUI Components",
    "sourceNumber": 39,
    "prompt": "Can you use the setToolTip method to set a tool tip for _____?",
    "options": [
      {
        "letter": "a",
        "text": "Component"
      },
      {
        "letter": "b",
        "text": "Container"
      },
      {
        "letter": "c",
        "text": "JComponent"
      },
      {
        "letter": "d",
        "text": "JButton"
      },
      {
        "letter": "e",
        "text": "JLabel"
      }
    ],
    "correct": [
      "c",
      "d",
      "e"
    ]
  },
  {
    "id": "ch12-41",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.9 Common Features of Swing GUI Components",
    "sourceNumber": 40,
    "prompt": "You can use methods ___________ on any instance of java.awt.Component.",
    "options": [
      {
        "letter": "a",
        "text": "setBackground"
      },
      {
        "letter": "b",
        "text": "getBackground"
      },
      {
        "letter": "c",
        "text": "getWidth"
      },
      {
        "letter": "d",
        "text": "getHeight"
      },
      {
        "letter": "e",
        "text": "setBorder"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch12-42",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.9 Common Features of Swing GUI Components",
    "sourceNumber": 41,
    "prompt": "Analyze the following code:\n\nimport javax.swing.*;\n\npublic class Test extends JFrame  {\n  private JButton jbtOK = new JButton(\"OK\");\n  \n  public static void main(String[] args) {\n    // Create a frame and set its properties\n    JFrame frame = new Test();\n    frame.setTitle(\"Logic Error\");\n    frame.setSize(200, 100);\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setVisible(true);\n  }\n\n  public Test() {\n    jbtOK.setToolTipText(\"This is a button\");\n    add(new JButton(\"OK\"));\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "The tool tip text is displayed when you move the mouse on the button."
      },
      {
        "letter": "b",
        "text": "The tool tip text will be displayed if you replace add(new JButton(\"OK\")) with add(jbtOK)."
      },
      {
        "letter": "c",
        "text": "The tool tip text will be displayed if you swap the two lines in the Test constructor."
      },
      {
        "letter": "d",
        "text": "The tool tip text will be displayed if you replace add(new JButton(\"OK\")) with add(jbtOK = new JButton(\"OK\"))."
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch12-43",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.9 Common Features of Swing GUI Components",
    "sourceNumber": 42,
    "prompt": "You can use methods ___________ on any instance of java.awt.Component.",
    "options": [
      {
        "letter": "a",
        "text": "setForeground"
      },
      {
        "letter": "b",
        "text": "setBackground"
      },
      {
        "letter": "c",
        "text": "setFont"
      },
      {
        "letter": "d",
        "text": "getFont"
      },
      {
        "letter": "e",
        "text": "setLayout"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch12-44",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.9 Common Features of Swing GUI Components",
    "sourceNumber": 43,
    "prompt": "Show the output of the following code?\n\nimport javax.swing.*;\n\npublic class Test {\n  public static void main(String[] args) {\n    JButton jbtOK = new JButton(\"OK\");\n    System.out.print(jbtOK.isVisible() + \", \");\n\n    JFrame frame = new JFrame();\n    System.out.println(frame.isVisible());\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "true, true"
      },
      {
        "letter": "b",
        "text": "true, false"
      },
      {
        "letter": "c",
        "text": "false, true"
      },
      {
        "letter": "d",
        "text": "false, false"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch12-45",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.10 Image Icons",
    "sourceNumber": 44,
    "prompt": "To create an image icon for a file in c:\\book\\image\\icon, use ____________.",
    "options": [
      {
        "letter": "a",
        "text": "new ImageIcon(\"c:\\book\\image\\icon\");"
      },
      {
        "letter": "b",
        "text": "new ImageIcon('c:\\book\\image\\icon');"
      },
      {
        "letter": "c",
        "text": "new ImageIcon(\"c:\\\\book\\\\image\\\\icon\");"
      },
      {
        "letter": "d",
        "text": "new ImageIcon('c:\\\\book\\\\image\\\\icon');"
      },
      {
        "letter": "e",
        "text": "new ImageIcon(\"c:\\\\book\\image\\\\icon\") if the c:\\book is in the class path."
      }
    ],
    "correct": [
      "c",
      "e"
    ]
  },
  {
    "id": "ch12-46",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.11 JButton",
    "sourceNumber": 1,
    "prompt": "Which of the following is true?",
    "options": [
      {
        "letter": "a",
        "text": "JButton inherits from javax.swing.AbstractButton."
      },
      {
        "letter": "b",
        "text": "You can create a JButton by specifying an icon and text."
      },
      {
        "letter": "c",
        "text": "You can create a JButton by specifying an icon."
      },
      {
        "letter": "d",
        "text": "You can create a JButton by a text."
      },
      {
        "letter": "e",
        "text": "You can create a JButton using its default constructor."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "id": "ch12-47",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.11 JButton",
    "sourceNumber": 2,
    "prompt": "The method __________ gets the text (or caption) of the button jbt.",
    "options": [
      {
        "letter": "a",
        "text": "jbt.text()"
      },
      {
        "letter": "b",
        "text": "jbt.getText()"
      },
      {
        "letter": "c",
        "text": "jbt.findText()"
      },
      {
        "letter": "d",
        "text": "jbt.retrieveText()."
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch12-48",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.11 JButton",
    "sourceNumber": 3,
    "prompt": "The method __________ creates a IconImage for file c:\\image\\us.gif.",
    "options": [
      {
        "letter": "a",
        "text": "new ImageIcon(\"c:\\image\\us.gif\");"
      },
      {
        "letter": "b",
        "text": "new Icon(\"c:\\image\\us.gif\");"
      },
      {
        "letter": "c",
        "text": "new ImageIcon(\"c:\\\\image\\\\us.gif\");"
      },
      {
        "letter": "d",
        "text": "new Icon(\"c:\\\\image\\\\us.gif\");"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-49",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.11 JButton",
    "sourceNumber": 4,
    "prompt": "Which of the following are valid methods on the button jbt?",
    "options": [
      {
        "letter": "a",
        "text": "jbt.setMnemonic(\"A\");"
      },
      {
        "letter": "b",
        "text": "jbt.setMnemonic('A');"
      },
      {
        "letter": "c",
        "text": "jbt.setIconTextGap(50);"
      },
      {
        "letter": "d",
        "text": "jbt.setTextGap(50);"
      }
    ],
    "correct": [
      "b",
      "c"
    ]
  },
  {
    "id": "ch12-50",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.11 JButton",
    "sourceNumber": 5,
    "prompt": "The method __________ specifies that the text and icon are horizontally aligned to the right in the button jbt.",
    "options": [
      {
        "letter": "a",
        "text": "jbt.setVerticalTextPosition(JButton.LEFT)"
      },
      {
        "letter": "b",
        "text": "jbt.setHorizontalTextPosition(JButton.LEFT)"
      },
      {
        "letter": "c",
        "text": "jbt.setHorizontalTextPosition(JButton.RIGHT)"
      },
      {
        "letter": "d",
        "text": "jbt.setHorizontalAlignment(JButton.RIGHT)"
      },
      {
        "letter": "e",
        "text": "jbt.setHorizontalAlignment(JButton.LEFT)"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch12-51",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.11 JButton",
    "sourceNumber": 6,
    "prompt": "The method __________ specifies that the text is placed on the right of the icon in the button jbt.",
    "options": [
      {
        "letter": "a",
        "text": "jbt.setVerticalTextPosition(JButton.LEFT)"
      },
      {
        "letter": "b",
        "text": "jbt.setHorizontalTextPosition(JButton.LEFT)"
      },
      {
        "letter": "c",
        "text": "jbt.setHorizontalTextPosition(JButton.RIGHT)"
      },
      {
        "letter": "d",
        "text": "jbt.setHorizontalAlignment(JButton.RIGHT)"
      },
      {
        "letter": "e",
        "text": "jbt.setHorizontalAlignment(JButton.LEFT)"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-52",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.11 JButton",
    "sourceNumber": 7,
    "prompt": "Analyze the following code:\n\nimport javax.swing.*;\nimport java.awt.*;\n\npublic class Test extends JFrame  {\n  public Test() {\n    ImageIcon usIcon = new ImageIcon(\"image/usIcon.gif\");\n    JButton jbt1 = new JButton(usIcon);\n    JButton jbt2 = new JButton(usIcon);\n\n    JPanel p1 = new JPanel();\n    p1.add(jbt1);\n\n    JPanel p2 = new JPanel();\n    p2.add(jbt2);\n\n    JPanel p3 = new JPanel();\n    p2.add(jbt1);\n\n    add(p1, BorderLayout.NORTH);\n    add(p2, BorderLayout.SOUTH);\n    add(p3, BorderLayout.CENTER);\n  }\n\n  public static void main(String[] args) {\n    // Create a frame and set its properties\n    JFrame frame = new Test();\n    frame.setSize(200, 100);\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setVisible(true);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "Two buttons displayed with the same icon."
      },
      {
        "letter": "b",
        "text": "Three buttons displayed with the same icon."
      },
      {
        "letter": "c",
        "text": "Only jbt1 displays the icon and jbt2 does not display the icon."
      },
      {
        "letter": "d",
        "text": "Two buttons displayed with different icons."
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-53",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.11 JButton",
    "sourceNumber": 8,
    "prompt": "Analyze the following code:\n\nimport javax.swing.*;\nimport java.awt.*;\n\npublic class Test extends JFrame  {\n  public Test() {\n    setLayout(new FlowLayout());\n    add(new JButton(\"Java\"));\n    add(new JButton(\"Java\"));\n    add(new JButton(\"Java\"));\n    add(new JButton(\"Java\"));\n  }\n\n  public static void main(String[] args) {\n    // Create a frame and set its properties\n    JFrame frame = new Test();\n    frame.setSize(200, 100);\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setVisible(true);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "One button is displayed with the text \"Java\"."
      },
      {
        "letter": "b",
        "text": "Two buttons are displayed with the same text \"Java\"."
      },
      {
        "letter": "c",
        "text": "Three buttons are displayed with the same text \"Java\"."
      },
      {
        "letter": "d",
        "text": "Four buttons are displayed with the same text \"Java\"."
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch12-54",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.11 JButton",
    "sourceNumber": 9,
    "prompt": "Analyze the following code:\n\nimport javax.swing.*;\nimport javax.swing.border.*;\nimport java.awt.*;\n\npublic class Test extends JFrame  {\n  public Test() {\n    Border border = new TitledBorder(\"My button\");\n    JButton jbt1 = new JButton(\"OK\");\n    JButton jbt2 = new JButton(\"Cancel\");\n    jbt1.setBorder(border);\n    jbt2.setBorder(border);\n    add(jbt1, BorderLayout.NORTH);\n    add(jbt2, BorderLayout.SOUTH);\n  }\n\n  public static void main(String[] args) {\n    JFrame frame = new Test();\n    frame.setSize(200, 100);\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setVisible(true);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "Two buttons displayed with the same border."
      },
      {
        "letter": "b",
        "text": "Two buttons displayed, but only one button has the border."
      },
      {
        "letter": "c",
        "text": "The program has a compile error because you assign new TitledBorder(\"My button\") to a variable of the Border type."
      },
      {
        "letter": "d",
        "text": "The program has a runtime error because you cannot set a border on a button."
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-55",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.12 JCheckBox",
    "sourceNumber": 10,
    "prompt": "_________ checks whether the JCheckBox jchk is selected.",
    "options": [
      {
        "letter": "a",
        "text": "jchk.getSelected()"
      },
      {
        "letter": "b",
        "text": "jchk.selected()"
      },
      {
        "letter": "c",
        "text": "jchk.isSelected()."
      },
      {
        "letter": "d",
        "text": "jchk.select()"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-56",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.12 JCheckBox",
    "sourceNumber": 11,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "JCheckBox inherits from javax.swing.AbstractButton."
      },
      {
        "letter": "b",
        "text": "All the methods in JCheckBox are also in JButton."
      },
      {
        "letter": "c",
        "text": "You can set a mnemonic for a JCheckBox."
      },
      {
        "letter": "d",
        "text": "You can use an icon on JCheckBox."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch12-57",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.13 JRadioButton",
    "sourceNumber": 13,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "JRadioButton inherits from javax.swing.AbstractButton."
      },
      {
        "letter": "b",
        "text": "All the methods in JRadioButton are also in JButton."
      },
      {
        "letter": "c",
        "text": "You can set a mnemonic for a JCheckBox."
      },
      {
        "letter": "d",
        "text": "You can use an icon on JRadioButton."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch12-58",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.13 JRadioButton",
    "sourceNumber": 14,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "You can create an instance of ButtonGroup and add radio button to the instance to group the buttons."
      },
      {
        "letter": "b",
        "text": "ButtonGroup can be added to a container."
      },
      {
        "letter": "c",
        "text": "To check whether a radio button jrb is selected, use jrb.isSelected()."
      },
      {
        "letter": "d",
        "text": "By default, when a radio button is created, the radio button is not selected."
      }
    ],
    "correct": [
      "a",
      "c",
      "d"
    ]
  },
  {
    "id": "ch12-59",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.14 Labels",
    "sourceNumber": 16,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "All the methods in JLabel are inherited from javax.swing.AbstractButton."
      },
      {
        "letter": "b",
        "text": "You can set a mnemonic key in a JLabel."
      },
      {
        "letter": "c",
        "text": "You can create a label with both text and icon."
      },
      {
        "letter": "d",
        "text": "You can create a label with an icon."
      }
    ],
    "correct": [
      "c",
      "d"
    ]
  },
  {
    "id": "ch12-60",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.14 Labels",
    "sourceNumber": 17,
    "prompt": "The method __________ gets the text (or caption) of the label jlbl.",
    "options": [
      {
        "letter": "a",
        "text": "jlbl.text()"
      },
      {
        "letter": "b",
        "text": "jlbl.getText()"
      },
      {
        "letter": "c",
        "text": "jlbl.findText()"
      },
      {
        "letter": "d",
        "text": "jlbl.retrieveText()."
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch12-61",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.14 Labels",
    "sourceNumber": 18,
    "prompt": "Which of the following are valid methods on the label jlbl?",
    "options": [
      {
        "letter": "a",
        "text": "jlbl.setMnemonic(\"A\");"
      },
      {
        "letter": "b",
        "text": "jlbl.setMnemonic('A');"
      },
      {
        "letter": "c",
        "text": "jlbl.setIconTextGap(50);"
      },
      {
        "letter": "d",
        "text": "jlbl.setTextGap(50);"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-62",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.14 Labels",
    "sourceNumber": 19,
    "prompt": "The method __________ specifies that the text and icon are horizontally aligned to the right in the label jlbl.",
    "options": [
      {
        "letter": "a",
        "text": "jlbl.setVerticalTextPosition(JButton.LEFT)"
      },
      {
        "letter": "b",
        "text": "jlbl.setHorizontalTextPosition(JButton.LEFT)"
      },
      {
        "letter": "c",
        "text": "jlbl.setHorizontalTextPosition(JButton.RIGHT)"
      },
      {
        "letter": "d",
        "text": "jlbl.setHorizontalAlignment(JButton.RIGHT)"
      },
      {
        "letter": "e",
        "text": "jlbl.setHorizontalAlignment(JButton.LEFT)"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch12-63",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.14 Labels",
    "sourceNumber": 20,
    "prompt": "The method __________ specifies that the text is placed on the right of the icon in the label jlbl.",
    "options": [
      {
        "letter": "a",
        "text": "jlbl.setVerticalTextPosition(JButton.LEFT)"
      },
      {
        "letter": "b",
        "text": "jlbl.setHorizontalTextPosition(JButton.LEFT)"
      },
      {
        "letter": "c",
        "text": "jlbl.setHorizontalTextPosition(JButton.RIGHT)"
      },
      {
        "letter": "d",
        "text": "jlbl.setHorizontalAlignment(JButton.RIGHT)"
      },
      {
        "letter": "e",
        "text": "jlbl.setHorizontalAlignment(JButton.LEFT)"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch12-64",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.14 Labels",
    "sourceNumber": 21,
    "prompt": "The method __________ assigns the name Result to the Text of variable jlbl.",
    "options": [
      {
        "letter": "a",
        "text": "jlbl.setText(\"Result\")"
      },
      {
        "letter": "b",
        "text": "jlbl.newText(\"Result\")"
      },
      {
        "letter": "c",
        "text": "jlbl.text(\"Result\")"
      },
      {
        "letter": "d",
        "text": "jlbl.findText()"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch12-65",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.15 Text Fields",
    "sourceNumber": 22,
    "prompt": "___________ can be used to enter or display a string.",
    "options": [
      {
        "letter": "a",
        "text": "A label"
      },
      {
        "letter": "b",
        "text": "A button"
      },
      {
        "letter": "c",
        "text": "A check box"
      },
      {
        "letter": "d",
        "text": "A radio button"
      },
      {
        "letter": "e",
        "text": "A text field"
      }
    ],
    "correct": [
      "e"
    ]
  },
  {
    "id": "ch12-66",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.15 Text Fields",
    "sourceNumber": 23,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "You can specify a horizontal text alignment in a text field."
      },
      {
        "letter": "b",
        "text": "You can specify the number of columns in a text field."
      },
      {
        "letter": "c",
        "text": "You can disable editing on a text field."
      },
      {
        "letter": "d",
        "text": "You can create a text field with a specified text."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch12-67",
    "chapter": 12,
    "chapterTitle": "Chapter 12 GUI Basics",
    "section": "Section 12.15 Text Fields",
    "sourceNumber": 24,
    "prompt": "The method __________ gets the contents of the text field jtf.",
    "options": [
      {
        "letter": "a",
        "text": "jtf.getText(s)"
      },
      {
        "letter": "b",
        "text": "jtf.getText()"
      },
      {
        "letter": "c",
        "text": "jtf.getString()"
      },
      {
        "letter": "d",
        "text": "jtf.findString()"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch13-01",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.2 Section 13.3 The Graphics Class",
    "sourceNumber": 1,
    "prompt": "The coordinate of the upper-left corner of a frame is __________.",
    "options": [
      {
        "letter": "a",
        "text": "(0, 0)"
      },
      {
        "letter": "b",
        "text": "(25, 25)"
      },
      {
        "letter": "c",
        "text": "(100, 100)"
      },
      {
        "letter": "d",
        "text": "(10, 10)"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch13-02",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.2 Section 13.3 The Graphics Class",
    "sourceNumber": 2,
    "prompt": "Suppose a button jbt is placed in a frame, the coordinate of the button within the content pane of the frame is _______.",
    "options": [
      {
        "letter": "a",
        "text": "(jbt.getX(), jbt.getY())"
      },
      {
        "letter": "b",
        "text": "(jbt.x, jbt.y)"
      },
      {
        "letter": "c",
        "text": "cannot be obtained"
      },
      {
        "letter": "d",
        "text": "(0, 0)"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch13-03",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.2 Section 13.3 The Graphics Class",
    "sourceNumber": 3,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "Each GUI component contains a Graphics object that can be obtained using getGraphics() method."
      },
      {
        "letter": "b",
        "text": "Once a GUI component is visible, getGraphics() returns the object."
      },
      {
        "letter": "c",
        "text": "If a GUI component is not visible, getGraphics() returns null."
      },
      {
        "letter": "d",
        "text": "The Graphics object is automatically created for each visible GUI component."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch13-04",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.2 Section 13.3 The Graphics Class",
    "sourceNumber": 4,
    "prompt": "The header for the paintComponent method is ________________.",
    "options": [
      {
        "letter": "a",
        "text": "private void paintComponent(Graphics g)"
      },
      {
        "letter": "b",
        "text": "protected void paintComponent(Graphics g)"
      },
      {
        "letter": "c",
        "text": "public void paintComponent(Graphics g)"
      },
      {
        "letter": "d",
        "text": "protected void paintComponent()"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch13-05",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.2 Section 13.3 The Graphics Class",
    "sourceNumber": 5,
    "prompt": "You should override the __________ method to draw things on a Swing component.",
    "options": [
      {
        "letter": "a",
        "text": "repaint()"
      },
      {
        "letter": "b",
        "text": "update()"
      },
      {
        "letter": "c",
        "text": "paintComponent()"
      },
      {
        "letter": "d",
        "text": "init()"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch13-06",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.2 Section 13.3 The Graphics Class",
    "sourceNumber": 6,
    "prompt": "You can draw graphics on any GUI components.",
    "options": [
      {
        "letter": "a",
        "text": "true"
      },
      {
        "letter": "b",
        "text": "false"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch13-07",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.2 Section 13.3 The Graphics Class",
    "sourceNumber": 7,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "You may create a Graphics object using new Graphics()."
      },
      {
        "letter": "b",
        "text": "Whenever a GUI component is displayed, its Graphics object is automatically created."
      },
      {
        "letter": "c",
        "text": "The paintComponent method is automatically invoked by the JVM. You should never invoke it directly."
      },
      {
        "letter": "d",
        "text": "Invoking repaint() causes paintComponent to be invoked by the JVM."
      }
    ],
    "correct": [
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch13-08",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.2 Section 13.3 The Graphics Class",
    "sourceNumber": 8,
    "prompt": "To draw graphics, it is better to define a class that extends ________ and override the paintComponent method.",
    "options": [
      {
        "letter": "a",
        "text": "JLabel"
      },
      {
        "letter": "b",
        "text": "JButton"
      },
      {
        "letter": "c",
        "text": "JPanel"
      },
      {
        "letter": "d",
        "text": "JComponent"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch13-09",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.2 Section 13.3 The Graphics Class",
    "sourceNumber": 9,
    "prompt": "Analyze the following code.\n\nimport java.awt.*;\nimport javax.swing.*;\n\npublic class Test  {\n  public static void main(String[] args) {\n    JFrame frame = new JFrame(\"My Frame\");\n    frame.add(new MyDrawing(\"Welcome to Java!\"));\n    frame.setSize(300, 300);\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setVisible(true);\n    frame.setVisible(true);\n  }\n}\n\nclass MyDrawing extends JPanel {\n  String message;\n\n  public MyDrawing(String message) {\n    this.message = message;\n  }\n\n  public void paintcomponent(Graphics g) {\n    super.paintComponent(g);\n\n    g.drawString(message, 20 ,20);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "The program runs fine and displays Welcome to Java!"
      },
      {
        "letter": "b",
        "text": "The program has a compile error because the paintcomponent should be spelled as paintComponent."
      },
      {
        "letter": "c",
        "text": "The program has a runtime error because the paintcomponent should be spelled as paintComponent."
      },
      {
        "letter": "d",
        "text": "The program runs, but it does not display the message."
      },
      {
        "letter": "e",
        "text": "It is a runtime error to invoke the setVisible(true) twice."
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch13-10",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.2 Section 13.3 The Graphics Class",
    "sourceNumber": 10,
    "prompt": "Analyze the following code.\n\nimport java.awt.*;\nimport javax.swing.*;\n\npublic class Test extends JFrame  {\n  public Test() {\n    add(new MyDrawing(\"Welcome to Java!\"));\n  }\n\n  public static void main(String[] args) {\n    JFrame frame = new JFrame();\n    frame.setSize(300, 300);\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setVisible(true);\n  }\n}\n\nclass MyDrawing extends JPanel {\n  String message;\n\n  public MyDrawing(String message) {\n    this.message = message;\n  }\n\n  public void paintComponent(Graphics g) {\n    super.paintComponent(g);\n\n    g.drawString(message, 20 ,20);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "The program runs fine and displays Welcome to Java!"
      },
      {
        "letter": "b",
        "text": "The program would display Welcome to Java! if new JFrame() is replaced by Test()."
      },
      {
        "letter": "c",
        "text": "The program would display Welcome to Java! if new JFrame() is replaced by new Test()."
      },
      {
        "letter": "d",
        "text": "The program would display Welcome to Java! if new JFrame() is replaced by new Test(\"My Frame\")."
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch13-11",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.2 Section 13.3 The Graphics Class",
    "sourceNumber": 11,
    "prompt": "Analyze the following code.\n\nimport java.awt.*;\nimport java.awt.event.*;\nimport javax.swing.*;\n\npublic class Test1 extends JFrame {\n  public Test1() {\n    add(new MyCanvas());\n  }\n\n  public static void main(String[] args) {\n    JFrame frame = new Test1();\n    frame.setSize(300, 300);\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setVisible(true);\n  }\n}\n\nclass MyCanvas extends JPanel {\n  private String message;\n\n  public void setMessage(String message) {\n    this.message = message;\n  }\n\n  public void paintComponent(Graphics g) {\n    super.paintComponent(g);\n\n    g.drawString(message, 20, 20);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "The program runs fine and displays nothing since you have not set a string value."
      },
      {
        "letter": "b",
        "text": "The program would display Welcome to Java! if you replace new MyCanvas() by new MyCanvas(\"Welcome to Java!\")."
      },
      {
        "letter": "c",
        "text": "The program has a compile error because new Test1() is assigned to frame."
      },
      {
        "letter": "d",
        "text": "The program has a NullPointerException since message is null when g.drawString(message, 20, 20) is executed."
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch13-12",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.3 Drawing Strings, Lines, rectangles, and Ovals",
    "sourceNumber": 12,
    "prompt": "Given a Graphics object g, to draw a line from the upper left corner to the bottom right corner, you use __________.",
    "options": [
      {
        "letter": "a",
        "text": "g.drawLine(0, 0, 100, 100)"
      },
      {
        "letter": "b",
        "text": "g.drawLine(0, 0, getWidth(), getHeight())"
      },
      {
        "letter": "c",
        "text": "g.drawLine(0, 0, getHeight(), getHeight())"
      },
      {
        "letter": "d",
        "text": "g.drawLine(0, 0, getWidth(), getWidth())"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch13-13",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.3 Drawing Strings, Lines, rectangles, and Ovals",
    "sourceNumber": 14,
    "prompt": "Given a Graphics object g, to draw an outline of a rectangle of width 20 and height 50 with the upper-left corner at (20, 20), you use __________.",
    "options": [
      {
        "letter": "a",
        "text": "g.drawRect(20, 50, 20, 20)"
      },
      {
        "letter": "b",
        "text": "g.drawRectFill(20, 20, 20, 50)"
      },
      {
        "letter": "c",
        "text": "g.drawRect(20, 20, 20, 50)"
      },
      {
        "letter": "d",
        "text": "g.drawRectFill(20, 50, 20, 20)"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch13-14",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.3 Drawing Strings, Lines, rectangles, and Ovals",
    "sourceNumber": 14,
    "prompt": "Given a Graphics object g, to draw an circle with radius 20 centered at (50, 50), you use __________.",
    "options": [
      {
        "letter": "a",
        "text": "g.drawOval(50, 50, 20, 20)"
      },
      {
        "letter": "b",
        "text": "g.drawOval(50, 50, 40, 40)"
      },
      {
        "letter": "c",
        "text": "g.drawOval(30, 30, 20, 20)"
      },
      {
        "letter": "d",
        "text": "g.drawOval(30, 30, 40, 40)"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch13-15",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.3 Drawing Strings, Lines, rectangles, and Ovals",
    "sourceNumber": 15,
    "prompt": "Given a Graphics object g, to draw a filled oval with width 20 and height 30 centered at (50, 50), you use __________.",
    "options": [
      {
        "letter": "a",
        "text": "g.fillOval(50, 50, 20, 30)"
      },
      {
        "letter": "b",
        "text": "g.fillOval(50, 50, 40, 30)"
      },
      {
        "letter": "c",
        "text": "g.fillOval(30, 30, 20, 30)"
      },
      {
        "letter": "d",
        "text": "g.fillOval(30, 30, 40, 30)"
      },
      {
        "letter": "e",
        "text": "g.fillOval(40, 35, 20, 30)"
      }
    ],
    "correct": [
      "e"
    ]
  },
  {
    "id": "ch13-16",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.3 Drawing Strings, Lines, rectangles, and Ovals",
    "sourceNumber": 16,
    "prompt": "Which of the following methods draws a filled 3D rectangle?",
    "options": [
      {
        "letter": "a",
        "text": "g.fill3DRect(50, 50, 20, 30)"
      },
      {
        "letter": "b",
        "text": "g.fill3DRect(50, 50, 20, 30, 1)"
      },
      {
        "letter": "c",
        "text": "g.fill3DRect(50, 50, 20, 30, true)"
      },
      {
        "letter": "d",
        "text": "g.fill3DRect(50, 50, 20, 30, false)"
      }
    ],
    "correct": [
      "c",
      "d"
    ]
  },
  {
    "id": "ch13-17",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.4 Case Study: The FigurePanel Class",
    "sourceNumber": 17,
    "prompt": "To repaint graphics, invoke __________ on a Swing component.",
    "options": [
      {
        "letter": "a",
        "text": "repaint()"
      },
      {
        "letter": "b",
        "text": "update()"
      },
      {
        "letter": "c",
        "text": "paintComponent()"
      },
      {
        "letter": "d",
        "text": "init()"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch13-18",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.5 Drawing Arcs",
    "sourceNumber": 18,
    "prompt": "Given a Graphics object g, to draw a filled arc with radius 20 centered at (50, 50) and start angle 0 and spanning angle 90, you use __________.",
    "options": [
      {
        "letter": "a",
        "text": "g.fillArc(50, 50, 40, 40, 0, Math.toRadian(90))"
      },
      {
        "letter": "b",
        "text": "g.fillArc(50, 50, 40, 40, 0, 90)"
      },
      {
        "letter": "c",
        "text": "g.fillArc(30, 30, 40, 40, 0, Math.toRadian(90))"
      },
      {
        "letter": "d",
        "text": "g.fillArc(30, 30, 40, 40, 0, 90)"
      },
      {
        "letter": "e",
        "text": "g.fillArc(50, 50, 20, 20, 0, 90)"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch13-19",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.6 Drawing Polygons and Polylines",
    "sourceNumber": 19,
    "prompt": "Given a Graphics object g, to draw a polygon to connect points (3, 3), (4, 10), (10, 20), (2, 100), you use __________.",
    "options": [
      {
        "letter": "a",
        "text": "g.drawPolyline(new int[]{3, 4, 10, 2}, new int[]{3, 10, 20, 100}, 4)"
      },
      {
        "letter": "b",
        "text": "g.drawPolyline({3, 4, 10, 2}, {3, 10, 20, 100}, 4)"
      },
      {
        "letter": "c",
        "text": "g.drawPolygon(new int[]{3, 4, 10, 2}, new int[]{3, 10, 20, 100}, 4)"
      },
      {
        "letter": "d",
        "text": "g.drawPolygon({3, 4, 10, 2}, {3, 10, 20, 100}, 4)"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch13-20",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.6 Drawing Polygons and Polylines",
    "sourceNumber": 20,
    "prompt": "Given a Graphics object g, to draw a polyline to connect points (3, 3), (4, 10), (10, 20), (2, 100), you use __________.",
    "options": [
      {
        "letter": "a",
        "text": "g.drawPolyline(new int[]{3, 4, 10, 2}, new int[]{3, 10, 20, 100}, 4)"
      },
      {
        "letter": "b",
        "text": "g.drawPolyline({3, 4, 10, 2}, {3, 10, 20, 100}, 4)"
      },
      {
        "letter": "c",
        "text": "g.drawPolygon(new int[]{3, 4, 10, 2}, new int[]{3, 10, 20, 100}, 4)"
      },
      {
        "letter": "d",
        "text": "g.drawPolygon({3, 4, 10, 2}, {3, 10, 20, 100}, 4)"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch13-21",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.7 Centering Display Using the FontMetrics Class",
    "sourceNumber": 21,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "You can create a FontMetric using new FontMetrics()."
      },
      {
        "letter": "b",
        "text": "You can obtain a FontMetrics from a Font object using the getFontMetrics() method."
      },
      {
        "letter": "c",
        "text": "A font determines the font metrics."
      },
      {
        "letter": "d",
        "text": "You can obtain the leading, ascent, descent, and height for a font from a FontMetrics object."
      }
    ],
    "correct": [
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch13-22",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.7 Centering Display Using the FontMetrics Class",
    "sourceNumber": 22,
    "prompt": "Invoking __________ returns the width of the string in a FontMetrics object fm.",
    "options": [
      {
        "letter": "a",
        "text": "getLength(s)"
      },
      {
        "letter": "b",
        "text": "fm.getHeight(s)"
      },
      {
        "letter": "c",
        "text": "fm.stringWidth(s)"
      },
      {
        "letter": "d",
        "text": "fm.getWidth(s)"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch13-23",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.7 Centering Display Using the FontMetrics Class",
    "sourceNumber": 23,
    "prompt": "The following are the methods to obtain font properties in a FontMetrics object fm.",
    "options": [
      {
        "letter": "a",
        "text": "fm.getAscent()"
      },
      {
        "letter": "b",
        "text": "fm.getDescent()"
      },
      {
        "letter": "c",
        "text": "fm.getLeading()"
      },
      {
        "letter": "d",
        "text": "fm.getHeight()"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch13-24",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.10 Displaying Images",
    "sourceNumber": 24,
    "prompt": "To create an Image object from an ImageIcon object imageIcon, use the __________ method.",
    "options": [
      {
        "letter": "a",
        "text": "imageIcon.image()"
      },
      {
        "letter": "b",
        "text": "imageIcon.getImage()"
      },
      {
        "letter": "c",
        "text": "imageIcon.setImage()"
      },
      {
        "letter": "d",
        "text": "imageIcon.returnImage()"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch13-25",
    "chapter": 13,
    "chapterTitle": "Chapter 13 Graphics",
    "section": "Section 13.10 Displaying Images",
    "sourceNumber": 25,
    "prompt": "Which of the following statements are correct?",
    "options": [
      {
        "letter": "a",
        "text": "You can set an image on a label, but the image is not resizable."
      },
      {
        "letter": "b",
        "text": "You can set an image on a button, but the image is not resizable."
      },
      {
        "letter": "c",
        "text": "You can draw an image on a GUI component using the drawImage method in the Graphics object. This image is resizable."
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ]
  },
  {
    "id": "ch16-01",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.2 Event and Event Source",
    "sourceNumber": 1,
    "prompt": "Pressing a button generates a(n) __________ event.",
    "options": [
      {
        "letter": "a",
        "text": "ItemEvent"
      },
      {
        "letter": "b",
        "text": "MouseEvent"
      },
      {
        "letter": "c",
        "text": "MouseMotionEvent"
      },
      {
        "letter": "d",
        "text": "ActionEvent"
      },
      {
        "letter": "e",
        "text": "ContainerEvent"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch16-02",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.2 Event and Event Source",
    "sourceNumber": 2,
    "prompt": "Clicking the closing button on the upper-right corner of a frame generates a(n) __________ event.",
    "options": [
      {
        "letter": "a",
        "text": "ItemEvent"
      },
      {
        "letter": "b",
        "text": "WindowEvent"
      },
      {
        "letter": "c",
        "text": "MouseMotionEvent"
      },
      {
        "letter": "d",
        "text": "ComponentEvent"
      },
      {
        "letter": "e",
        "text": "ContainerEvent"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch16-03",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.2 Event and Event Source",
    "sourceNumber": 3,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "If a component can generate an event, any subclass of the component can generate the same type of event."
      },
      {
        "letter": "b",
        "text": "All the event classes are subclasses of EventObject."
      },
      {
        "letter": "c",
        "text": "A component on which an event is generated is called the source object."
      },
      {
        "letter": "d",
        "text": "Every GUI component can generate MouseEvent, KeyEvent, FocusEvent, and ComponentEvent."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch16-04",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.3 Listeners, Registrations, and Handling Events",
    "sourceNumber": 4,
    "prompt": "The component that processes the listener is called ___________.",
    "options": [
      {
        "letter": "a",
        "text": "the source object"
      },
      {
        "letter": "b",
        "text": "the listener object"
      },
      {
        "letter": "c",
        "text": "the adapter object"
      },
      {
        "letter": "d",
        "text": "the adaptee object"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch16-05",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.3 Listeners, Registrations, and Handling Events",
    "sourceNumber": 5,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "Each event class has a corresponding listener interface."
      },
      {
        "letter": "b",
        "text": "The listener object's class must implement the corresponding event-listener interface."
      },
      {
        "letter": "c",
        "text": "A source may have multiple listeners."
      },
      {
        "letter": "d",
        "text": "The listener object must be registered by the source object."
      },
      {
        "letter": "e",
        "text": "A listener may listen for multiple sources."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "id": "ch16-06",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.3 Listeners, Registrations, and Handling Events",
    "sourceNumber": 6,
    "prompt": "Which of the following statements registers a panel object p as a listener for a button variable jbt?",
    "options": [
      {
        "letter": "a",
        "text": "addActionListener(p);"
      },
      {
        "letter": "b",
        "text": "jbt.addActionListener(p);"
      },
      {
        "letter": "c",
        "text": "jbt.addActionEventListener(p);"
      },
      {
        "letter": "d",
        "text": "jbt.addEventListener(p);"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch16-07",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.3 Listeners, Registrations, and Handling Events",
    "sourceNumber": 7,
    "prompt": "The interface __________ should be implemented to listen for a button action event.",
    "options": [
      {
        "letter": "a",
        "text": "MouseListener"
      },
      {
        "letter": "b",
        "text": "ActionListener"
      },
      {
        "letter": "c",
        "text": "FocusListener"
      },
      {
        "letter": "d",
        "text": "WindowListener"
      },
      {
        "letter": "e",
        "text": "ContainerListener"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch16-08",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.3 Listeners, Registrations, and Handling Events",
    "sourceNumber": 8,
    "prompt": "The method in the ActionEvent __________ returns the action command of the button.",
    "options": [
      {
        "letter": "a",
        "text": "getActionCommand()"
      },
      {
        "letter": "b",
        "text": "getModifiers()"
      },
      {
        "letter": "c",
        "text": "paramString()"
      },
      {
        "letter": "d",
        "text": "getID()"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch16-09",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.3 Listeners, Registrations, and Handling Events",
    "sourceNumber": 9,
    "prompt": "The handler (e.g., actionPerformed) is a method in ________.",
    "options": [
      {
        "letter": "a",
        "text": "a source object"
      },
      {
        "letter": "b",
        "text": "a listener object"
      },
      {
        "letter": "c",
        "text": "both source and listener object"
      },
      {
        "letter": "d",
        "text": "the Object class"
      },
      {
        "letter": "e",
        "text": "the EventObject class"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch16-10",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.3 Listeners, Registrations, and Handling Events",
    "sourceNumber": 10,
    "prompt": "Every event object has the ________ method.",
    "options": [
      {
        "letter": "a",
        "text": "getSource()"
      },
      {
        "letter": "b",
        "text": "getActionCommand()"
      },
      {
        "letter": "c",
        "text": "getTimeStamp()"
      },
      {
        "letter": "d",
        "text": "getWhen()"
      },
      {
        "letter": "e",
        "text": "getKeyChar()"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch16-11",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.4 Inner Classes",
    "sourceNumber": 11,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "Inner classes can make programs simple and concise."
      },
      {
        "letter": "b",
        "text": "An inner class can be declared public or private subject to the same visibility rules applied to a member of the class."
      },
      {
        "letter": "c",
        "text": "An inner class can be declared static. A static inner class can be accessed using the outer class name. A static inner class cannot access nonstatic members of the outer class."
      },
      {
        "letter": "d",
        "text": "An inner class supports the work of its containing outer class and is compiled into a class named OuterClassName$InnerClassName.class."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch16-12",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.4 Inner Classes",
    "sourceNumber": 12,
    "prompt": "Suppose A is an inner class in Test. A is compiled into a file named _________.",
    "options": [
      {
        "letter": "a",
        "text": "A.class"
      },
      {
        "letter": "b",
        "text": "Test$A.class"
      },
      {
        "letter": "c",
        "text": "A$Test.class"
      },
      {
        "letter": "d",
        "text": "Test&A.class"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch16-13",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.4 Inner Classes",
    "sourceNumber": 13,
    "prompt": "Which statement is true about a non-static inner class?",
    "options": [
      {
        "letter": "a",
        "text": "It must implement an interface."
      },
      {
        "letter": "b",
        "text": "It is accessible from any other class."
      },
      {
        "letter": "c",
        "text": "It can only be instantiated in the enclosing class."
      },
      {
        "letter": "d",
        "text": "It must be final if it is declared in a method scope."
      },
      {
        "letter": "e",
        "text": "It can access private instance variables in the enclosing object."
      }
    ],
    "correct": [
      "e"
    ]
  },
  {
    "id": "ch16-14",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.5 Anonymous Class Listeners",
    "sourceNumber": 14,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "An anonymous inner class is an inner class without a name."
      },
      {
        "letter": "b",
        "text": "An anonymous inner class must always extend a superclass or implement an interface, but it cannot have an explicit extends or implements clause."
      },
      {
        "letter": "c",
        "text": "An anonymous inner class must implement all the abstract methods in the superclass or in the interface."
      },
      {
        "letter": "d",
        "text": "An anonymous inner class always uses the no-arg constructor from its superclass to create an instance. If an anonymous inner class implements an interface, the constructor is Object()."
      },
      {
        "letter": "e",
        "text": "An anonymous inner class is compiled into a class named OuterClassName$n.class."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "id": "ch16-15",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.5 Anonymous Class Listeners",
    "sourceNumber": 15,
    "prompt": "Suppose A is an anonymous inner class in Test. A is compiled into a file named _________.",
    "options": [
      {
        "letter": "a",
        "text": "A.class"
      },
      {
        "letter": "b",
        "text": "Test$A.class"
      },
      {
        "letter": "c",
        "text": "A$Test.class"
      },
      {
        "letter": "d",
        "text": "Test$1.class"
      },
      {
        "letter": "e",
        "text": "Test&1.class"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch16-16",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.5 Anonymous Class Listeners",
    "sourceNumber": 17,
    "prompt": "Analyze the following code.\n\nimport java.awt.*;\nimport java.awt.event.*;\nimport javax.swing.*;\n\npublic class Test extends JFrame {\n  public void Test() {\n    JButton jbtOK = new JButton(\"OK\");\n    add(jbtOK);\n    jbtOK.addActionListener(new ActionListener() {\n      public void actionPerformed(ActionEvent e) {\n        System.out.println(\"The OK button is clicked\");\n      }\n    });\n  }\n\n  public static void main(String[] args) {\n    JFrame frame = new Test();\n    frame.setSize(300, 300);\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setVisible(true);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "The program has a compile error because no listeners are registered with jbtOK."
      },
      {
        "letter": "b",
        "text": "The program has a runtime error because no listeners are registered with jbtOK."
      },
      {
        "letter": "c",
        "text": "The message \"The OK button is clicked\" is displayed when you click the OK button."
      },
      {
        "letter": "d",
        "text": "The actionPerformed method is not executed when you click the OK button, because no instance of Test is registered with jbtOK."
      },
      {
        "letter": "e",
        "text": "When you run the program, the button is not displayed, because the constructor is declared wrong. It should be declared public Test(), not public void Test()."
      }
    ],
    "correct": [
      "e"
    ]
  },
  {
    "id": "ch16-17",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.6 Alternative Ways of Defining Listener Classes",
    "sourceNumber": 18,
    "prompt": "Analyze the following code.\n\nimport java.awt.*;\nimport java.awt.event.*;\nimport javax.swing.*;\n\npublic class Test extends JFrame implements ActionListener  {\n  public Test() {\n    JButton jbtOK = new JButton(\"OK\");\n    getContentPane().add(jbtOK);\n  }\n\n  public void actionPerformed(ActionEvent e) {\n    System.out.println(\"The OK button is clicked\");\n  }\n\n  public static void main(String[] args) {\n    JFrame frame = new Test();\n    frame.setSize(300, 300);\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setVisible(true);\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "The program has a compile error because no listeners are registered with jbtOK."
      },
      {
        "letter": "b",
        "text": "The program has a runtime error because no listeners are registered with jbtOK."
      },
      {
        "letter": "c",
        "text": "The message \"The OK button is clicked\" is displayed when you click the OK button."
      },
      {
        "letter": "d",
        "text": "The actionPerformed method is not executed when you click the OK button, because no instance of Test is registered with jbtOK."
      },
      {
        "letter": "e",
        "text": "None of the above."
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch16-18",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.6 Alternative Ways of Defining Listener Classes",
    "sourceNumber": 19,
    "prompt": "Analyze the following code.\n\n1 import java.awt.*;\n2 import java.awt.event.*;\n3 import javax.swing.*;\n4 \n5 public class Test extends JFrame {\n6   public Test() {\n7     JButton jbtOK = new JButton(\"OK\");\n8     JButton jbtCancel = new JButton(\"Cancel\");\n9     getContentPane().add(jbtOK);\n10    getContentPane().add(jbtCancel);\n11    jbtOK.addActionListener(this);\n12    jbtCancel.addActionListener(this);\n13  }\n14\n15  public void actionperformed(ActionEvent e) {\n16    System.out.println(\"A button is clicked\");\n17  }\n18\n19  public static void main(String[] args) {\n20    JFrame frame = new Test();\n21    frame.setSize(300, 300);\n22    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n23    frame.setVisible(true);\n24  }\n25}",
    "options": [
      {
        "letter": "a",
        "text": "The program has compile errors on Lines 11 and 12 because Test does not implement ActionListener."
      },
      {
        "letter": "b",
        "text": "The program has compile errors on Line 15 because the signature of actionperformed is wrong."
      },
      {
        "letter": "c",
        "text": "The program has compile errors on Line 20 because new Test() is assigned to frame (a variable of JFrame)."
      },
      {
        "letter": "d",
        "text": "The program has runtime errors on Lines 9 and 10 because jbtOK and jbtCancel are added to the same location in the container."
      },
      {
        "letter": "e",
        "text": "None of the above."
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch16-19",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.6 Alternative Ways of Defining Listener Classes",
    "sourceNumber": 20,
    "prompt": "Analyze the following code.\n\nimport javax.swing.*;\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Test extends A {\n  public static void main(String[] args) {\n    A frame = new Test();\n    frame.setSize(200, 100);\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n    frame.setVisible(true);\n  }\n\n  JButton jbtOK = new JButton(\"OK\");\n\n  public Test() {\n    getContentPane().add(jbtOK);\n    jbtOK.addActionListener(this);\n  }\n\n  public void actionPerformed(ActionEvent e) {\n    super.actionPerformed(e);\n\n    if (e.getSource() == jbtOK)\n      System.out.println(\"OK button is clicked\");\n  }\n}\n\nclass A extends JFrame implements ActionListener {\n  JButton jbtCancel = new JButton(\"Cancel\");\n\n  public A() {\n    getContentPane().setLayout(new FlowLayout());\n    getContentPane().add(jbtCancel);\n    jbtCancel.addActionListener(this);\n  }\n\n  public void actionPerformed(ActionEvent e) {\n    if (e.getSource() == jbtCancel)\n      System.out.println(\"Cancel button is clicked\");\n  }\n}",
    "options": [
      {
        "letter": "a",
        "text": "The program displays Cancel button on the left of the OK button."
      },
      {
        "letter": "b",
        "text": "When you click the OK button the message \"OK button is clicked\" is displayed."
      },
      {
        "letter": "c",
        "text": "When you click the Cancel button the message \"Cancel button is clicked\" is displayed."
      },
      {
        "letter": "d",
        "text": "If the super.actionPerformed(e) statement in the actionPerformed method in the Test class is omitted, no message is displayed if you click the Cancel button."
      },
      {
        "letter": "e",
        "text": "All of the above."
      }
    ],
    "correct": [
      "e"
    ]
  },
  {
    "id": "ch16-20",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.8 Mouse Events",
    "sourceNumber": 21,
    "prompt": "To detect whether the right button of the mouse is pressed, you use the method __________ in the MouseEvent object evt.",
    "options": [
      {
        "letter": "a",
        "text": "evt.isAltDown()"
      },
      {
        "letter": "b",
        "text": "evt.isControlDown()"
      },
      {
        "letter": "c",
        "text": "evt.isMetaDown()"
      },
      {
        "letter": "d",
        "text": "evt.isShiftDown()"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch16-21",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.8 Mouse Events",
    "sourceNumber": 22,
    "prompt": "To listen to mouse clicked events, the listener must implement the __________ interface or extend the _______ adapter.",
    "options": [
      {
        "letter": "a",
        "text": "MouseListener/MouseAdapter"
      },
      {
        "letter": "b",
        "text": "MouseMotionListener/MouseMotionAdapter"
      },
      {
        "letter": "c",
        "text": "WindowListener/WindowAdapter"
      },
      {
        "letter": "d",
        "text": "ComponentListener/ComponentAdapter"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch16-22",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.8 Mouse Events",
    "sourceNumber": 23,
    "prompt": "To listen to mouse moved events, the listener must implement the __________ interface or extend the _______ class.",
    "options": [
      {
        "letter": "a",
        "text": "MouseListener/MouseAdapter"
      },
      {
        "letter": "b",
        "text": "MouseMotionListener/MouseMotionAdapter"
      },
      {
        "letter": "c",
        "text": "WindowListener/WindowAdapter"
      },
      {
        "letter": "d",
        "text": "ComponentListener/ComponentAdapter"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch16-23",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.8 Mouse Events",
    "sourceNumber": 24,
    "prompt": "To get the x coordinate of the mouse pointer for the MouseEvent evt, you use __________.",
    "options": [
      {
        "letter": "a",
        "text": "evt.getX()"
      },
      {
        "letter": "b",
        "text": "evt.getPoint().x"
      },
      {
        "letter": "c",
        "text": "Either A or B"
      },
      {
        "letter": "d",
        "text": "Neither A nor B"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch16-24",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.8 Mouse Events",
    "sourceNumber": 25,
    "prompt": "The listener's __________ method is invoked after a mouse button is pressed (but not released yet).",
    "options": [
      {
        "letter": "a",
        "text": "public void mousePressed(MouseEvent e)"
      },
      {
        "letter": "b",
        "text": "public void mouseReleased(MouseEvent e)"
      },
      {
        "letter": "c",
        "text": "public void mouseEntered(MouseEvent e)"
      },
      {
        "letter": "d",
        "text": "public void mouseExited(MouseEvent e)"
      },
      {
        "letter": "e",
        "text": "public void mouseClicked(MouseEvent e)"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch16-25",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.8 Mouse Events",
    "sourceNumber": 26,
    "prompt": "The listener's __________ method is invoked after a mouse button is released.",
    "options": [
      {
        "letter": "a",
        "text": "public void mousePressed(MouseEvent e)"
      },
      {
        "letter": "b",
        "text": "public void mouseReleased(MouseEvent e)"
      },
      {
        "letter": "c",
        "text": "public void mouseEntered(MouseEvent e)"
      },
      {
        "letter": "d",
        "text": "public void mouseExited(MouseEvent e)"
      },
      {
        "letter": "e",
        "text": "public void mouseClicked(MouseEvent e)"
      }
    ],
    "correct": [
      "b",
      "e"
    ]
  },
  {
    "id": "ch16-26",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.9 Listener Interface Adapters",
    "sourceNumber": 16,
    "prompt": "Which of the following are correct names for listener adapters?",
    "options": [
      {
        "letter": "a",
        "text": "ActionAdapter"
      },
      {
        "letter": "b",
        "text": "MouseAdapter"
      },
      {
        "letter": "c",
        "text": "KeyAdapter"
      },
      {
        "letter": "d",
        "text": "WindowAdapter"
      }
    ],
    "correct": [
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch16-27",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.10 Keyboard Events",
    "sourceNumber": 27,
    "prompt": "To listen to keyboard actions, the listener must implement the __________ interface or extend the _________ class.",
    "options": [
      {
        "letter": "a",
        "text": "MouseListener/MouseAdapter"
      },
      {
        "letter": "b",
        "text": "KeyListener/KeyAdapter"
      },
      {
        "letter": "c",
        "text": "WindowListener/WindowAdapter"
      },
      {
        "letter": "d",
        "text": "ComponentListener/ComponentAdapter"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch16-28",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.10 Keyboard Events",
    "sourceNumber": 28,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "The keyPressed handler is invoked when a key is pressed."
      },
      {
        "letter": "b",
        "text": "The keyReleased handler is invoked when a key is released."
      },
      {
        "letter": "c",
        "text": "The keyTyped handler is invoked when a key is entered."
      },
      {
        "letter": "d",
        "text": "The keyTyped handler is invoked when a Unicode character is entered."
      }
    ],
    "correct": [
      "a",
      "b",
      "d"
    ]
  },
  {
    "id": "ch16-29",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.10 Keyboard Events",
    "sourceNumber": 29,
    "prompt": "To check whether a DELETE key is pressed or released, which handler should be used?",
    "options": [
      {
        "letter": "a",
        "text": "keyPressed(KeyEvent e)"
      },
      {
        "letter": "b",
        "text": "keyReleased(KeyEvent e)"
      },
      {
        "letter": "c",
        "text": "keyTyped(KeyEvent e)"
      }
    ],
    "correct": [
      "a",
      "b"
    ]
  },
  {
    "id": "ch16-30",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.10 Keyboard Events",
    "sourceNumber": 30,
    "prompt": "The getKeyCode() method of the KeyEvent returns __________.",
    "options": [
      {
        "letter": "a",
        "text": "a character"
      },
      {
        "letter": "b",
        "text": "the ASCII code of the character"
      },
      {
        "letter": "c",
        "text": "the Unicode code of the character"
      },
      {
        "letter": "d",
        "text": "None of the above."
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch16-31",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.10 Keyboard Events",
    "sourceNumber": 31,
    "prompt": "What is the value of evt.getKeyCode() or evt.getChar() for the keyTyped() events?",
    "options": [
      {
        "letter": "a",
        "text": "A character"
      },
      {
        "letter": "b",
        "text": "The ASCII code of the character"
      },
      {
        "letter": "c",
        "text": "The Unicode code of the character"
      },
      {
        "letter": "d",
        "text": "VK_UNDEFINED"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch16-32",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.10 Keyboard Events",
    "sourceNumber": 32,
    "prompt": "To enable a component to listen to keyboard events, you need to ____",
    "options": [
      {
        "letter": "a",
        "text": "Implement the KeyListener interface for the component."
      },
      {
        "letter": "b",
        "text": "Override the isFocusTraversable method defined in the Component class to return true."
      },
      {
        "letter": "c",
        "text": "Invoke the component's requestFocus method to set focus on this component."
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ]
  },
  {
    "id": "ch16-33",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.10 Keyboard Events",
    "sourceNumber": 33,
    "prompt": "To be a listener for ActionEvent, an object must be an instance of ____________.",
    "options": [
      {
        "letter": "a",
        "text": "ActionEvent"
      },
      {
        "letter": "b",
        "text": "ActionListener"
      },
      {
        "letter": "c",
        "text": "EventObject"
      },
      {
        "letter": "d",
        "text": "WindowListener"
      },
      {
        "letter": "e",
        "text": "WindowEvent"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch16-34",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.10 Keyboard Events",
    "sourceNumber": 34,
    "prompt": "You can use getWhen() to find the time of an ____________.",
    "options": [
      {
        "letter": "a",
        "text": "ActionEvent"
      },
      {
        "letter": "b",
        "text": "MouseEvent"
      },
      {
        "letter": "c",
        "text": "KeyEvent"
      },
      {
        "letter": "d",
        "text": "ComponentEvent"
      },
      {
        "letter": "e",
        "text": "WindowEvent"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ]
  },
  {
    "id": "ch16-35",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.11 Animation Using the Timer Class",
    "sourceNumber": 35,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "You can add a listener in the Timer constructor."
      },
      {
        "letter": "b",
        "text": "You can use the addActionListener method in the Timer class to add a listener."
      },
      {
        "letter": "c",
        "text": "You can specify a delay in the Timer constructor."
      },
      {
        "letter": "d",
        "text": "You can specify a delay using the setDelay method."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch16-36",
    "chapter": 16,
    "chapterTitle": "Chapter 16 Event-Driven Programming",
    "section": "Section 16.11 Animation Using the Timer Class",
    "sourceNumber": 36,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "You must always specify a listener when creating a Timer object."
      },
      {
        "letter": "b",
        "text": "You can add multiple listeners for a Timer object."
      },
      {
        "letter": "c",
        "text": "To stop a timer, invoke timer.stop()."
      },
      {
        "letter": "d",
        "text": "To start a timer, invoke timer.start()."
      },
      {
        "letter": "e",
        "text": "When a timer is created, it is automatically started."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch17-01",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.2 Events for JCheckBox, JRadioButton, and JTextField",
    "sourceNumber": 1,
    "prompt": "Clicking a JButton object generates __________ events.",
    "options": [
      {
        "letter": "a",
        "text": "ActionEvent"
      },
      {
        "letter": "b",
        "text": "ItemEvent"
      },
      {
        "letter": "c",
        "text": "ComponentEvent"
      },
      {
        "letter": "d",
        "text": "ContainerEvent"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch17-02",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.2 Events for JCheckBox, JRadioButton, and JTextField",
    "sourceNumber": 2,
    "prompt": "Clicking a JCheckBox object generates __________ events.",
    "options": [
      {
        "letter": "a",
        "text": "ActionEvent"
      },
      {
        "letter": "b",
        "text": "ItemEvent"
      },
      {
        "letter": "c",
        "text": "ComponentEvent"
      },
      {
        "letter": "d",
        "text": "ContainerEvent"
      }
    ],
    "correct": [
      "a",
      "b"
    ]
  },
  {
    "id": "ch17-03",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.2 Events for JCheckBox, JRadioButton, and JTextField",
    "sourceNumber": 15,
    "prompt": "Clicking a JRadioButton generates _____________ events.",
    "options": [
      {
        "letter": "a",
        "text": "ActionEvent"
      },
      {
        "letter": "b",
        "text": "ItemEvent"
      },
      {
        "letter": "c",
        "text": "ComponentEvent"
      },
      {
        "letter": "d",
        "text": "ContainerEvent"
      }
    ],
    "correct": [
      "a",
      "b"
    ]
  },
  {
    "id": "ch17-04",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.2 Events for JCheckBox, JRadioButton, and JTextField",
    "sourceNumber": 16,
    "prompt": "Pressing the Enter key on a JTextField generates _____________ events.",
    "options": [
      {
        "letter": "a",
        "text": "ActionEvent"
      },
      {
        "letter": "b",
        "text": "ItemEvent"
      },
      {
        "letter": "c",
        "text": "ComponentEvent"
      },
      {
        "letter": "d",
        "text": "ContainerEvent"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch17-05",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.3 Text Areas",
    "sourceNumber": 25,
    "prompt": "The method __________ appends a string s into the text area jta.",
    "options": [
      {
        "letter": "a",
        "text": "jta.setText(s)"
      },
      {
        "letter": "b",
        "text": "jta.appendText(s)"
      },
      {
        "letter": "c",
        "text": "jta.append(s)"
      },
      {
        "letter": "d",
        "text": "jta.insertText(s)"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch17-06",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.3 Text Areas",
    "sourceNumber": 26,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "You can specify a horizontal text alignment in a text area."
      },
      {
        "letter": "b",
        "text": "You can specify the number of columns in a text area."
      },
      {
        "letter": "c",
        "text": "You can disable editing on a text area."
      },
      {
        "letter": "d",
        "text": "You can create a text field with a specified text area."
      }
    ],
    "correct": [
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch17-07",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.3 Text Areas",
    "sourceNumber": 27,
    "prompt": "To wrap a line in a text area jta, invoke ____________.",
    "options": [
      {
        "letter": "a",
        "text": "jta.setLineWrap(false)"
      },
      {
        "letter": "b",
        "text": "jta.setLineWrap(true)"
      },
      {
        "letter": "c",
        "text": "jta.WrapLine()"
      },
      {
        "letter": "d",
        "text": "jta.wrapText()"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch17-08",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.3 Text Areas",
    "sourceNumber": 28,
    "prompt": "To wrap a line in a text area jta on words, invoke ____________.",
    "options": [
      {
        "letter": "a",
        "text": "jta.setWrapStyleWord(false)"
      },
      {
        "letter": "b",
        "text": "jta.setWrapStyleWord(true)"
      },
      {
        "letter": "c",
        "text": "jta.wrapStyleWord()"
      },
      {
        "letter": "d",
        "text": "jta.wrapWord()"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch17-09",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.3 Text Areas",
    "sourceNumber": 29,
    "prompt": "The method __________ adds a text area jta to a scrollpane jScrollPane.",
    "options": [
      {
        "letter": "a",
        "text": "jScrollPane.add(jta)"
      },
      {
        "letter": "b",
        "text": "jScrollPane.insert(jta)"
      },
      {
        "letter": "c",
        "text": "jScrollPane.addItem(jta)"
      },
      {
        "letter": "d",
        "text": "None of the above."
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch17-10",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.4 Combo Boxes",
    "sourceNumber": 30,
    "prompt": "How many items can be added into a JComboBox object?",
    "options": [
      {
        "letter": "a",
        "text": "0"
      },
      {
        "letter": "b",
        "text": "1"
      },
      {
        "letter": "c",
        "text": "2"
      },
      {
        "letter": "d",
        "text": "Unlimited"
      }
    ],
    "correct": [
      "d"
    ]
  },
  {
    "id": "ch17-11",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.4 Combo Boxes",
    "sourceNumber": 31,
    "prompt": "How many items can be selected from a JComboBox object at a time?",
    "options": [
      {
        "letter": "a",
        "text": "0"
      },
      {
        "letter": "b",
        "text": "1"
      },
      {
        "letter": "c",
        "text": "2"
      },
      {
        "letter": "d",
        "text": "Unlimited"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch17-12",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.4 Combo Boxes",
    "sourceNumber": 32,
    "prompt": "_______________ returns the selected item on a JComboBox jcbo.",
    "options": [
      {
        "letter": "a",
        "text": "jcbo.getSelectedIndex()"
      },
      {
        "letter": "b",
        "text": "jcbo.getSelectedItem()"
      },
      {
        "letter": "c",
        "text": "jcbo.getSelectedIndices()"
      },
      {
        "letter": "d",
        "text": "jcbo.getSelectedItems()"
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch17-13",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.4 Combo Boxes",
    "sourceNumber": 33,
    "prompt": "The method __________ adds an item s into a JComboBox jcbo.",
    "options": [
      {
        "letter": "a",
        "text": "jcbo.add(s)"
      },
      {
        "letter": "b",
        "text": "jcbo.addChoice(s)"
      },
      {
        "letter": "c",
        "text": "jcbo.addItem(s)"
      },
      {
        "letter": "d",
        "text": "jcbo.addObject(s)."
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch17-14",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.4 Combo Boxes",
    "sourceNumber": 34,
    "prompt": "Clicking a JComboBox object always generates __________ events.",
    "options": [
      {
        "letter": "a",
        "text": "ActionEvent"
      },
      {
        "letter": "b",
        "text": "ItemEvent"
      },
      {
        "letter": "c",
        "text": "MouseEvent"
      },
      {
        "letter": "d",
        "text": "KeyEvent"
      },
      {
        "letter": "e",
        "text": "WindowEvent"
      }
    ],
    "correct": [
      "a",
      "c"
    ]
  },
  {
    "id": "ch17-15",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.4 Combo Boxes",
    "sourceNumber": 35,
    "prompt": "Clicking a JComboBox object generates an ItemEvent event,",
    "options": [
      {
        "letter": "a",
        "text": "if an item is selected."
      },
      {
        "letter": "b",
        "text": "if a new item is selected."
      }
    ],
    "correct": [
      "b"
    ]
  },
  {
    "id": "ch17-16",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.5 Lists",
    "sourceNumber": 36,
    "prompt": "____________ is a component that enables the user to choose a single value or multiple values.",
    "options": [
      {
        "letter": "a",
        "text": "A text field"
      },
      {
        "letter": "b",
        "text": "A combo box"
      },
      {
        "letter": "c",
        "text": "A list"
      },
      {
        "letter": "d",
        "text": "A label"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch17-17",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.5 Lists",
    "sourceNumber": 37,
    "prompt": "______________ allows selections of multiple contiguous items without restrictions,",
    "options": [
      {
        "letter": "a",
        "text": "Single selection"
      },
      {
        "letter": "b",
        "text": "Single-interval selection"
      },
      {
        "letter": "c",
        "text": "Multiple-interval selection"
      },
      {
        "letter": "d",
        "text": "Default selection"
      }
    ],
    "correct": [
      "c",
      "d"
    ]
  },
  {
    "id": "ch17-18",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.5 Lists",
    "sourceNumber": 38,
    "prompt": "______________ sets the background of the selected item in list jlst to yellow.",
    "options": [
      {
        "letter": "a",
        "text": "jlst.setBackground(Color.YELLOW)"
      },
      {
        "letter": "b",
        "text": "jlst.setSelectedBackground(Color.YELLOW)"
      },
      {
        "letter": "c",
        "text": "jlst.setSelectionBackground(Color.YELLOW)"
      },
      {
        "letter": "d",
        "text": "jlst.setSelectionbackground(Color.YELLOW)"
      }
    ],
    "correct": [
      "c"
    ]
  },
  {
    "id": "ch17-19",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.5 Lists",
    "sourceNumber": 39,
    "prompt": "Clicking a JList object generates __________ events.",
    "options": [
      {
        "letter": "a",
        "text": "ActionEvent and ItemEvent"
      },
      {
        "letter": "b",
        "text": "ItemEvent and ComponentEvent"
      },
      {
        "letter": "c",
        "text": "ComponentEvent and ContainerEvent"
      },
      {
        "letter": "d",
        "text": "ActionEvent and ContainerEvent"
      }
    ],
    "correct": [
      "a"
    ]
  },
  {
    "id": "ch17-20",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.6 Scroll Bars",
    "sourceNumber": 40,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "Every Swing GUI component has a default constructor."
      },
      {
        "letter": "b",
        "text": "You can create a scroll bar by specifying its orientation."
      },
      {
        "letter": "c",
        "text": "JScrollBar fires an ActionEvent."
      },
      {
        "letter": "d",
        "text": "JScrollBar fires an AdjustmentEvent."
      },
      {
        "letter": "e",
        "text": "A listener of a JScrollBar must implement AdjustmentEvent and the adjustmentValueChanged method."
      }
    ],
    "correct": [
      "a",
      "b",
      "d",
      "e"
    ]
  },
  {
    "id": "ch17-21",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.6 Scroll Bars",
    "sourceNumber": 41,
    "prompt": "The following are properties of a JScrollBar.",
    "options": [
      {
        "letter": "a",
        "text": "minimum"
      },
      {
        "letter": "b",
        "text": "maximum"
      },
      {
        "letter": "c",
        "text": "orientation"
      },
      {
        "letter": "d",
        "text": "visibleAmount"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "id": "ch17-22",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.7 Sliders",
    "sourceNumber": 42,
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "letter": "a",
        "text": "You can create a JSlider bar by specifying its orientation."
      },
      {
        "letter": "b",
        "text": "JSlider fires an ActionEvent."
      },
      {
        "letter": "c",
        "text": "JSlider fires an AdjustmentEvent."
      },
      {
        "letter": "d",
        "text": "JSlider fires a javax.swing.event.ChangeEvent."
      },
      {
        "letter": "e",
        "text": "A listener of a JSlider must implement ChangeEvent and the stateChanged method."
      }
    ],
    "correct": [
      "a",
      "b",
      "d",
      "e"
    ]
  },
  {
    "id": "ch17-23",
    "chapter": 17,
    "chapterTitle": "Chapter 17 GUI Components",
    "section": "Section 17.7 Sliders",
    "sourceNumber": 43,
    "prompt": "The following are properties of a JSlider.",
    "options": [
      {
        "letter": "a",
        "text": "minimum"
      },
      {
        "letter": "b",
        "text": "maximum"
      },
      {
        "letter": "c",
        "text": "orientation"
      },
      {
        "letter": "d",
        "text": "visibleAmount"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ]
  }
];
