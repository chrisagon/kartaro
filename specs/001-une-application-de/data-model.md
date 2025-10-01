# Data Model

## Card
- **id**: string (UUID)
- **title**: string
- **description**: string
- **icon**: string (URL or base64)
- **category**: string

## Card Collection
- **id**: string (UUID)
- **name**: string
- **cards**: array of Card

## Theme/Context
- **theme**: string
- **context**: string
