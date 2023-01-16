User Story
1.	As a diary owner, I want my diary to be initially locked and add new entries or look at old entries.

2. As a diary owner, I want to be able to unlock my diary and add a new entry in my diary and look back at existing entries.

3. As a diary owner I want to be able to lock my diary, and not be able to add new entries or look at existing entries.


| Objects | Properties                 | Messages                           | Outputs  |
| ------- | -------------------------- | ---------------------------------- | -------- |
| Diary   | Diary@String               | Lock(@boolean)                     | void     |
|         |                            | addEntry(@string)                  | void     |
|         |                            | getEntries(@string)                | @String  |
