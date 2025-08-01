



export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
}

export interface FileAttachment {
  name: string;
  mimeType: string;
  data?: string; // base64 encoded string. Optional to allow for saving w/o data.
}

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: number;
  attachments?: FileAttachment[];
  groundingMetadata?: any;
  thoughts?: string;
}

export interface Folder {
  id: string;
  name: string;
  icon?: string;
  createdAt: number;
}

export interface Persona {
  id: string;
  isDefault?: boolean;
  name: string;
  avatar: {
    type: 'emoji' | 'url' | 'base64';
    value: string;
  };
  bio: string;
  systemPrompt: string;
  tools: {
    googleSearch: boolean;
    codeExecution: boolean;
    urlContext: boolean;
  };
  isNew?: boolean;
}

export interface ChatSession {
  id:string;
  title: string;
  icon?: string; // Emoji icon for the chat
  model: string;
  messages: Message[];
  createdAt: number;
  folderId: string | null;
  personaId?: string | null;
}

export interface Settings {
  theme: 'light' | 'dark';
  language: 'en' | 'zh';
  apiKey: string | null;
  showSuggestions: boolean;
  defaultModel: string;
  suggestionModel: string;
  autoTitleGeneration: boolean;
  titleGenerationModel: string;
  personaBuilderModel: string;
  defaultSearch: boolean;
  showThoughts: boolean;
}