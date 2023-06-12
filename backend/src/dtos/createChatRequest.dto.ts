export interface CreateChatRequestDTO {
    cachedMessages: {
        user: string,
        assistant: string,
    }[],
    userMessage: string,
}